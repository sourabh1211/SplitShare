var express = require('express');
var controller = require('../components/group')

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource')
})

router.post('/v1/add', controller.createGroup)
router.post('/v1/view', controller.viewGroup)
router.post('/v1/user', controller.findUserGroup)
router.post('/v1/edit', controller.editGroup)
router.post('/v1/settlement', controller.groupBalanceSheet)
router.post('/v1/makeSettlement', controller.makeSettlement)
router.delete('/v1/delete', controller.deleteGroup)

module.exports = router;
