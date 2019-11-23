const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const ManagerModel= require('./models/managerschema');
const AgentModel= require('./models/agentschema');
const JobModel= require('./models/jobschema');
const TaskModel= require('./models/taskschema');

//Get Manager
app.get('/manager/:id', (req, res) => 
	ManagerModel.find({_id: req.id}).then(
		(data)=> {
			res.send(data)
		},
		(err) => {
			res.status().send('Error');
		})
);

//Create new Manager
app.post('/manager', data, (req, res) => {
		const managere= new ManagerModel({
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone
		});
		agent.save()
		.then((result) => {
			console.log(result)
		})
		.catch((err)=>{
			console.log(err)
		})
		res.status(201).send('Success')
	}
);

//Get Agent 
app.get('/agent/:id', (req, res) => 
	AgentModel.find({_id: req.id}).then(
		(data)=> {
			res.send(data)
		},
		(err) => {
			res.status().send('Error');
		})
);

//Get Job
app.get('/job/:id', (req, res) => 
	JobModel.find({_id: req.id}).then(
		(data)=> {
			res.send(data)
		},
		(err) => {
			res.status().send('Error');
		})
);

//Get Task
app.get('/task/:id', (req, res) => 
	TaskModel.find({_id: req.id}).then(
		(data)=> {
			res.send(data)
		},
		(err) => {
			res.status().send('Error');
		})
);

//Edit Manager
app.put('/manager/:id', data, (req, res) => {
		const managere= new ManagerModel({
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone
		});
		agent.save()
		.then((result) => {
			console.log(result)
		})
		.catch((err)=>{
			console.log(err)
		})
		res.status(200).send('Success')
	}
);


//Create new Agent
app.post('/manager/:id', data, (req, res) => {
		const managere= new ManagerModel({
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone
		});
		agent.save()
		.then((result) => {
			console.log(result)
		})
		.catch((err)=>{
			console.log(err)
		})
		res.status(201).send('Success')
	}
);

//Edit Agent
app.put('/agent/:id', data, (req, res) => {
		const agent= new AgentModel({
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone
		});
		agent.save()
		.then((result) => {
			console.log(result)
		})
		.catch((err)=>{
			console.log(err)
		})
		res.status(200).send('Success')
	}
);



//Edit Job
app.put('/job/:id', data, (req, res) => {
		const job= new JobModel({
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
		});
		job.save()
		.then((result) => {
			console.log(result)
		})
		.catch((err)=>{
			console.log(err)
		})
		res.status(200).send('Success')
	}
);

//Edit Job Status
app.put('/job/:id', data, (req, res) => {
		const job= new JobModel({
			status: req.body.status
		});
		job.save()
		.then((result)=> {
			console.log(result);
		}).catch((err)=> {
			console.log(err);
		});
	}
);

//Edit Assigned Agent
app.put('/job/:id', data, (req, res) => {
		const job= new JobModel({
			assigned: req.body.assigned
		});
		job.save()
		.then((result)=> {
			console.log(result);
		}).catch((err)=> {
			console.log(err);
		});
	}
);

//Edit Task
app.put('/task/:id', data, (req, res) => 
	TaskModel.find({_id: req.id}).then(
		(data)=> {
			res.send(data)
		},
		(err) => {
			res.status().send('Error');
		})
);

//Edit Task Status
app.put('/task/:id', data, (req, res) => 
	TaskModel.find({_id: req.id}).then(
		(data)=> {
			res.send(data.status)
		},
		(err) => {
			res.status().send('Error');
		})
);

//Delet Manager
app.delete('/manager/:id', (req, res) => 
	ManagerModel.find({_id: req.id}).then(
		(data)=> {
			res.send(data)
		},
		(err) => {
			res.status().send('Error');
		})
);

//Delete Agent
app.delete('/agent/:id', (req, res) => 
	AgentModel.find({_id: req.id}).then(
		(data)=> {
			res.send(data)
		},
		(err) => {
			res.status().send('Error');
		})
);

//Delete Job
app.delete('/job/:id', (req, res) => 
	JobModel.find({_id: req.id}).then(
		(data)=> {
			res.send(data)
		},
		(err) => {
			res.status().send('Error');
		})
);

//Delete Task
app.delete('/task/:id', (req, res) => 
	TaskModel.find({_id: req.id}).then(
		(data)=> {
			res.send(data)
		},
		(err) => {
			res.status().send('Error');
		})
);

app.listen(port, () => console.log(`App listening on port ${port}!`));