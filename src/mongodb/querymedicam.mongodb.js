use('drogueria')
db.medicamentos.find(
    {
        "fabricante.nombre": "Laboratorios EFGH"
    }
);
db.medicamentos.find({ "fabricante.nombre": "Laboratorios EFGH" })
db.medicamentos.find({ "fabricante.nombre": "Laboratorios EFGH" })
// db.medicamentos.find({"nombre":"Nimesulida", "precio.valor":21000}, { "nombre": 1, "precio.valor": 1, _id: 0 })
db.medicamentos.findOne({"nombre":"Nimesulida", "precio.valor":21000}, { "nombre": 1, "precio.valor": 1, _id: 0 })

db.medicamentos.find()