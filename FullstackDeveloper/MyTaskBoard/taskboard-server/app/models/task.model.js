module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      boardid: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
  
    return Task;
  };
  