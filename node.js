var http = require('http')  
var fs = require('fs')
var qs = require("querystring")
var url = require("url")
var server = http.createServer(function (req, res) {  
	parsedUrl = url.parse(req.url, true)
	if(parsedUrl.pathname == "/api/parsetime"){
		var date = new Date(parsedUrl.query.iso)
		jsonObj = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}
	}else{
		jsonObj = {
			unixtime: (new Date(parsedUrl.query.iso)).getTime()
		}
	}
	res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(jsonObj));

})  
server.listen(process.argv[2])