import bcrypt from 'bcrypt';

// Middleware to hash the Admin's password
export async function hashPassword(req, res, next) {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Replace the plain password with the hashed password in the request body
        req.body.password = hashedPassword;
        next(); // Call the next middleware or route handler
    } catch (error) {
        return res.status(500).json({ message: 'Error hashing password', error: error.message });
    }
}
