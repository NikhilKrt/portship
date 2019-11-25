var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = mongoose.Schema.Types.ObjectId;

var Draft = new Schema({
	fwd: {
		type: Number,
		required: true
	},
	aft: {
		type: Number,
		required: true
	}
});

var Rob = new Schema({
	fuel: {
		type: Number,
		required: true
	},
	diesel: {
		type: Number,
		required: true
	},
	water: {
		type: Number,
		required: true
	}
});

var Arrival = new Schema({
	draft: {
		type: Draft,
		required:true
	},
	rob: {
		type: Rob,
		required: true
	}
});

var Departure = new Schema({
	draft: {
		type: Draft,
		required:true
	},
	rob: {
		type: Rob,
		required: true
	}
});

var jobSchema = new Schema({
	vessel:{
		type: String,
		required: true
	},
	name:{
		type: String,
		required: true
	},
	eta:{
		type: String
	},
	etd:{
		type: String
	},
	client:{
		type: String,
		required: true
	},
	last_port:{
		type: String
	},
	isps:{
		type: String
	},
	next_port:{
		type: String
	},
	port_of_call:{
		type: String,
		required: true
	},
	pic:{
		type: String
	},
	task:{
		type: [Task]
	},
	note: {
		type: [String]
	},
	arrival:{
		type: Arrival,
		required: true
	},
	departure:{
		type: Departure,
		required: true
	},
	assigned:{
		type: Number
	},
	status:{
		type: Number
	},
})

const jobModel = mongoose.model('Job', jobSchema);

module.exports = {
	model : jobModel
}