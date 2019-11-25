var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var agentSchema = new Schema({
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

const agentModel = mongoose.model('Agent', agentSchema);

module.exports = {
	model : agentModel
}