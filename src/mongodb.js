const _ = require('mongodb')
const url = "mongodb://localhost:27017/smartdb";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  db.close();
});