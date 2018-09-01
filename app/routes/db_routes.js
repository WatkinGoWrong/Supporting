/*
 *Handles all database related queries
 *saving, inserting, updating
 *For student and teacher
 *
 */

const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017"; //mongodb://localhost:27017/";

module.exports = function(app, db) {

  app.post('/teacher/', (req, res) => {

    var myobj = [{
      _id: req.body.id,
      [req.body.key]: req.body.value
    }];
    MongoClient.connect(url, function(err, db) {

      if (err) throw err;
      var dbo = db.db("mydb");

      if (req.body.connection_type == "insert") {
        dbo.collection("teacher").insertMany(myobj, function(err, res) {
          if (err) throw err;
          db.close();
        });
      } else if (req.body.connection_type == "update") {
        var myquery = {
          _id: req.body.id
        };
        var newvalues = {
          $set: {
            _id: req.body.id,
            [req.body.key]: req.body.value,
          }
        };
        dbo.collection("teacher").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          db.close();
        });
      }
    });
    res.send(req.body.connection_type + "d " + req.body.key + " in teacher");
  });


  app.post('/student/', (req, res) => {
    var myobj = [{
      _id: req.body.id,
      [req.body.key]: req.body.value
    }];

    MongoClient.connect(url, function(err, db) {

      if (err) throw err;
      var dbo = db.db("mydb");

      if (req.body.connection_type == "insert") {
        dbo.collection("student").insertMany(myobj, function(err, res) {
          if (err) throw err;
          db.close();
        });
      } else if (req.body.connection_type == "update") {
        var myquery = {
          _id: req.body.id
        };
        var newvalues = {
          $set: {
            _id: req.body.id,
            [req.body.key]: req.body.value,
            annotations: [req.body.annotations],
            last_session: [req.body.last_session]
          }
        };
        dbo.collection("student").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          db.close();
        });
      }
    });
    res.send(req.body.connection_type + "d " + req.body.key + " in student");
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
        _id: req.body.id
      };

      var newvalues = {
        $set: {
          _id: req.body.id,
          last_session: [req.body.last_session]
        }
      };
      dbo.collection(req.body.collection).updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
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


  //Wasnt used as caused error - need to look into
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