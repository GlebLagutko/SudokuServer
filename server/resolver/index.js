import {users} from "../dataset/index.js";
import seq from "sequelize";

export const resolvers = {
    Query: {

        users: () => {

            const {Sequelize, Model, DataTypes} = seq;
            const sequelize = new Sequelize('sqlite::memory:');

            class User extends Model {
            }

            User.init({
                username: DataTypes.STRING,
                birthday: DataTypes.DATE
            }, {sequelize, modelName: 'user'});

            (async () => {
                await sequelize.sync();
                const jane = await User.create({
                    username: 'janedoe',
                    birthday: new Date(1980, 6, 20)
                });
                console.log(jane.toJSON());
            })();

            return users
        }
    },


};