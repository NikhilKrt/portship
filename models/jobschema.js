var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = mongoose.Schema.Types.ObjectId;

var Note = new Schema({});

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
		type: String,
		required: true
	},
	etd:{
		type: String,
		required: true
	},
	client:{
		type: String,
		required: true
	},
	last_port:{
		type: String,
		required: true
	},
	isps:{
		type: String,
		required: true
	},
	next_port:{
		type: String,
		required: true
	},
	port_of_call:{
		type: String,
		required: true
	},
	pic:{
		type: String,
		required: true
	},
	task:{
		type: [Task],
		required: true
	},
	note: [
		{
			type: String
		}
	],
	arrival:{
		type: Arrival,
		required: true
	},
	departure:{
		type: Departure,
		required: true
	},
	assigned:{
		type: Number,
		required: true
	},
	status:{
		type: Number,
		required: true
	},
})

const jobModel = mongoose.model('Job', jobSchema);

module.exports = {
	model : jobModel
}