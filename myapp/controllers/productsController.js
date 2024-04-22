const { log } = require("debug/src/node")
const db = require ("../db/database")

const productsController = {
    product: function (req, res) {
        return res.render ("product", {productos: db.productos })
    },
    add: function (req, res) {
        return res.render ("productAdd", {usuario: db.usuario})
    },
    results: function (req, res) {
        let {search} = req.query
        let resultado = db.busqueda(search)
        console.log(resultado);
        console.log({search})
        console.log(db.busqueda(search))
        return res.render ("searchResults", {resultado: db.busqueda(search)})
    }
}

module.exports = productsController