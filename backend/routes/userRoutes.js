const express = require('express')
const { authUser, registerUser, getUserProfile, updateUserProfile } = require('../controllers/userController')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(registerUser)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

module.exports = router