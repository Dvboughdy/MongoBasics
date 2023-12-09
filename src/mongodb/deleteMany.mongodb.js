use('drogueria');

/* Delete de clientes */
db.clientes.deleteMany(
    {
        _id: {
            $in: [
                ObjectId('65417ab7e8fec68d88248bfb'),
                ObjectId('65417ab7e8fec68d88248bfc')
            ]
        }
    }
)
db.empleados.find()