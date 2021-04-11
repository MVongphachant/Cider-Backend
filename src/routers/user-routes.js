const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post('/signup', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        console.log(user)
        res.status(201).json({ user: user, token: token })
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router