use("platzi_store")


//db.inventory.find({ "item.description": "Single line description." })


db.inventory.find({ "item.description": {$regex: /line/ }})

/* Sin case sensitive */
db.inventory.find({ "item.description": {$regex: /LINE/ }})

/* Con case sensitive */
db.inventory.find({ "item.description": {$regex: /LINE/i }})

/* Busqueda de los items que posean las descripciones finalizadas en line */
db.inventory.find({ "item.description": {$regex:  /line$/i }})

/* Busqueda de los items que posean las descripciones que empiezan en Single con case sensitive */
db.inventory.find({ "item.description": {$regex:  /^single/i }})

/* Busqueda de los items que posean las descripciones saltos de linea*/

/* descripciónes sin salto de linea */
db.inventory.find({ "item.description": {$regex:  /^s/i }})

/* descripciónes con salto de linea */
db.inventory.find({ "item.description": {$regex:  /^s/im }})


