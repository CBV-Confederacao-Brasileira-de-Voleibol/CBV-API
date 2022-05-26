module.exports = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

    entities: ['./dist/modules/**/infra/typeorm/entities/*.js'],
    migrations: ['./dist/shared/infra/typeorm/migrations/*.js'],

    cli: {
        migrationsDir: './src/shared/infra/typeorm/migrations'
    },
    "dialect": "postgres",
    "dialectOptions": {
        "ssl": {
            "require": true,
            "rejectUnauthorized": false
        }
    }
}