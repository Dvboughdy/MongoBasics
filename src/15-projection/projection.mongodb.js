use("sample_training")
db.trips.find(
    //query
    { tripduration: { $gte: 500 } },
    //projection
    { tripduration:1, usertype: 0}
)

// Projection sirve para filtrar los campos que se quieren mostrar de forma explicita