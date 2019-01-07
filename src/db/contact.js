import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({
	name: {
		require: true,
		type: String
	},
	emailId: {
		require: true,
		type: String
	},
	phone: {
		type: Number
	},
	message: {
		require: true,
		type: String
	}
});

module.exports = mongoose.model('contact', contactSchema);
