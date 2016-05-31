var node = require("./node")
node(process.argv[2], process.argv[3], function(err, data){
	if(err){
		console.log("Error in reading data")
	}else{
		for(var i = 0 ; i<data.length ; i += 1){
			console.log(data[i])
		}
	}
})