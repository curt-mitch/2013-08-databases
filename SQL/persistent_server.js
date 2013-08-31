var mysql = require('mysql');
var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
var handler = require("/Users/hackreactor/code/curt-mitch/2013-08-chat-server/request-handler.js");
var dbConnection = mysql.createConnection({
  user: "root",
  password: "plantlife",
  database: "chat"
});

dbConnection.connect();
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/

/* You already know how to create an http server from the previous
 * assignment; you can re-use most of that code here. */


//POST REQUEST:
/// insert into messages
///   (usernames, messages, createdAt)
///   values (username, text, date);
//var sql2="INSERT INTO `data` (`id`) VALUES (?);";

//GET REQUEST:
/// select usernames, messages, createdAt
///   from messages;


var port = 8000;
var ip = "127.0.0.1";
var server = http.createServer(handler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

dbConnection.query('SELECT 1 + 4 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});


var requestListener = function(request, response) {

var uri = request.url;

 if (uri === "/1/classes/messages"){
    if (request.method === "OPTION"){
      response.writeHead(200, responseHeaders);
      response.end('');
    }

    if(request.method === "POST") {
      request.on('data', function(data){
        var sql = "INSERT into messages (usernames, messages, createdAt) VALUES (data[username], data[text], data[date]);";
        dbConnection.query(sql, function(err) {
          if (err) throw err;
          response.writeHead(201, responseHeaders);
          response.end();
        });
      });
      request.on('end', function() {
        response.end();
      });
    }

    if(request.method == "GET"){
      response.writeHead(200, responseHeaders);
      response.end();
    } else {
      response.writeHead(404);
      response.write("Y U NO ASK 4 ANYTHING USEFUL???");
      response.end();
    }
   }
};

dbConnection.end();