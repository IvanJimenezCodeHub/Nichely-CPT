'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Event extends Model {}

  Event.init({
    eventName: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 250],
        notEmpty: true,
      }
    },
    eventDescription: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 250],
        notEmpty: true,
      }
    },
    eventLocation: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 250],
        notEmpty: true,
      }
    },
  }, {
    sequelize,
    modelName: 'event'
  });

  Event.associate = (models) => {
    // associations can be defined here
  };

  return Event;
};