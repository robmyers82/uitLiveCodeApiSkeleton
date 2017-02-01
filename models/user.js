var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/livecodeapi');

var mongoSchema =   mongoose.Schema;
var userSchema  = {
    "name" : String,
    "email" : String,
    "password" : String
};

module.exports = mongoose.model('users', userSchema);