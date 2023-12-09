use('drogueria')
/* Query para medicamentos*/
db.medicamentos.updateMany(
    {
        $or: [
            { "precio.valor": { $gte: 20000 } },
            { "precio.valor": { $lte: 10000 } }
        ]
    },
    {
        $inc: {
            "precio.valor": 100
        }
    }, {
    upsert: true
}
)
db.medicamentos.find()

/* Query para clientes */
use('drogueria')
db.clientes.updateMany(
    {
        _id: {
            $in: [
                ObjectId('65418c289dedb5c9eb98a202'),
                ObjectId('65418c289dedb5c9eb98a203')
            ]
        }
    },
    {
        $unset: {
            "documento.tipo_documento": "C.C."
        }
    }, {
    upsert: true
}
)
db.clientes.find()

/* Qeuery para empleados */
use('drogueria')
db.medicamentos.updateMany(
    {},
    {
        $rename: {
            "precio.valor": "precio.value",
            "precio.moneda": "precio.aja"
        }
    }
)
db.medicamentos.find()

db.empleados.updateMany(
    {
        "Edad": {
            $gt: "32",
            $lt: "60"
        }
    },
    {
        $set: {
            "Edad": "30"
        }
    }
)

db.empleados.find()

db.medicamentos.updateMany(
    {
        "precio.valor":
            { $gte: 20000 }
    },
    {
        $unset: {
            "fabricante.nombre": "Laboratorios FFFF"
        }
    }
)



db.medicamentos.find(
    {
        "fabricante.nombre": "Laboratorios EFGH"
    }
);

db.medicamentos.find();