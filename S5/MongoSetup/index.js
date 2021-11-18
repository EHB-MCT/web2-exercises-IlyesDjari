const {
    MongoClient
} = require('mongodb');
const uri = "mongodb+srv://ilyes:helloworld@werkcollege5.5ehsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect(err => {
    const collection = client.db("session5").collection("boardgames");
    console.log(collection)
    client.close();
});