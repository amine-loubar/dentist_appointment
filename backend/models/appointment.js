import { Schema, model } from 'mongoose';

const AppointmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    reason: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ['pending', 'scheduled', 'cancelled', 'completed'],
        default: 'pending'
    },
}, { timestamps: true });

export const Appointment = model('Appointment', AppointmentSchema);
