var ApiService = require('../service/service.js');


var ApiActions = function (app) {
    this.app = app;
    this.apiServiceInstance = new ApiService(app);
};
module.exports = ApiActions;

ApiActions.prototype.get_userdetails=function(req,callback)
{
    console.log("Enter into set function");




    var tablename='user';
    var insertdata={
        name:req.name ?  req.name:null,
        age:req.age ?  req.age:null,
        email:req.email? req.email:null,
        pwd:req.pwd? req.pwd:null
    }
    this.apiServiceInstance.insert_userdetails(insertdata,tablename,function(err,res)
    {
        if(res){

            callback(null,res);

        }
        else
            callback(err,null);

    })


};



/*ApiActions.prototype.setuser = function (req, callback) {
    var self = this;
    var responseObject = {};
    var data = {
       name:req.body.name,
       age:req.body.age,
       email:req.body.email,
        pwd:req.body.pwd
    };

    var criteria1 = {
        condition: data
    };

    var tableName = 'user';
    self.apiServiceInstance.insertOneData(tableName, criteria1, function (err, data) {
        if (data.length > 0) {
            responseObject['status'] = 'success';
            responseObject['data'] = data;
            callback(null, responseObject)

        }
        else {
            responseObject['status'] = 'error';
            responseObject['data'] = [];
            callback(null, responseObject)
        }
    });
};*/
