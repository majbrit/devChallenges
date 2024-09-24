module.exports = app => {
    const taskboards = require("../controllers/taskboard.controller.js");
  
    var router = require("express").Router();

    router.get("/board", taskboards.createBoard);

    router.get("/board/:boardId", taskboards.findAll);

    router.get("/sessionID", taskboards.getSessionID);

    app.use('/api/taskboard', router);
};