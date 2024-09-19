module.exports = app => {
    const taskboards = require("../controllers/taskboard.controller.js");
  
    var router = require("express").Router();

    router.get("/", taskboards.findAll);

    router.get("/sessionID", taskboards.getSessionID);

    app.use('/api/taskboard', router);
};