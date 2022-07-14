import { MongoClient } from "mongodb";

 async function Handler (req,res){
if(req.method === 'POST'){
    const data = req.body  


    const { title , image , address , description } = data ;

 const client  = await MongoClient.connect('mongodb+srv://Hparashar27:7300788823@cluster0.xs2pd.mongodb.net/Snaps?retryWrites=true&w=majority')

 const db = client.db();
 const SnapCollections = db.collection('Snaps')

 const result = await SnapCollections.insertOne(data)
 console.log(result);

 client.close();

 res.status(201).json({message : ' Snap is inserted  '})
}
}

export default Handler ;