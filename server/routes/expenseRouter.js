var express = require('express');
var controller = require('../components/expense')

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/v1/add', controller.addExpense)
router.post('/v1/edit', controller.editExpense)
router.delete('/v1/delete', controller.deleteExpense)
router.post('/v1/view', controller.viewExpense)
router.post('/v1/group', controller.viewGroupExpense)
router.post('/v1/user', controller.viewUserExpense)
router.post('/v1/user/recent', controller.recentUserExpenses)
router.post('/v1/group/categoryExp', controller.groupCategoryExpense)
router.post('/v1/user/categoryExp', controller.userCategoryExpense)
router.post('/v1/group/monthlyExp', controller.groupMonthlyExpense)
router.post('/v1/group/dailyExp', controller.groupDailyExpense)
router.post('/v1/user/monthlyExp', controller.userMonthlyExpense)
router.post('/v1/user/dailyExp', controller.userDailyExpense)

module.exports = router;
