/*
 *Handles all database related queries
 *saving, inserting, updating
 *For student and teacher
 *
 */

const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017"; //mongodb://localhost:27017/";

module.exports = function(app, db) {

  //handles all insert,update posts to db
  app.post('/mydb/', (req, res) => {
    var key = req.body.key;
    var id = req.body.id;
    var value = req.body.value;
    var collection = req.body.collection; //student , teacher
    var connection_type = req.body.connection_type;
    var annotations = req.body.annotations;
    var last_session = req.body.last_session;

    var myobj = [{
      _id: id,
      [key]: value
    }];

    if (collection == "student" || collection == "teacher") {

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        if (connection_type == "insert") {
          //console.log("insert");
          dbo.collection(collection).insertMany(myobj, function(err, res) {
            if (err) throw err;
            //console.log("Number of documents inserted: " + res.insertedCount);
            test++;
            db.close();
          });
        } else if (connection_type == "update") {
          //console.log("update");

          var myquery = {
            _id: id
          };

          if (collection == "teacher") {
            var newvalues = {
              $set: {
                _id: id,
                [key]: value,
              }
            };
          } else {
            var newvalues = {
              $set: {
                _id: id,
                [key]: value,
                annotations: [annotations],
                last_session: [last_session]
              }
            };
          }

          dbo.collection(collection).updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            //console.log("1 document updated");
            db.close();
          });
        }
      });
      res.send();
    } else {
      res.send("Error - collection doesn't exist")
    }
  });

  //save data to db - used for annotation saving
  app.post('/mydb_save/', (req, res) => {
    var id = req.body.id;
    var collection = req.body.collection; //student , teacher
    var last_session = req.body.last_session;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");

      var myquery = {
        _id: id
      };

      var newvalues = {
        $set: {
          _id: id,
          last_session: [last_session]
        }
      };
      dbo.collection(collection).updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        ////console.log("1 document updated");
        db.close();
      });
    });
    res.send();
  });


  //retreiving teacher data - pre constucted trees
  app.get('/mydb/', (req, res) => {
    var teacher;
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("teacher").findOne({}, function(err, result) {
        if (err) throw err;
        var teacher = result;
        res.send(teacher);
        db.close();
      });
    });
  });


  //WAsmnt used as caused error - need to look into
  /*app.get('/:id', function(req, res) {
    // First read existing users.
    var teacher;
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("teacher").findOne({}, function(err, result) {
        if (err) throw err;
        var teacher = result;
        res.send(teacher[req.params.id]);
        db.close();
      });
    });
  });*/

  //Retrieving student data
  app.get('/mydb_s/', (req, res) => {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("student").findOne({}, function(err, result) {
        if (err) throw err;
        var student = result;
        res.send(student);
        db.close();
      });
    });
  });
}