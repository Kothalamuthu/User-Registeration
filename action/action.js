/**
 * Created by w5rtc on 11/7/17.
 */
var apiService= require("./action/action.js");
var _= require("underscore");

var apiAction= function(app){
    this.app= app;
    this.appServiceInstanc=new apiService(app);
};

module.exports = apiAction;
