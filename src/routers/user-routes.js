const express = require('express')
const User = require('../models/user')
const Review = require('../models/reviews')
const auth = require('../middleware/authentication')
const router = express.Router()

router.post('/signup', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).json({ user: user, token: token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body. password)
        const token = await user.generateAuthToken()
        res.json({ user: user, token: token })
    } catch (error) {
        res.status(400).send()
    }
})

// fetch user reviews
router.get('/me/reviews', auth, async (req, res) => {
    try {
        // const userReviews = await req.user.populate('reviews').execPopulate()
        // res.json(userReviews.reviews)
        const userReviews = await Review.find({ creator: req.user._id }).populate('cider')
        res.json(userReviews)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router