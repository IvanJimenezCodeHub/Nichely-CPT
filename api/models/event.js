'use strict';
const { Model, INTEGER, DATE, DATEONLY } = require('sequelize');
const { Sequelize } = require('.');
const TODAY = new Date()

module.exports = (sequelize, DataTypes) => {
  class Event extends Model { }

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
      type: DataTypes.TEXT,
      validate: {
        len: [1, 400],
        notEmpty: true,
      }
    },
    eventLocation: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },

    latitude: {
      type: DataTypes.FLOAT,
      validate: {
        // notEmpty: true,
      }
    },

    longitude: {
      type: DataTypes.FLOAT,
      validate: {
        // notEmpty: true,
      }
    },

    eventTime: {
      type: DataTypes.TIME,
      validate: {
        notEmpty: true,
      }
    },
    eventDate: {
      type: DataTypes.DATEONLY,
      validate: {
        isAfter: TODAY.toString(),
        //isAfter: Date.prototype.getFullYear().toString() + "-" +  Date.prototype.getMonth().toString().padStart(2) + "-" + Date.prototype.getDay().toString().padStart(2) ,
        notEmpty: true,
      }
    },
    relevantInterests: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 20],
      }
    },
    hostId: {
      //TODO: this
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        //notEmpty: true
      }
    },
    rsvpList: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      validate: {}
    }

  }, {
    sequelize,
    modelName: 'event'
  });

  Event.associate = (models) => {
    // associations can be defined here
    //TODO: this
  };

  return Event;
};
