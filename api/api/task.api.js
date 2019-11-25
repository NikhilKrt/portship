const express       = require('express');
const router		= express.Router();
const TaskModel	= require('../../app/models/taskschema').model;

const mongoose 		= require('mongoose');

// var id				= mongoose.Type.ObjectId;

//Get Task List
router.get('/all/list', (req, res) => {
	TaskModel.find({}).then(
		(data)=> {
			res.send(data);
		},
		(err) => {
			res.status(401).send('Error');
		}
	)
});

//Get Task
router.get('/detail/:id', (req, res) => {
	TaskModel.find({_id: mongoose.Type.ObjectId(req.params.id)}).then(
		(data)=> {
			res.send(data);
		},
		(err) => {
			res.status(401).send('Error');
		}
	)
});

//Edit Task
router.put('/edit/:id', (req, res) => {
	TaskModel.findOneAndUpdate( 
		{_id: mongoose.Type.ObjectId(req.params.id)}, 
		{
			$set: {
				name: req.body.name,
				email: req.body.email,
				phone: req.body.phone
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

//Edit Task status
router.put('/status/:id', (req, res) => {
	TaskModel.findOneAndUpdate( 
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

//Delete Task
router.delete('/delete/:id', (req, res) => {
	TaskModel.findOneAndRemove(
		{_id: mongoose.Type.ObjectId(req.params.id)}, 
		(err) => {
		if(err) {
			console.log(err);
			return res.status().send(err);
		}
		res.send('Deleted');
	})
});

//Create new Task
router.post('/new/create', (req, res) => {
	let task = new TaskModel(
		{
			name: req.body.name,
			detail: req.body.detail,
			status: req.body.status
		}
	);

	task.save(
		(err)=> {
			if(err){
				console.log(err);
				return res. status().send(err);
			}
			res.send('Success');
		}
	)
});

module.exports = router;