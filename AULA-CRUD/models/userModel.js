const db = require('../config/db');
// const { updateUser, deleteUser } = require('../controllers/userController');

const User = {
    getAllUsers: (callback) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, (err,results) => {
            if (err) throw err;
            callback(results);
        });
    },

    getUserById: (id, callback) => {
        const sql = 'SELECT * FROM users WHERE id = ?';
        db.query(sql, [id], (err, results) => {
            if (err) throw err;
            callback(results[0]);
        });
    },

    addUser: (data, callback) => {
        const sql = 'INSERT INTO users SET ?';
        db.query(sql, data, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    },

    updateUser: (id, data, callback) => {
        const sql = 'UPDATE users SET ? WHERE id = ?';
        db.query(sql, [data, id], (err, results) => {
            if (err) throw err;
            callback(results);
        });
    },

    deleteUser: (id, callback) => {
        const sql = 'DELETE FROM users WHERE id = ?';
        db.query(sql, [id], (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }
};

module.exports = User;