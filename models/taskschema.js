var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Detail = new Schema({
	type: String,
	required: true
});

var taskSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	detail:{
		type: Detail,
		required: true
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