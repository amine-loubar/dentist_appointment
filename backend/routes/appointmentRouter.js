import { Router } from 'express';
import { AppointmentController } from "../controllers/appointmentController.js";


const appointmentRouter = Router();
const appointmentController = new AppointmentController();

// Get Appointments
appointmentRouter.get("/", (req, res) => {
    appointmentController.getAppointments(req, res);
});

// Get single appointment
appointmentRouter.get("/:id", (req, res) => {
    appointmentController.getAppointmentById(req, res);
});

// Create appointment
appointmentRouter.post("/", (req, res) => {
    appointmentController.createAppointment(req, res);
});

// Update appointment	
appointmentRouter.put("/:id", (req, res) => {
    appointmentController.updateAppointment(req, res);
});

// Delete appointment
appointmentRouter.delete("/:id", (req, res) => {
    appointmentController.deleteAppointment(req, res);
});


export { appointmentRouter }