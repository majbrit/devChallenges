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
      name: "Task in Progress",
      description: " ",
      icon: "alarm",
      status: "progress"
    },

    {
      name: "Task Completed",
      description: " ",
      icon: "strong",
      status: "done" 
    },

    {
      name: "Tasks Won't Do",
      description: " ",
      icon: "coffee",
      status: "not" 
    },

    {
      name: "Tasks To Do",
      description: "Work on a Challenge on devChallenges.io, learn TypeScript.",
      icon: "books",
      status: "none"
    }];

    const promises = preTasks.map(sessionData => {
      return Session.create(sessionData); // Erstelle ein Promise für jede Session
    });

    return Promise.all(promises)
    .then(results => {
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
  tasks = [
    { 
      id: 1,
      name: "Task in Progress",
      description: " ",
      icon: "alarm",
      status: "progress"
    },
    { 
      id: 2,
      name: "Task Completed",
      description: " ",
      icon: "strong",
      status: "done" 
    },
    { 
      id: 3,
      name: "Tasks Won't Do",
      description: " ",
      icon: "coffee",
      status: "not" 
    },
    { 
      id: 4,
      name: "Tasks To Do",
      description: "Work on a Challenge on devChallenges.io, learn TypeScript.",
      icon: "books",
      status: "none" 
    }
  ];
  console.log("send tasks");
  console.log(tasks);
  res.send(tasks);
}
