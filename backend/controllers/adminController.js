import { Admin } from '../models/admin.js';

export class AdminController {
    // Create a new Admin
    async createAdmin(req, res) {
        const { name, email, password } = req.body;

        try {
            const newAdmin = new Admin({ name, email, password }); // password is already hashed
            await newAdmin.save();
            return res.status(201).json({ message: 'Admin created successfully', Admin: newAdmin });
        } catch (error) {
            return res.status(400).json({ message: 'Error creating Admin', error: error.message });
        }
    }

    // Login a Admin
    async login(req, res) {
        const admin = req.Admin; // Get the Admin from the request (set by middleware)
        return res.status(200).json({ message: 'Login successful', admin });
    }

    // Logout
    async logout(req, res) {
        return res.status(200).json({ message: 'Logout successful' });
    }

    // Get Admins
    async getAdmins(req, res) {
        try {
            const admins = await Admin.find();
            return res.status(200).json(admins);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching Admins', error: error.message });
        }
    }

    // Get a Admin by ID
    async getAdminById(req, res) {
        const adminId = req.params.id;

        try {
            const admin = await Admin.findById(adminId);
            if (!admin) {
                return res.status(404).json({ message: 'Admin not found' });
            }
            return res.status(200).json(admin);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching Admin', error: error.message });
        }
    }

    // Update a Admin
    async updateAdmin(req, res) {
        const adminId = req.params.id;
        const updates = req.body;

        try {
            const Admin = await Admin.findByIdAndUpdate(adminId, updates, { new: true });
            if (!Admin) {
                return res.status(404).json({ message: 'Admin not found' });
            }
            return res.status(200).json({ message: 'Admin updated successfully', Admin });
        } catch (error) {
            return res.status(400).json({ message: 'Error updating Admin', error: error.message });
        }
    }

    // Delete a Admin
    async deleteAdmin(req, res) {
        const adminId = req.params.id;

        try {
            const admin = await Admin.findByIdAndDelete(adminId);
            if (!admin) {
                return res.status(404).json({ message: 'Admin not found' });
            }
            return res.status(200).json({ message: 'Admin deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting Admin', error: error.message });
        }
    }
}
