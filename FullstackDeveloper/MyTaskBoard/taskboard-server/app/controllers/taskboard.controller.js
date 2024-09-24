const axios = require('axios');
const crypto = require("crypto");
const db = require("../models");

const Board = db.board;
const Task = db.task;

exports.getSessionID = (req, res) => {
  const sessionID = generateSessionId();
  req.session.id = sessionID;
  res.json(req.session.id );
}

function generateSessionId() {
  return crypto.randomBytes(16).toString('hex');
}


exports.createBoard = (req, res) => {
  const newBoard = {}
  Board.create(newBoard).then(result => {
    console.log("res");
    console.log(result.id);
    

    const preTasks = [{
      boardid: result.id,
      name: "Task in Progress",
      description: " ",
      icon: "alarm",
      status: "progress"
    },

    {
      boardid: result.id,
      name: "Task Completed",
      description: " ",
      icon: "strong",
      status: "done" 
    },

    {
      boardid: result.id,
      name: "Tasks Won't Do",
      description: " ",
      icon: "coffee",
      status: "not" 
    },

    {
      boardid: result.id,
      name: "Tasks To Do",
      description: "Work on a Challenge on devChallenges.io, learn TypeScript.",
      icon: "books",
      status: "none"
    }];

    const promises = preTasks.map(preTasks => {
      return Task.create(preTasks); // Erstelle ein Promise für jede Session
    });

    return Promise.all(promises)
    .then(results => {
      console.log(results);
      res.send(JSON.stringify({boardId: result.id}));
    })
    .catch(error => {
      console.error('Fehler beim Erstellen der Tasks:', error);
      throw error;
    });

  })
  .catch(err => {
    console.error('Fehler beim Speichern der Daten:', err);
  });    
}


exports.findAll = (req, res) => {
  var id = req.params.boardId;
  Board.findOne({ where: {ID: id} }).then(data => {
    console.log(data);
    if (!data)
      console.log("found none");
  })
  Task.findAll({ where: {boardid: id} })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.err(err.message);
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
}
