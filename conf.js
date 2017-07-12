/**
 * Created by w5rtc on 11/7/17.
 */
var _=require("underscore");

var conf={};

var ENV= "development";

var envconf = requires(".conf/conf-"+ENV+".js");

conf=_.extent(envconf);

module.exports=conf;