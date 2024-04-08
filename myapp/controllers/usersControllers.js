/* const require ("base de datos") */

const usersController = {
    login: function (req, res) {
        return res.render ("login", /* variable de db */)
    },
    profile: function (req, res) {
        return res.render ("profile", /* variable de db */)
    },
    profileEdit: function (req, res) {
        return res.render ("profileEdit", /* variable de db */)
    },
    register: function (req, res) {
        return res.render("register", /* variable de db */)
    }
}

module.exports = usersController
