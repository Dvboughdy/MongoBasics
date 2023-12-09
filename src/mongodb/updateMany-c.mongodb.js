use('drogueria')
db.empleados.updateMany(
    {},
    {
        $rename: {
            "Nombre.nombre": "Nombre.name",
            "Nombre.apellido": "Nombre.xx"
        }
    }
)
db.empleados.find()

db.empleados.updateMany(
    {},
    {
        $rename: {
            "precio.valor": "precio.value",
            "precio.moneda": "precio.aja"
        }
    }
)
db.empleados.find()
