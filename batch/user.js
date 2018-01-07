require('mongoose');
var User = require('user.js');

exports.getUsers = getUsers;
exports.postUser = postUser;

function getUsers() {
    return new Promise( function (resolve, reject) {
        var query = User.find({});
        query.exec(function(err, users) {
            if (err){
                return reject({err : 'Error while fetching users'});
            }
            // If no errors are found, it responds with a JSON of all users
            return resolve(users);
        });
    });
}