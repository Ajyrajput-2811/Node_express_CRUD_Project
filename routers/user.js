const express = require('express')
const {
    handleGetAllUser,
    handelGetUserById,
    handelupdateUserById,
    handelDeleteUserById,
    handleCreatNewUser
} = require('../controllers/user')

const router = express.Router()

 
router.route('/')
.get(handleGetAllUser)
.post(handleCreatNewUser)
 
router.route('/:id')
.get(handelGetUserById)
.patch(handelupdateUserById)
.delete(handelDeleteUserById)
 

module.exports = router;