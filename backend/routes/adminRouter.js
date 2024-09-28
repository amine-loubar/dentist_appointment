import { Router } from 'express';
import { AdminController } from "../controllers/adminController.js";
import { hashPassword } from '../middlewares/hashPassword.js';
import { verifyAdminCredentials } from '../middlewares/verifyAdminCredentials.js';

export const adminRouter = Router();
const adminController = new AdminController();

// Get all Admins
adminRouter.get("/", (req, res) => {
    adminController.getAdmins(req, res);
});

// Admin registration route
adminRouter.post("/create-admin", hashPassword, (req, res) => {
    adminController.createAdmin(req, res);
});

// Admin login route
adminRouter.post("/login", verifyAdminCredentials, (req, res) => {
    adminController.login(req, res);
});

// Get Admin profile by ID
adminRouter.get("/:id", (req, res) => {
    adminController.getAdminById(req, res);
});

// Update Admin profile by ID
adminRouter.put("/:id", (req, res) => {
    adminController.updateAdmin(req, res);
});

// Delete Admin by ID
adminRouter.delete("/:id", (req, res) => {
    adminController.deleteAdmin(req, res);
});
