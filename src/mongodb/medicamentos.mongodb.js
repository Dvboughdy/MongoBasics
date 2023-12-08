use('drogueria');
db.medicamentos.drop()
db.medicamentos.insertMany([
    {
        "nombre": "Paracetamol",
        "fabricante": {
            "nombre": "Laboratorios XYZ"
        },
        "precio": {
            "valor": 20000,
            "moneda": "COP"
        },
        "cantidadDisponible": 100,
        "prescripcionRequerida": false,
    },

    {
        "nombre": "Ibuprofeno",
        "fabricante": {
            "nombre": "Laboratorios ABC"
        },
        "precio": {
            "valor": 15000,
            "moneda": "COP"
        },
        "cantidadDisponible": 200,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Aspirina",
        "fabricante": {
            "nombre": "Laboratorios DEF"
        },
        "precio": {
            "valor": 5000,
            "moneda": "COP"
        },
        "cantidadDisponible": 300,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Acetaminofén",
        "fabricante": {
            "nombre": "Laboratorios GHI"
        },
        "precio": {
            "valor": 18000,
            "moneda": "COP"
        },
        "cantidadDisponible": 120,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Dipirona",
        "fabricante": {
            "nombre": "Laboratorios JKL"
        },
        "precio": {
            "valor": 16000,
            "moneda": "COP"
        },
        "cantidadDisponible": 80,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Naproxeno",
        "fabricante": {
            "nombre": "Laboratorios MNO"
        },
        "precio": {
            "valor": 21000,
            "moneda": "COP"
        },
        "cantidadDisponible": 90,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Ketoprofeno",
        "fabricante": {
            "nombre": "Laboratorios STU"
        },
        "precio": {
            "valor": 19000,
            "moneda": "COP"
        },
        "cantidadDisponible": 70,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Diclofenaco",
        "fabricante": {
            "nombre": "Laboratorios VWX"
        },
        "precio": {
            "valor": 17000,
            "moneda": "COP"
        },
        "cantidadDisponible": 60,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Metamizol",
        "fabricante": {
            "nombre": "Laboratorios YZ"
        },
        "precio": {
            "valor": 13000,
            "moneda": "COP"
        },
        "cantidadDisponible": 80,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Naproxeno Sódico",
        "fabricante": {
            "nombre": "Laboratorios ABCD"
        },
        "precio": {
            "valor": 15000,
            "moneda": "COP"
        },
        "cantidadDisponible": 90,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Piroxicam",
        "fabricante": {
            "nombre": "Laboratorios EFGH"
        },
        "precio": {
            "valor": 16000,
            "moneda": "COP"
        },
        "cantidadDisponible": 70,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Indometacina",
        "fabricante": {
            "nombre": "Laboratorios IJKL"
        },
        "precio": {
            "valor": 14000,
            "moneda": "COP"
        },
        "cantidadDisponible": 60,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Meloxicam",
        "fabricante": {
            "nombre": "Laboratorios QRST"
        },
        "precio": {
            "valor": 12000,
            "moneda": "COP"
        },
        "cantidadDisponible": 70,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Celecoxib",
        "fabricante": {
            "nombre": "Laboratorios QRST"
        },
        "precio": {
            "valor": 13000,
            "moneda": "COP"
        },
        "cantidadDisponible": 80,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Etoricoxib",
        "fabricante": {
            "nombre": "Laboratorios EFGH"
        },
        "precio": {
            "valor": 18000,
            "moneda": "COP"
        },
        "cantidadDisponible": 90,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Ketorolaco",
        "fabricante": {
            "nombre": "Laboratorios CDEF"
        },
        "precio": {
            "valor": 20000,
            "moneda": "COP"
        },
        "cantidadDisponible": 70,
        "prescripcionRequerida": false
    },

    {
        "nombre": "Nimesulida",
        "fabricante": {
            "nombre": "Laboratorios EFGH"
        },
        "precio": {
            "valor": 21000,
            "moneda": "COP"
        },
        "cantidadDisponible": 60,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Rofecoxib",
        "fabricante": {
            "nombre": "Laboratorios WXYZ"
        },
        "precio": {
            "valor": 25000,
            "moneda": "COP"
        },
        "cantidadDisponible": 100,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Indometacina",
        "fabricante": {
            "nombre": "Laboratorios EFGH"
        },
        "precio": {
            "valor": 27000,
            "moneda": "COP"
        },
        "cantidadDisponible": 120,
        "prescripcionRequerida": false
    },
    {
        "nombre": "Ketorolsin",
        "fabricante": {
            "nombre": "Laboratorios MNOP"
        },
        "precio": {
            "valor": 29000,
            "moneda": "COP"
        },
        "cantidadDisponible": 140,
        "prescripcionRequerida": false
    }
]
)