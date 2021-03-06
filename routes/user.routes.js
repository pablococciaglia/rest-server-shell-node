const { Router } = require('express');
const {
	userGet,
	userPut,
	userDelete,
	userPost,
	userPatch,
} = require('../Controllers/user.controller');

const router = Router();

router.get('/', userGet);

router.post('/', userPost);

router.put('/:id', userPut);

router.patch('/', userPatch);

router.delete('/', userDelete);

module.exports = router;
