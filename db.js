const mongodb = require('mongodb')

const connectionString = 'mongodb+srv://todoAppUser:todo223@cluster0-h7ajm.mongodb.net/ComplexApp?retryWrites=true&w=majority'


mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    module.exports = client.db()
    const app = require('./app')
    app.listen(3000)
})