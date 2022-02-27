//You need to define an app variable for express
const express = require('express');
//in place of the http variable that you would use for a node path
const app = express();
const path = require("path");

//setting up the express App 

var PORT=8080;

//Setting up the Express app to handle data parsing for sending POST requests
//app.use = tells app to use the following info

app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//routes
//Basic routes that send the user to the different html pages
app.get("/", function (req,res){
  res.sendFile(path.join(__dirname, "index.html"))
});
app.get("/video", function (req,res){
    res.sendFile(path.join(__dirname, "video.html"))
  });

app.get("/contact", function (req,res){
  res.sendFile(path.join(__dirname, "contact.html"))
});

app.get("/events", function (req,res){
  res.sendFile(path.join(__dirname, "events.html"))
});

app.get("/review", function (req,res){
    res.sendFile(path.join(__dirname, "review.html"))
  });

//starts the server to begin listening for requests
app.listen(PORT, function(){
  console.log("App is listening: "  + PORT)
});





























// // Dependencies
// // =============================================================
// var http = require("http");
// var express = require('express');
// var path = require('path');
// var app = express();

// // Ports
// //=============================================================

// var port = 8080;



// var server = http.createServer(handleRequest);


// // Routes
// // =============================================================
// function handleRequest(req, res) {
//     // Capture the url the request is made to
//     var path = req.url;
//     // console.log('current path, path')
// //     // Depending on the URL, display a different HTML file.
// //     switch (path) {
// //       case "/": return fs.readFile(__dirname + "/index.html", function (err, data) {
// //         if (err) throw err;
// //         res.writeHead(200, { "Content-Type": "text/html" })
// //         res.end(data);
// //       });
// //       case "/view": return fs.readFile(__dirname + "/projects.html", function (err, data) {
// //         if (err) throw err;
// //         res.writeHead(200, { "Content-Type": "text/html" })
// //         res.end(data);
// //       });
// //       case "/book": return fs.readFile(__dirname + "/services.html", function (err, data) {
// //         if (err) throw err;
// //         res.writeHead(200, { "Content-Type": "text/html" })
// //         res.end(data);
// //       });
// //       case "/contact": return fs.readFile(__dirname + "/contact.html", function (err, data) {
// //         if (err) throw err;
// //         res.writeHead(200, { "Content-Type": "text/html" })
// //         res.end(data);
// //       });

// //       case "/feature": return fs.readFile(__dirname + "/feature.html", function (err, data) {
// //         if (err) throw err;
// //         res.writeHead(200, { "Content-Type": "text/html" })
// //         res.end(data);
// //       });
// //       case "/review": return fs.readFile(__dirname + "/review.html", function (err, data) {
// //         if (err) throw err;
// //         res.writeHead(200, { "Content-Type": "text/html" })
// //         res.end(data);
// //       });
// //       default:
// //         return renderPage("/index.html", res);
      
       
// //     }
// //   }
// // Basic route that sends the user first to the  Page
// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "index.html") )
// }
// );
// app.get("/view", function(req, res){
//  res.send("You hit the HOME page");
//     res.sendFile(path.join(__dirname, "projects.html") )
// }
// );
// app.get("/book", function(req, res){
//     res.send("You hit the SERVICES page");
//     res.sendFile(path.join(__dirname, "services.html") )
// }
// );

// app.get("/contact", function(req, res){
//     res.send("You hit the CONTACT page");
//     res.sendFile(path.join(__dirname, "contact.html") )
// }
// );

// app.get("/feature", function(req, res){
//     res.send("You hit the FEATURE page");
//     res.sendFile(path.join(__dirname, "feature.html") )
// }
// );

// app.get("/review", function(req, res){
//     res.send("You hit the REVIEW page");
//     res.sendFile(path.join(__dirname, "review.html") )
// }
// );


// // add an api route // add another route // change the response

  

// // Starts the server to begin listening
// // =============================================================
// app.listen(port, function() {
//     console.log(`App listening on port ${port}`);
//   });