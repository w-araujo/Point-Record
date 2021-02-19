const { development } = require("../../knexfile")

const knex = require("knex")(development)

class Registered_Time {

    async register(data) {
        return knex('registered_time').insert(data)
    }

    async get(id) {
         const user = await knex('registered_time')
            .join('user', 'user.id', '=', 'registered_time.user_id')
            .where('user.id', id)
            .select([
                'user.name',
                'registered_time.time_registered'
            ])
            return user
    }

    async list() {
        const users = await knex('registered_time')
           .join('user', 'user.id', '=', 'registered_time.user_id')
           .select([
               'user.name',
               'registered_time.time_registered'
           ])
           return users
   }

}

module.exports = new Registered_Time()