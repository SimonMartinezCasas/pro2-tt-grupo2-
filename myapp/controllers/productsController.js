const db = require ("../db/database")

const productsController = {
    product: function (req, res) {
        return res.render ("product" /* variable de db */)
    },
    add: function (req, res) {
        return res.render ("productAdd", {usuario: db.usuario})
    },
    results: function (req, res) {
        return res.render ("searchResults" /* variable de db */)
    }
}

module.exports = productsController