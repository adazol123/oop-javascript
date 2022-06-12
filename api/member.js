const express = require('express')

const router = express.Router()
const memberController = require('../controllers/member.controller')


router.route('/')
    .get(memberController.getMember)
    .post(memberController.createMember)
    .put(memberController.updateMember)
    .delete(memberController.deleteMember)

router.route('/hello')
    .get(memberController.createMember)

    module.exports = router;