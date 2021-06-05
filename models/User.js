const db = require("../config");

module.exports = {
    login: (email, password) => {
        return db.execute(`SELECT * FROM express_users.users WHERE email = ? AND password = MD5(?)`, [email, password]);
    },
    register: (email, first_name, last_name, password) => {
        return db.execute(`INSERT INTO express_users.users (email, first_name, last_name, password, created_at, updated_at) 
                            VALUES (?, ?, ?, MD5(?), NOW(), NOW())`, [email, first_name, last_name, password]);
    },
    checkEmail: (email) => {
        return db.execute(`SELECT email FROM express_users.users WHERE email = ?`, [email]);
    }
}