/**
 * Created by w5rtc on 11/7/17.
 */
var express= require('express')

var path= require('path');

var conf= require('./conf.js');

var body_parser= require('body-parser');



var app =express();


global.approot=path.resolve(__dirname);

app.use(express.static(__dirname + '/public'));


app.use(body_parser.urlencoded({
    extented:false
}));

app.use(body_parser.json());

var mongoClient= require('mongodb').MongoClient;

var url=conf.database.url;

console.log("url",url);




mongoClient.connect(url,function (err,db){
    app.db=db});

app.conf=conf;

var hostport=Number(conf.web.port);

app.listen(hostport,function(){
    console.log("server running in the port:"+hostport);
});

var webRoutes= require("./routes/routes.js");
var webRoutes= new webRoutes(app);
webRoutes.init();








