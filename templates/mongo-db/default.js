// Para mudar de db no shell
// use <local>
// db.createCollection("suricatoIot")

// Criando dados via insert
// https://docs.mongodb.com/manual/reference/method/db.collection.insert/
db.suricatoIot.insert({
    "name": "suricato01",
    "info":
    {   
        "type": "Alarm",
        "place": "sala",
        "ipaddr": "6.6.6.6"
    },
    "data": 
    {
        "control": "control"
    }
})

// Atualizações
// https://docs.mongodb.com/manual/reference/method/db.collection.remove/



// Remove via ID
// https://docs.mongodb.com/manual/reference/method/db.collection.remove/
db.suricatoIot.remove({
    "_id": ObjectId("6227c88e532fb73baaea37e5")
})

// Filtrando dados com find
// https://docs.mongodb.com/manual/reference/method/db.collection.find/
db.suricatoIot.find({
 "_id": ObjectId("6227cdce83c031df81d762a6")
}).pretty()

db.suricatoIot.find({
    "info.type": "Alarm"
}).pretty()

db.suricatoIot.find({
    "name": "suricato01",
    "data.control": "control"
}).pretty()

db.suricatoIot.find({
   $or: [
        {"name": "suricato01"},
        {"name": "suricato02"}
    ]
}).pretty()

db.suricatoIot.find({
    $or: [
         {"name": "suricato01"},
         {"name": "suricato02"}
     ],
    "info.place": "sala"
 }).pretty()

db.suricatoIot.find({
    "name": {
        $in: ["suricato01", "suricato02"]
    }
 }).pretty()

db.suricatoIot.find({
    "info.place": {
        $in: ["sala"]
    }
 }).pretty()