const express = require('express')
const Cider = require('../models/cider')
const Review = require('../models/reviews')
const auth = require('../middleware/authentication')
const router = new express.Router()

// create new cider
router.post('', async (req, res) => {
    const cider = new Cider(req.body)

    try {
        await cider.save()
        res.status(201).json(cider)
    } catch (error) {
        res.send(400).json(error)
    }
})

router.get('', async (req, res) => {
    try {
        const ciders = await Cider.find()
        res.json({ ciders: ciders })
    } catch (error) {
        res.status(400).send()
    }
})

// create new review for cider
router.post('/review/:ciderId', auth, async (req, res) => {
    const review = new Review({
        description: req.body.description,
        creator: req.user._id,
        cider: req.params.ciderId
    })

    try {
        await review.save()
        res.json(review)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router