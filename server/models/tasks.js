import mongoose from 'mongoose';

const tasksSchema = mongoose.Schema({
	id: { type: Number, required: true },
	text: { type: String, required: true },
	deleted: { type: Boolean, required: true }
});

export default mongoose.model('tasks', tasksSchema);
