import 'dotenv/config'
import { createConnection } from 'typeorm'


if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
    createConnection('default').then((conn) => {
        console.log(`Database connection created to ${process.env.NODE_ENV}`)
        conn.runMigrations()
    }).catch(err => console.log(err.message))
} else {
    createConnection({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: ["./dist/modules/**/infra/typeorm/entities/*.js"],
        synchronize: true,
        ssl: {
            rejectUnauthorized: false,
        },
    }).then((conn) => {
        console.log('Database connection created')
        conn.runMigrations()
    }).catch(err => console.log(err.message))
}
