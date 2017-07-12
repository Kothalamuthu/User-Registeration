/**
 * Created by w5rtc on 11/7/17.
 */
var _=require('underscore');

var action= require('./action/action.js');

var UIRoutes = function(app) {
    this.app=app;
    this.actionInstance = new action(app);
};

module.exports = UIRoutes;

