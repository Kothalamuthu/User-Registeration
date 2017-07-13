/**
 * Created by w5rtc on 11/7/17.
 */
var _=require('underscore');

var action= require('../action/action.js');

var UIRoutes = function(app) {

    console.log("enter log");
    this.app=app;
    this.actionInstance = new action(app);
};

module.exports = UIRoutes;





UIRoutes.prototype.init = function() {
    var self = this;
    var app = this.app;

    console.log("enter init");


    app.post('/login', function(req, res) {
        console.log(new Date(), "ENTER INTO  login",req);


        var result ={
            name:'vignesh',
            age:10
        }

        console.log(result.name);
        res.send(result);
       /* self.actionInstance.getStudentName(req, function(err, result) {
            console.log(new Date(), "RESPONSE INTO  GET_SINGLE_STUDENT DETAILS");
            res.send(result);
        })*/

    });
    app.get('/data', function(req, res) {
        console.log("enter log");
        console.log("enter log");
        console.log("enter log");
        console.log("enter log");
        console.log("enter log");
        console.log("enter log");
        //res.render( '/home/vignesh/Documents/User-Registration/public/index.html');

    });


}

