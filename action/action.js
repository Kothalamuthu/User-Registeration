var ApiService = require('../service/service.js');


var ApiActions = function (app) {
    this.app = app;
    this.apiServiceInstance = new ApiService(app);
};
module.exports = ApiActions;

ApiActions.prototype.getStudentName = function (req, callback) {
    var self = this;
    var responseObject = {};
    var query = {
        userID: req.body.userID,
    };

    var criteria1 = {
        condition: query
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
};
