const Follow = require('../models/Follow')

let Follow = function () {
    let follow = new Follow(req.params.username, req.visitorId)
    follow.create().then(() => {
        req.flash("success", `Successfully followed ${req.params.username}`)
        req.session.save(() => res.redirect(`/profile/${req.params.username}`))
    }).catch(() => {
        errros.forEach(error => req.flash("errors", error))
    })
    req.sesion.save(() => res.redirect('/'))
}

module.exports = Follow