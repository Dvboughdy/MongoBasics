use('drogueria');
db.clientes.insertMany(
   [
      {
         "Nombre_completo": {
            "nombre": "Luis",
            "apellidos": "Lopez Diaz"
         },
         "Telefono": "12345678",
         "Correo": "luis@gmmail.com",
         "documento": {
            "tipo_documento": "cedula de ciudadania",
            "num_documento": 21345678
         }
      },
      {
         "Nombre_completo": {
            "nombre": "jose",
            "apellidos": "muñoz"
         },
         "Telefono": 3521487,
         "Correo": "jose@gmmail.com",
         "documento": {
            "tipo_documento": "cedula de ciudadania",
            "num_documento": 12456378
         }
      },

      {
         "Nombre_completo": { "nombre": "Ana", "apellidos": "García Pérez" },
         "Telefono": 987654321,
         "Correo": "ana@email.com",
         "documento": { "tipo_documento": "DNI", "num_documento": 12345678 }
      },
      {
         "Nombre_completo": { "nombre": "Carlos", "apellidos": "Martínez González" },
         "Telefono": 555111000,
         "Correo": "carlos@email.com",
         "documento": { "tipo_documento": "Pasaporte", "num_documento": 87654321 }
      },

      {
         "Nombre_completo": { "nombre": "María", "apellidos": "Rodríguez Sánchez" },
         "Telefono": 123789456,
         "Correo": "maria@email.com",
         "documento": { "tipo_documento": "Licencia de conducir", "num_documento": 98765432 }
      },

      {
         "Nombre_completo": { "nombre": "Juan", "apellidos": "López García" },
         "Telefono": 654321789,
         "Correo": "juan@email.com",
         "documento": { "tipo_documento": "Cédula de identidad", "num_documento": 23456789 }
      },

      {
         "Nombre_completo": { "nombre": "Laura", "apellidos": "Díaz Martínez" },
         "Telefono": 111222333,
         "Correo": "laura@email.com",
         "documento": { "tipo_documento": "Carné de estudiante", "num_documento": 34567890 }
      },

      {
         "Nombre_completo": { "nombre": "Pedro", "apellidos": "Hernández Rodríguez" },
         "Telefono": 999888777,
         "Correo": "pedro@email.com",
         "documento": { "tipo_documento": "NIT", "num_documento": 45678901 }
      },

      {
         "Nombre_completo": { "nombre": "Sofía", "apellidos": "Fernández López" },
         "Telefono": 777666555,
         "Correo": "sofia@email.com",
         "documento": { "tipo_documento": "Pasaporte", "num_documento": 56789012 }
      },

      {
         "Nombre_completo": { "nombre": "David", "apellidos": "Ramírez García" },
         "Telefono": 888999444,
         "Correo": "david@email.com",
         "documento": { "tipo_documento": "DNI", "num_documento": 67890123 }
      },

      {
         "Nombre_completo": { "nombre": "Elena", "apellidos": "Mendoza Pérez" },
         "Telefono": 111000222,
         "Correo": "elena@email.com",
         "documento": { "tipo_documento": "Licencia de conducir", "num_documento": 78901234 }
      },

      {
         "Nombre_completo": { "nombre": "Javier", "apellidos": "Gómez Rodríguez" },
         "Telefono": 222333444,
         "Correo": "javier@email.com",
         "documento": { "tipo_documento": "Carné de estudiante", "num_documento": 89012345 }
      },

      {
         "Nombre_completo": { "nombre": "Lorena", "apellidos": "Herrera Sánchez" },
         "Telefono": 555444333,
         "Correo": "lorena@email.com",
         "documento": { "tipo_documento": "NIT", "num_documento": 90123456 }
      },

      {
         "Nombre_completo": { "nombre": "Miguel", "apellidos": "Torres Martínez" },
         "Telefono": 333222111,
         "Correo": "miguel@email.com",
         "documento": { "tipo_documento": "Cédula de identidad", "num_documento": 12345678 }
      },

      {
         "Nombre_completo": { "nombre": "Natalia", "apellidos": "Luna García" },
         "Telefono": 777888999,
         "Correo": "natalia@email.com",
         "documento": { "tipo_documento": "DNI", "num_documento": 23456789 }
      },

      {
         "Nombre_completo": { "nombre": "Óscar", "apellidos": "Vega López" },
         "Telefono": 444555666,
         "Correo": "oscar@email.com",
         "documento": { "tipo_documento": "Pasaporte", "num_documento": 34567890 }
      },

      {
         "Nombre_completo": { "nombre": "Paula", "apellidos": "Cruz Rodríguez" },
         "Telefono": 666777888,
         "Correo": "paula@email.com",
         "documento": { "tipo_documento": "Licencia de conducir", "num_documento": 45678901 }
      },
      {
         "Nombre_completo": { "nombre": "Ricardo", "apellidos": "Gutiérrez Martínez" },
         "Telefono": 999000111,
         "Correo": "ricardo@email.com",
         "documento": { "tipo_documento": "Carné de estudiante", "num_documento": 56789012 }
      },
      {
         "Nombre_completo": { "nombre": "Sara", "apellidos": "Pérez García" },
         "Telefono": 222111444,
         "Correo": "sara@email.com",
         "documento": { "tipo_documento": "NIT", "num_documento": 67890123 }
      },
      {
         "Nombre_completo": { "nombre": "Tomás", "apellidos": "Hidalgo Rodríguez" },
         "Telefono": 555666777,
         "Correo": "tomas@email.com",
         "documento": { "tipo_documento": "Pasaporte", "num_documento": 78901234 }
      },
      {
         "Nombre_completo": { "nombre": "Valeria", "apellidos": "Castañeda Pérez" },
         "Telefono": 333444555,
         "Correo": "valeria@email.com",
         "documento": { "tipo_documento": "DNI", "num_documento": 89012345 }
      },
      {
         "Nombre_completo": { "nombre": "Xavier", "apellidos": "Santos López" },
         "Telefono": 888777666,
         "Correo": "xavier@email.com",
         "documento": { "tipo_documento": "Cédula de identidad", "num_documento": 90123456 }
      }
   ]
);