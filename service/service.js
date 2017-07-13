/**
 * Created by w5rtc on 11/7/17.
 */
var Service = function (app) {
    this.app = app;

};
module.exports = Service;
Service.prototype.insert_userdetails=function(insertdata,tablename,callback)

{
    var self = this;
    var db = self.app.db;
    var collection = db.collection(tablename);
    collection.insert(insertdata,function(err,res)
    {
        if(res)
            callback(null,res)
        else
            callback(err,null)
    })

};
/*find*/
<<<<<<< HEAD
/*Service.prototype.findOneData = function (creteria,tablename,callback) {
=======
Service.prototype.findOneData = function (creterial,tablename,callback) {
>>>>>>> fc99a09b4883c64c339c856d70c362244818a3ad
    var self = this;
    var db = self.app.db;


    var collection = db.collection(tablename);

    collection.findOne(creterial, function (err, user) {
        //console.log(user);
        if (user === null) {
            callback(err, false);
        }
        if (user) {
            callback(err, user);
        }
    });
};
<<<<<<< HEAD
/* Insert*
Service.prototype.insertOneData = function (creteria,tablename,callback) {
=======
/* Insert*/
Service.prototype.insertOneData = function (input,tablename,callback) {
>>>>>>> fc99a09b4883c64c339c856d70c362244818a3ad
    var self = this;
    var db = self.app.db;
    var collection = db.collection(tablename);

    collection.insert(input, function (err, resp) {
        if (resp) {
            callback(err, true);
        }
        else {
            callback(err, 'inserterror');
        }
    })
};

<<<<<<< HEAD
/*update*
 Service.prototype.updateDocument = function (creteria,updateData,tablename, callback) {
=======
/*update*/
 Service.prototype.updateDocument = function (creterial,tablename, callback) {
>>>>>>> fc99a09b4883c64c339c856d70c362244818a3ad
 var self = this;
 var db = self.app.db;
 var collection = db.collection(tablename);

 //update table
 collection.update(creteria, {$set: updateData}, function (err, resp) {
 if (resp) {
 callback(err, true)
 }
 else {
 callback(err, false)
 }
 })
 };

/*remove*
Service.prototype.removeDocument = function (tablename,condition, callback) {
    var self = this;
    var db = self.app.db;
    var collection = db.collection(tablename);

    //update table
    collection.remove(condition, function (err, resp) {

        console.log("err", err);
        if (resp) {
            callback(err, resp);
        }
        else {
            callback(err, null);
        }
    });
};
*/
