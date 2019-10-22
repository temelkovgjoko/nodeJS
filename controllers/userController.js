const User = require('../models/User')

exports.login = function (req, res) {
    let user = new User(req.body)
    user.login().then((result) => {
        req.session.user = { favColor: "blue", username: user.data.username }
        req.session.save(() => {
            res.redirect('/')
        })
    }).catch(error => {
        res.send(error)
    })
}

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })

}

exports.register = function (req, res) {
    let user = new User(req.body)
    user.register()
    if (user.errors.length) {
        res.send(user.errors)
    } else {
        res.send("Congrats, there are no errors")
    }
}

exports.home = function (req, res) {
    if (req.session.user) {
        res.render('home-dashboard', { username: req.session.user.username })
    } else {
        res.render('home-guest')
    }
}