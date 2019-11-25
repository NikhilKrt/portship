var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var managerSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	phone:{
		type: Number,
		required: true
	}
})

const managerModel = mongoose.model('Manager', managerSchema);

module.exports = {
	model : managerModel
}