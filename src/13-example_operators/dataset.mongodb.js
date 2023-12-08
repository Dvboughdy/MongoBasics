use("platzi_store")
db.iot.drop()

db.iot.insertMany([
  { _id: 1, sensor: "A001", date: "2022-01-01", readings: [1,2,3,4] },
  { _id: 2, sensor: "A001", date: "2022-01-02", readings: [1,2,3,4] },
  { _id: 3, sensor: "A002", date: "2022-01-01", readings: [1,2,3,4] },
  { _id: 4, sensor: "A002", date: "2022-01-02", readings: [1,2,3,4] },
])

db.iot.find()