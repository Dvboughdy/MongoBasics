use('drogueria')
db.empleados.drop()
db.empleados.insertMany(
    [
        {
            "Nombre": {
                "nombre": "Ana",
                "apellido": "García"
            },
            "Edad": "32",
            "Cargo": "Farmacéutico",
            "Eps": "Salud Total",
            "Telefono": "123-456-7890",
            "Correo": "ana.garcia@email.com"
        },

        {
            "Nombre": {
                "nombre": "Juan",
                "apellido": "López"
            },
            "Edad": "28",
            "Cargo": "Asistente de Ventas",
            "Eps": "Coomeva",
            "Telefono": "987-654-3210",
            "Correo": "juan.lopez@email.com"
        },

        {
            "Nombre": {
                "nombre": "María",
                "apellido": "Martínez"
            },
            "Edad": "45",
            "Cargo": "Cajero",
            "Eps": "Sura",
            "Telefono": "555-123-7890",
            "Correo": "maria.martinez@email.com"
        },

        {
            "Nombre": {
                "nombre": "Pedro",
                "apellido": "Ramírez"
            },
            "Edad": "35",
            "Cargo": "Gerente de Compras",
            "Eps": "Nueva EPS",
            "Telefono": "333-777-1111",
            "Correo": "pedro.ramirez@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Laura",
                "apellido": "Pérez"
            },
            "Edad": "29",
            "Cargo": "Auxiliar de Almacén",
            "Eps": "Cafesalud",
            "Telefono": "444-999-6666",
            "Correo": "laura.perez@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Carlos",
                "apellido": "Gómez"
            },
            "Edad": "40",
            "Cargo": "Mensajero",
            "Eps": "EPS Famisanar",
            "Telefono": "777-222-5555",
            "Correo": "carlos.gomez@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Luisa",
                "apellido": "Hernández"
            },
            "Edad": "27",
            "Cargo": "Auxiliar de Farmacia",
            "Eps": "Sanitas",
            "Telefono": "666-111-8888",
            "Correo": "luisa.hernandez@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Andrés",
                "apellido": "Sánchez"
            },
            "Edad": "38",
            "Cargo": "Técnico de Laboratorio",
            "Eps": "Colmédica",
            "Telefono": "888-444-7777",
            "Correo": "andres.sanchez@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Isabella",
                "apellido": "Díaz"
            },
            "Edad": "33",
            "Cargo": "Auxiliar Administrativo",
            "Eps": "SaludCoop",
            "Telefono": "222-888-3333",
            "Correo": "isabella.diaz@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Roberto",
                "apellido": "Ortiz"
            },
            "Edad": "42",
            "Cargo": "Supervisor de Inventario",
            "Eps": "Compensar",
            "Telefono": "999-666-2222",
            "Correo": "roberto.ortiz@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Sofía",
                "apellido": "Torres"
            },
            "Edad": "31",
            "Cargo": "Recepcionista",
            "Eps": "SaludColpatria",
            "Telefono": "123-123-1234",
            "Correo": "sofia.torres@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Javier",
                "apellido": "Luna"
            },
            "Edad": "36",
            "Cargo": "Técnico de Farmacia",
            "Eps": "Cruz Blanca",
            "Telefono": "555-555-5555",
            "Correo": "javier.luna@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Camila",
                "apellido": "Giraldo"
            },
            "Edad": "25",
            "Cargo": "Almacenero",
            "Eps": "Aliansalud",
            "Telefono": "987-987-9876",
            "Correo": "camila.giraldo@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Fernando",
                "apellido": "Mendoza"
            },
            "Edad": "39",
            "Cargo": "Analista de Ventas",
            "Eps": "Salud Vida",
            "Telefono": "111-222-3333",
            "Correo": "fernando.mendoza@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Paula",
                "apellido": "Suarez"
            },
            "Edad": "30",
            "Cargo": "Auxiliar de Compras",
            "Eps": "Salud Ocupacional",
            "Telefono": "555-111-4444",
            "Correo": "paula.suarez@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Gustavo",
                "apellido": "Rojas"
            },
            "Edad": "47",
            "Cargo": "Subgerente",
            "Eps": "Médico Seguro",
            "Telefono": "666-555-1111",
            "Correo": "gustavo.rojas@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Natalia",
                "apellido": "González"
            },
            "Edad": "26",
            "Cargo": "Auxiliar de Laboratorio",
            "Eps": "Salud Popular",
            "Telefono": "777-888-9999",
            "Correo": "natalia.gonzalez@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Ricardo",
                "apellido": "Castañeda"
            },
            "Edad": "43",
            "Cargo": "Encargado de Almacén",
            "Eps": "Colmédica",
        },

        {
            "Nombre_completo": {
                "nombre": "Juliana",
                "apellido": "Guanchope"
            },
            "Edad": "26",
            "Cargo": "Auxiliar de enfermeria",
            "Eps": "Salud Popular",
            "Telefono": "747-858-3169",
            "Correo": "Juliana.guanchope@email.com"
        },

        {
            "Nombre_completo": {
                "nombre": "Carlos Felipe",
                "apellido": "Goes"
            },
            "Edad": "22",
            "Cargo": "Contador",
            "Eps": "Salud Popular",
            "Telefono": "176-480-1939",
            "Correo": "carlos.goes@email.com"
        }
    ]
);
db.empleados.find()