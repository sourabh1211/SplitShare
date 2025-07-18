var express = require('express');
var controller = require('../components/user')
var apiAuth = require('../helper/apiAuthentication')

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/v1/register', controller.userReg)
router.post('/v1/login', controller.userLogin)
router.post('/v1/view', apiAuth.validateToken, controller.viewUser)
router.post('/v1/edit', apiAuth.validateToken, controller.editUser)
router.delete('/v1/delete', apiAuth.validateToken, controller.deleteUser)
router.post('/v1/updatePassword', apiAuth.validateToken, controller.updatePassword)
router.get('/v1/emailList', apiAuth.validateToken, controller.emailList)

module.exports = router;
