const { response } = require('express');

const userGet = (req, res = response) => {
	const { q, name, apikey, page = 10 } = req.query; // puedo poner valores por defecto en caso de que no vengan en el query
	res.json({ message: 'Get the info', q, name, apikey, page });
};

const userPost = (req, res = response) => {
	const { name, age } = req.body;

	res.status(201).json({
		message: 'Create successful',
		name,
		age,
	});
};

const userPut = (req, res = response) => {
	const id = req.params.id;
	res.json({ message: 'Register updated with put', id });
};

const userPatch = (req, res = response) => {
	res.json({ message: 'Register updated with patch' });
};

const userDelete = (req, res = response) => {
	res.json({ message: 'Succesful delete' });
};

module.exports = {
	userGet,
	userPut,
	userPatch,
	userPost,
	userDelete,
};
