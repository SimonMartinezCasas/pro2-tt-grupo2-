/* const require ("base de datos") */

const indexController = {
    index: function (req, res) {
        return res.render ("index", /* variable de db */)
    }
}

module.exports = indexController