const express = require('express')
const Cider = require('../models/cider')
const router = new express.Router()

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

module.exports = router