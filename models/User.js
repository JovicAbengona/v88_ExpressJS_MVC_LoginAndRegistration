const db = require("../config");

module.exports = class User{
    static login(email, password){
        return db.execute(`SELECT * FROM users WHERE email = ? AND password = MD5(?)`, [email, password]);
    }

    static register(email, first_name, last_name, password){
        return db.execute(`INSERT INTO users (email, first_name, last_name, password, created_at, updated_at) 
                            VALUES (?, ?, ?, MD5(?), NOW(), NOW())`, [email, first_name, last_name, password]);
    }

    static checkEmail(email){
        return db.execute(`SELECT email FROM users WHERE email = ?`, [email]);
    }
}