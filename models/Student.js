import mongoose from "mongoose";

// Defining Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 18, max: 60,
    },
    fees: {
        type: mongoose.Types.Decimal128,
        required: true,
        validate: (value) => {
            value >= 5000.5
        }
    }
});

// Model(collection) 
const Student = mongoose.model('Student', studentSchema);

export default Student;
