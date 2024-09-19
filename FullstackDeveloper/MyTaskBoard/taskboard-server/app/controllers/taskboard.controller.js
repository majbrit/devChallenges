const axios = require('axios');
const crypto = require("crypto");

exports.getSessionID = (req, res) => {
  const sessionID = generateSessionId();
  req.session.id = sessionID;
  res.json(req.session.id );
}

function generateSessionId() {
  return crypto.randomBytes(16).toString('hex');
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
