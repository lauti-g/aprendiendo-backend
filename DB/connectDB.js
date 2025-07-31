import mysql from 'mysql2/promise'
import 'dotenv/config' 

export const pool = new mysql.createPool({
        host: process.env.DB_host,
        user: process.env.DB_user,
        database: process.env.DB_database,
        password: process.env.DB_password
    })

