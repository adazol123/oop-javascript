const express = require('express')

const router = express.Router()
const memberController = require('../controllers/member.controller')


router.route('/')
    .get(memberController.getMember)
    .post(memberController.createMember)
    .put(memberController.updateMember)
    .delete(memberController.deleteMember)
    .patch(memberController.patchMember)

router.route('/:name')
    .get(memberController.getUser)
    .delete(memberController.deleteUser)

router.route('/hello')
    .get(memberController.createMember)

    module.exports = router;