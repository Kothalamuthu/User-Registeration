/**
 * Created by w5rtc on 11/7/17.
 */
var express= require('express')

var path= require('path');

var conf= require('./conf.js');

var body_prser= require('body-parser');

var session= require('express-session');

var momgo_store= require('connect-mongo') (session);

var app =express();


global.approot=path.resolve(__dirname);


app.use(body_parser.urlencoded({
    extented:false
}));

app.use(body_parser.json());

var mongoClient= require('mongodb').mongoClient;
var objectId= require('mongodb').objectId;

var url=conf.database.url;

console.log("url",url);
mongoClient.connect(url,function (err,db){
    app.db=db});

app.conf=conf;

var hostport=Number(host.web.port);

app.listen(hostport,function(){
    console.log("server running in the port:"+hostport);
});

var webRoutes= require(".routes/routes.js");
var webRoutes= new webRoutes(app);
webRoutes.init;







