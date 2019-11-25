const express       = require('express');
const router		= express.Router();
const ManagerModel	= require('../../app/models/managerschema').model;

const mongoose 		= require('mongoose');

// var id				= mongoose.Type.ObjectId;

//Get Manager List
router.get('/all/list', (req, res) => 
	{
		ManagerModel.find({}).then(
			(data)=> {
				res.send(data);
			},
			(err) => {
				res.status(401).send('Error');
			}
		)
	}
);

//Get Manager by Id
router.get('/detail/:id', (req, res) => 
	{
		ManagerModel.find({_id: mongoose.Type.ObjectId(req.params.id)}).then(
			(data)=> {
				res.send(data);
			},
			(err) => {
				res.status(401).send('Error');
			})
	}
);

//Edit Manager by Id
router.put('/edit/:id', (req, res) => 
	{
		ManagerModel.findOneAndUpdate( 
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
	}
);

//Delete Manager By Id
router.delete('/delete/:id', (req, res) => {
	ManagerModel.findOneAndRemove(
		{_id: mongoose.Type.ObjectId(req.params.id)}, 
		(err) => {
		if(err) {
			console.log(err);
			return res.status().send(err);
		}
		res.send('Deleted');
	})
});

//Create new Manager
router.post('/new/create', (req, res) => {	
	let manager = new ManagerModel(
			{
				name: req.body.name,
				email: req.body.email,
				phone: req.body.phone
			}
		);
	manager.save(
		(err)=> {
			if(err){
				console.log(err);
			}
			res.status(201).send('Success')
		}
	)	
});

module.exports = router;