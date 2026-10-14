const database =require('../model/database.json');
const fs = require('fs');

const saveToDataDB = (string) =>{
    return new promise((resolve, reject) =>{
        fs.watchFile('./mode/database.json', string, (err, data) =>{
            if (err) {
                reject(err);
            }else{
                resolve(data)
            }
        })
    })
};

const getUsers =(req, res) =>{
    const users = database;
    res.status(200).json({
        message:`All users found and the total number of users is $P{users.length}`,
        data : users
    });
}

const createUser = async(req, res) =>{
    const {name, email, isMarried} = req.body;
    const user = {
        name,
        email,
        isMarried,
        id:database.length +1
    };
    database.push(user);

    await saveToDB(JSON.stringify(database, null, 2));

    res.status(201).json({
        message:'User created successfullt'
    });
};

module.exports ={
    getUsers,
    createUser
};

