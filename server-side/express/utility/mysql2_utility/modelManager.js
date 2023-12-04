//Requires
const mysql = require('mysql2/promise');

//Export
async function Connection(){
    try{
        const CNx0 = await mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'root',
            database: 'hospital'
        })
        return CNx0;
    }
    catch(err){
        console.log("[ERR] Utility mysql throw error: " + err);
        throw err;
    }
}

module.exports = { Connection };