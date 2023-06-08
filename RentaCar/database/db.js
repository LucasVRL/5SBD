const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');
const config = require('./dbconfig');

const { database, user, password, host, dialect, port } = config;

const sequelize = new Sequelize(database, user, password, { host, dialect, port } );

module.exports = sequelize;