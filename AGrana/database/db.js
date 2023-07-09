const { Sequelize, Op } = require('sequelize');
const mysql = require('mysql2/promise');
const config = require('./dbConfig');

const { database, user, password, host, dialect, port } = config;

const sequelize = new Sequelize(database, user, password, { host, dialect, port});

module.exports = sequelize;