const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    User.getAllUsers((users) => {
        res.render('index', {users});
    });
};

exports.getUserById = (req,res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('edit', { user });
    });
};

exports.getDeleteUser = (req,res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('delete', { user });
    });
};

exports.addUser = (req,res) => {
    const newUser = {
        nome: req.body.name,
        email: req.body.email
    };
    User.addUser(newUser, () =>{
        res.redirect('/');
    });
};

exports.updateUser = (req,res) => {
    const userId = req.params.id;
    const updateUser = {
        nome: req.body.name,
        email: req.body.email
    };
    User.updateUser(userId, updateUser, () => {
        res.redirect('/');
    });
};

exports.deleteUser = (req,res) => {
    const userId = req.params.id;
    User.deleteUser(userId, () => {
        res.redirect('/');
    });
};