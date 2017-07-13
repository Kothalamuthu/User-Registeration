/**
 * Created by w5rtc on 11/7/17.
 */
var _=require('underscore');

var action= require('../action/action.js');

var UIRoutes = function(app) {
    this.app=app;
    this.actionInstance = new action(app);
};

module.exports = UIRoutes;





UIRoutes.prototype.init = function() {
    var self = this;
    var app = this.app;


    app.post('/login', function(req, res) {
        console.log(new Date(), "ENTER INTO  GET_SINGLE_STUDENT DETAILS");
        self.actionInstance.getStudentName(req, function(err, result) {
            console.log(new Date(), "RESPONSE INTO  GET_SINGLE_STUDENT DETAILS");
            res.send(result);
        })

    });
    app.get('/', function(req, res) {
        console.log("enter log");
        res.render( '/home/vignesh/Documents/User-Registration/public/index.html');

    });


}

