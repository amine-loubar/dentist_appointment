import { Appointment } from "../models/appointment.js";

export class AppointmentController {
    // Get Appointments
    async getAppointments(req, res) {
        try {
            const appointments = await Appointment.find();
            return res.status(200).json(appointments);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching Admins', error: error.message });
        }
    }

    // Get single appointment
    async getAppointmentById(req, res) {
        const appointmentId = req.params.id;
        try {
            const appointment = await Appointment.findById(appointmentId);
            if (!appointment) {
                return res.status(404).json({ message: 'Appointment not found' });
            }
            return res.status(200).json(appointment);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching Appointment', error: error.message });
        }
    }

    // Create appointment
    async createAppointment(req, res) {
        const { name, address, email, phone, date, reason } = req.body;
        try {
            const newAppointment = new Appointment({ name, address, email, phone, date, reason });
            await newAppointment.save();
            return res.status(201).json({ message: 'Appointment created successfully', appointment: newAppointment });
        } catch (error) {
            return res.status(400).json({ message: 'Error creating Appointment', error: error.message });
        }
    }

    // Update appointment
    async updateAppointment(req, res) {
        const appointmentId = req.params.id;
        const updates = req.body;
        try {
            const appointment = await Appointment.findByIdAndUpdate(appointmentId, updates, { new: true });
            if (!appointment) {
                return res.status(404).json({ message: 'Appointment not found' });
            }
            return res.status(200).json({ message: 'Appointment updated successfully', appointment });
        } catch (error) {
            return res.status(500).json({ message: 'Error updating Appointment', error: error.message });
        }
    }

    // Delete appointment
    async deleteAppointment(req, res) {
        const appointmentId = req.params.id

        try {
            const appointment = await Appointment.findByIdAndDelete(appointmentId);
            if (!appointment) {
                return res.status(404).json({ message: 'Appointment not found' });
            }
            return res.status(200).json({ message: 'Appointment deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting Appointment', error: error.message });
        }
    }
}