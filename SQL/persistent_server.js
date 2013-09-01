var http = require("http");
var url = require("url");
var handler = require("/Users/hackreactor/code/curt-mitch/2013-08-chat-server/request-handler.js");


//POST REQUEST:
/// insert into messages
///   (usernames, messages, createdAt)
///   values (username, text, date);
//var sql2="INSERT INTO `data` (`id`) VALUES (?);";

//GET REQUEST:
/// select usernames, messages, createdAt
///   from messages;

// dbConnection.query("INSERT INTO messages (messages) VALUES ('test');", function(err, rows){
//   if (err) throw err;
//   console.log(rows);
// });

var port = 8000;
var ip = "127.0.0.1";
var server = http.createServer(handler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

// dbConnection.end();