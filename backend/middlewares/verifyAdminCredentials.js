import { Admin } from '../models/admin.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = "sdfhjkJHH05JHd"; // Ensure this is set in your environment variables

// Middleware to verify admin credentials and generate a JWT token
export async function verifyAdminCredentials(req, res) {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the password with the hashed password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: admin._id, email: admin.email }, JWT_SECRET, { expiresIn: '1h' });

        // Attach the token to the response
        res.json({
            message: 'Login successful',
            token,
            admin: { id: admin._id, email: admin.email }
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error verifying credentials', error: error.message });
    }
}
