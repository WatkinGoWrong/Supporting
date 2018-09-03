/*
 *Handles all RESTful API calls to the server
 *GRading, tree construction, example constructed trees
 */

var treeStruc = require("./treeStruc");
var grading = require("./grading");
var SFL_trees = require("./exampleTrees");
var data = require("./db_api");
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

//var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {

  app.post('/treetest/', (req, res) => {
    //console.log("SFL Generating!");
    const note = {
      text: req.body,
      title: req.body.title
    };

    var myJSON = JSON.stringify(req.body.body).slice(1, -1).replace(/\\/g, "");
    var doc_width = JSON.stringify(req.body.d_width);
    myJSON = JSON.stringify(treeStruc.tree(myJSON, doc_width));
    //console.log("SFL Generated!");
    res.send(myJSON);
    res.send(doc_width);
  });

  app.post('/grading/', (req, res) => {
    //console.log("SFL Grading!");
    const note = {
      text: req.body,
      title: req.body.title
    };
    ////console.log(req.body.teacher);
    //console.log(getTeacherSFL(req.body.sentence));

    var student = JSON.stringify(req.body.body).slice(1, -1).replace(/\\/g, "");
    var teacher = SFL_trees.examples[(req.body.sentence).split(' ').join('').toLowerCase()]; //JSON.stringify(req.body.teacher).slice(1, -1).replace(/\\/g, "");
    //console.log(teacher);
    if (teacher == undefined)
      res.send(["", "", "", "", ""])
    else
      res.send(grading.genFromTable(JSON.parse(teacher), JSON.parse(student)));

  });

  app.post('/exampleTrees/', (req, res) => {
    //console.log(req.body.sfl);
    var SFLs = SFL_trees.examples[req.body.sfl];
    if (SFLs == undefined) {
      SFLs = "Does not exist"
    }
    //console.log(SFLs);
    res.send(SFLs);
  });

  app.post('/teacherSFLTrees/', (req, res) => {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("teacher").findOne({}, function(err, result) {
        if (err) throw err;
        db.close();
        SFL_trees.examples = result;
        res.send();
      });
    });
  });

};