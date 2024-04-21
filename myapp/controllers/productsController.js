const db = require ("../db/database")

const productsController = {
    product: function (req, res) {
        return res.render ("product" /* variable de db */)
    },
    add: function (req, res) {
        return res.render ("productAdd", {usuario: db.usuario})
    },
    results: function (req, res) {
        let {search} = req.query
        let resultado = db.busqueda(search)
        return res.render ("searchResults", {resultado: db.busqueda(search)})
    }
}

module.exports = productsController