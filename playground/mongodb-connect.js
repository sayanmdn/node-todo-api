//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Todo',(err, db) =>{
  if(err){
    return console.log('Unable to connect t mongo server');
  }
  console.log('Connected to MongoDB server');

db.collection('Todos').find({ _id: new ObjectID('598eb165fd6ae821784132e5')}).toArray().then((docs) =>{
  console.log('Todos');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) =>{
  console.log('Unable to fetch');
});

  // db.collection('Users').insertOne({
  //   name: 'Sayantan Mishra',
  //   age: 20,
  //   location: 'Midnapore'
  // }, (err,result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //db.close();
});
