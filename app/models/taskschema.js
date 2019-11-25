var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Detail = new Schema({
	name: {
		type: String,
		required: true
	},
	details: {
		type: String,
		required: true
	}
},{_id: false});

var taskSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	detail:{
		type: [Detail]
	},
	status:{
		type: Number,
		required: true
	}
})

const taskModel = mongoose.model('Task', taskSchema);

module.exports = {
	model : taskModel
}