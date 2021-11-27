'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Event extends Model {}

  Event.init({
    eventName: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30],
        notEmpty: true,
      }
    }
    ,
    eventDescription: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 400],
        notEmpty: true,
      }
    },
    eventLocation: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 20],
        notEmpty: true,
      }
    },
    eventTime: {
      type: DataTypes.TIME,
      validate: {
        len: [1, 20],
        notEmpty: true,
      }
    },
    eventDate: {
      type: DataTypes.DATE,
      validate: {
        len: [1, 20],
        notEmpty: true,
      }
    },
    relevantInterests: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 20],
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