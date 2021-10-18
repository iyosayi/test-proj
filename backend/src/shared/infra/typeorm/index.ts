
import {createConnection} from 'typeorm'

createConnection().then(() => console.log('Database connection created')).catch(err => console.log(err.message))