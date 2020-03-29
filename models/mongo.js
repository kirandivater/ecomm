var mongoose    =   require("mongoose");
mongoose.connect('mongodb+srv://mongouser:mongopassword123@cluster0-kgfwt.mongodb.net/Customers_DB');

// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    "CustomerCode" : String,
    "CustomerName" : String
};
// create model if not exists.
module.exports = mongoose.model('tblCustomerDetails',userSchema);