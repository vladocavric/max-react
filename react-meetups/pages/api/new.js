import { MongoClient } from "mongodb";
// const { MongoClient, ServerApiVersion } = require('mongodb');
async function handler(req, res) {
    if(req.method === 'POST'){
        const data = req.body

        const client = await MongoClient.connect(process.env.REACT_APP_MONGO_API_URL)
        const db = client.db('meetups')
        const meetupCollection = db.collection('meetups')
        const result = await meetupCollection.insertOne(data)
        client.close()

        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler


