const express = require('express')
const Cider = require('../models/cider')
const router = new express.Router()

router.post('/api/ciders', async (req, res) => {
    const cider = new Cider(req.body)

    try {
        await cider.save()
        res.status(201).json(cider)
    } catch (error) {
        res.send(400).json(error)
    }
})

module.exports = router