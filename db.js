import pg from 'pg';
const {Pool} = pg;

const poolconfig = process.env.DATABEAE_URL?{
    connectionString: process.env.DATABEAE_URL,
        ssl:{
            rejectUnAuthorized: false
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


const pool = new Pool(poolconfig);
export default pool;
