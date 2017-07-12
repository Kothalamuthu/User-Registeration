/**
 * Created by w5rtc on 11/7/17.
 */
var Service = function (app) {
    this.app = app;

};
module.exports = Service;
/*find*/
Service.prototype.findOneData = function (creteria,tablename,callback) {
    var self = this;
    var db = self.app.db;
    var collection = db.collection(tablename);

    collection.findOne(creteria, function (err, user) {
        //console.log(user);
        if (user === null) {
            callback(err, false);
        }
        if (user) {
            callback(err, user);
        }
    });
};
/* Insert*/
Service.prototype.insertOneData = function (creteria,tablename,callback) {
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

/*update*/
 Service.prototype.updateDocument = function (creteria,tablename, callback) {
 var self = this;
 var db = self.app.db;
 var collection = db.collection(tablename);

 //update table
 collection.update(Age, {$set: updateData}, function (err, resp) {
 if (resp) {
 callback(err, true)
 }
 else {
 callback(err, false)
 }
 })
 };

/*remove*/
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
