# Up mongodb -> levantar el servicio
```sh 
docker-compose up -d mongodb
``` 
## Connect to container

```sh
docker-compose exec mongodb bash # ejecutar el comando exe junto al nombre del servicio
``` 

## Connect to mongosh
```sh
mongosh "mongodb://root:root123@localhost:27017/?authMechanism=DEFAULT&tls=false" # poner la dirección del cluster proporcionado por mongoatlas
mongosh "mongodb+srv://Jlkoxadmin:Nullgreface7892@cluster0.obm6wm5.mongodb.net/"
``` 

```sh
show dbs 
show collections
``` 

```sh
use ("platzi_store")
db.products.find()
```  