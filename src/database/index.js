import Sequelize from 'sequelize';
import User from '../app/models/User';
import databaseConfig from '../config/database';

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
/*const Sequelize = require('sequelize');
import databaseConfig from '../config/database';

import User from '../app/models/User';

const connection = new Sequelize(databaseConfig);

User.init(connection);

module.exports = connection;*/




