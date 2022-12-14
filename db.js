import pg from 'pg';
const { Pool } = pg;

const poolConfig = process.env.DATABASE_URL?{
    connectionString: process.env.DATABASE_URL,
        ssl:{
            rejectUnauthorized: false
        } 
    }:
    {
           user: "postgres",
           password: "Azhar_19.postgres",
           database: "MasjidNoorDB",
           host: "192.168.0.11",
           port: 5432
        
    };


//const pool = new Pool({
    //user: "postgres",
   // password: "Azhar_19.postgres",
   // database: "MasjidNoorDB",
   // host: "192.168.0.11",
    //port: 5432
//});

//module.exports = pool;


const pool = new Pool(poolConfig);
export default pool;
