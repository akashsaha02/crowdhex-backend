const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());


const PORT = 3000 || process.env.PORT;


// MongoDB Database Connection

const uri = "mongodb+srv://tenet025:UqPicmzp4D60s6k6@cluster0.cfoby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        await client.connect();
        console.log("Connected to the server");
        const database = client.db("crowdHex");
        const campaignsCollection = database.collection("campaigns");

        // app.get('/users', async (req, res) => {
        //     const users = await usersCollection.find().toArray();
        //     res.send(users);
        // });

        // app.get('/users/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const user = await usersCollection.findOne({ _id: new ObjectId(id) });
        //     res.send(user);
        // });

        // app.post('/users', async (req, res) => {
        //     const newUser = req.body;
        //     console.log(newUser);
        //     const result = await usersCollection.insertOne(newUser);
        //     res.send(result);
        // });

        // app.put('/users/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const updatedUser = req.body;
        //     const result = await usersCollection.updateOne({ _id: new ObjectId(id) }, { $set: updatedUser });
        //     res.send(result);
        // });

        // app.delete('/users/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
        //     res.send(result);
        // });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error(error);
    }
}

run().catch(console.dir);

// UqPicmzp4D60s6k6
// tenet025


