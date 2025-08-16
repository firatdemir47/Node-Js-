var http = require("http");
var fs = require("fs");

var server = http.createServer((request, response) => {

    if (request.url == '/') {
        fs.readFile(__dirname + "/indexs.html", (error, html) => {
            if (error) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write("indexs.html dosyası okunamadı!");
                response.end();
            } else {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(html);
                response.end();
            }
        });
    }
    else if (request.url == "/blogss") {
        fs.readFile(__dirname + "/blogss.html", (error, html) => {
            if (error) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write("blogss.html dosyası okunamadı!");
                response.end();
            } else {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(html);
                response.end();
            }
        });
    }
    else if (request.url == "/create" && request.method=="POST") {
        
        const data = [];

        request.on("data",(chunk)=>{
                data.push(chunk);
        })

        request.on("end", () => {
            const result =Buffer.concat(data).toString();
            const parsedData=result.split("=")[1];
            
        fs.appendFile("blogs.txt","parsedData",(err)=>{
            if(err){
                console.log(err);
            }
            else{
                response.statusCode=302;
                response.setHeader("Location","/");
                response.end();
            }
        })
        });

    }
    else if (request.url == "/create") {
        fs.readFile(__dirname + "/create.html", (error, html) => {
            if (error) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write("create.html dosyası okunamadı!");
                response.end();
            } else {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(html);
                response.end();
            }
        });
    }
    
    else {
        fs.readFile(__dirname + "/404s.html", (error, html) => {
            if (error) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write("404s.html dosyası okunamadı!");
                response.end();
            } else {
                response.writeHead(404, {"Content-Type": "text/html"});
                response.write(html);
                response.end();
            }
        });
    }

});

server.listen(3000);
console.log("node.js server at port 3000");
