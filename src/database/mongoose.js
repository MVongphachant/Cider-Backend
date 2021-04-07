const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mario:guf6gP82b1Ia16at@cluster0.ffd50.mongodb.net/in-cider-scoop?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})