const express       = require('express');
const router		= express.Router();
const JobModel	= require('../../app/models/jobschema');

const mongoose 		= require('mongoose');

// var id				= mongoose.Type.ObjectId;

//Get Job List
router.get('/list', (req, res) => {
	JobModel.find({}).then(
		(data)=> {
			res.send(data);
		},
		(err) => {
			res.status(401).send('Error');
		}
	)
});

//Get Job by Id
router.get('/:id', (req, res) => {
	JobModel.find({_id: mongoose.Type.ObjectId(req.params.id)}).then(
		(data)=> {
			res.send(data);
		},
		(err) => {
			res.status(401).send('Error');
		}
	)
});

//Edit Job 
router.put('/edit/:id', (req, res) => {
	JobModel.findOneAndUpdate( 
		{_id: mongoose.Type.ObjectId(req.params.id)},
		{
			$set: {
				name: req.body.name,
				eta: req.body.eta,
				etd: req.body.etd,
				last_port: req.body.last_port,
				isps: req.body.isps,
				next_port: req.body.next_port,
				port_of_call: req.body.port_of_call,
				pic: req.body.pic,
				task: req.body.task,
				note: req.body.note,
				arrival: req.body.arrival,
				departure: req.body.departure,
				status: req.body.status
			}
		},
		{new: true})
		.then((result)=> {
			if(result) {
				res.send('Success')
			} else {
				res.send('No such user exist')
			}
		}).catch((err)=> {
			res.send(err);
		}
	)
});

//Edit Job Status
router.put('/status/:id', (req, res) => {
	JobModel.findOneAndUpdate( 
		{_id: mongoose.Type.ObjectId(req.params.id)}, 
		{
			$set: {
				status: req.body.status
			}
		}, 
		{new: true})
		.then((result)=> {
			if(result) {
				res.send('Success')
			} else {
				res.send('No such user exist')
			}
		}).catch((err)=> {
			res.status().send(err);
		}
	)	
});

//Edit Assigned Agent
router.put('/agent/:id', (req, res) => {
	JobModel.findOneAndUpdate( 
		{_id: mongoose.Type.ObjectId(req.params.id)}, 
		{
			$set: {
				assigned: req.body.assigned
			}
		}, 
		{new: true})
		.then((result)=> {
			if(result) {
				res.send('Success')
			} else {
				res.send('No such user exist')
			}
		}).catch((err)=> {
			res.status().send(err);
		}
	)
});

//Delete Job
router.delete('/delete/:id', (req, res) => {
	JobModel.findOneAndRemove(
		{_id: mongoose.Type.ObjectId(req.params.id)}, 
		(err) => {
		if(err) {
			console.log(err);
			return res.status().send(err);
		}
		res.send('Deleted');
	})
});

module.exports = router;