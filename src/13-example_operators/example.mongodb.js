use("platzi_store")

// remover dos elementos de un array con dos condiciones
db.iot.updateMany(
    //query
    {
        sensor: "A001",
    },
    // update
    {
        $pull: {
            readings: { $gte: 9 }

        }
    },

)

db.iot.find()


use("platzi_store")


// Otro ejemplo con dos condiciones de adición
db.iot.updateMany(
    //query
    {
        sensor: { $eq: "A001" }
    },
    // update
    {
        $push: {
            readings: {
                $each: [6, 7, 8, 9, 10]
            }
        }
    },
    {
        upsert: true
    }
)
db.iot.find()