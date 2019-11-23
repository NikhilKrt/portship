var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var options = {
	timestamp:{
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
}

var Flight = new Schema({
	number:{
		type: String,
		required: true
	},
	departure_date:{
		type: String
	},
	departure_time:{
		type: String
	},
	arrival_date:{
		type: String
	},
	arrival_time:{
		type: String
	}
}, {_id: false})

var Contact = new Schema({
	name:{
		type:String,
		required: true
	},
	phone:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	is_residential:{
		type: Boolean,
		required: true,
		default: false
	},
	address:{
		type: String,
		required: true
	},
	city:{
		type: String,
		required: true
	},
	country:{
		type: String,
		required: true
	},
	state:{
		type: String,
		required: true
	},
	pincode:{
		type: String,
		required: true
	},
	company:{
		type: String
	}
},{_id: false})

var billSchema = new Schema({
	type:{
		type: String,
		required: true
	},
	number:{
		type: String,
	},
	issued_by:{
		type: String,
	},
	consigneer:{
		type: Contact,
		required: true,
	},
	consignee:{
		type: Contact,
		required: true
	},
	flight:{
		type: Flight,
	},
	shipment_weight:{
		type: String,
		required: true
	},
	issuing_agent:{
		type: String,
		required: true
	},
	issuing_agent_code:{
		type: String,
		required:true
	},
	departure_port:{
		type: String,
		required: true
	},
	destination_port:{
		type: String,
		required: true
	},
	document:{
		type: String
	},
	house_number:{
		type: String,
		required: true
	}
}, options);


const billModel = mongoose.model('Bills', billSchema);

module.exports = {
	model : billModel
}