const express       = require('express');
const router		= express.Router();
const AgentModel	= require('../../app/models/agentschema').model;
const mongoose 		= require('mongoose');

// var id				= mongoose.Type.ObjectId;

//Get agent List
router.get('/all/list', (req, res) => {
	AgentModel.find({}).then(
		(data)=> {
			res.send(data);
		},
		(err) => {
			res.status(401).send('Error');
		}
	)
});

//Get agent by Id
router.get('/detail/:id', (req, res) => {
	AgentModel.find({_id: mongoose.Type.ObjectId(req.params.id)}).then(
		(data)=> {
			res.send(data);
		},
		(err) => {
			res.status(401).send('Error');
		}
	)
});

//Edit agent by Id
router.put('/edit/:id', (req, res) => {
	AgentModel.findOneAndUpdate( 
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

//Delete agent By Id
router.delete('/delte/:id', (req, res) => {
	AgentModel.findOneAndRemove(
		{_id: mongoose.Type.ObjectId(req.params.id)}, 
		(err) => {
		if(err) {
			console.log(err);
			return res.status().send(err);
		}
		res.send('Deleted');
	})
});

//Create new agent
router.post('/new/create', (req, res) => {	
	let agent = new AgentModel(
			{
				name: req.body.name,
				email: req.body.email,
				phone: req.body.phone
			}
		);
	agent.save(
		(err)=> {
			if(err){
				console.log(err);
			}
			res.status(201).send('Success')
		}
	)
});

module.exports = router;