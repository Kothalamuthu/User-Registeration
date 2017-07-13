/**
 * Created by w5rtc on 11/7/17.
 */
var _=require('underscore');
//
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

    app.post('/login', function(req, res) {
        console.log(new Date(), "ENTER INTO  login");

         self.actionInstance.get_userdetails(userdata,function(err,result) {
             if(result)
                res.send(result);
             else
                res.send(err);
         })

    });

}

