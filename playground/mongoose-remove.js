const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
//const {User} = require('../server/models/user');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove('5b5a02292a2bde310c796dd8').then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('5b5a02291541f00c31ce4601').then((todo) => {
//     console.log(todo);
// });