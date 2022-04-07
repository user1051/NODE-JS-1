const http = require("http");
http
	.createServer((request, response) => {
		// //response.write("Hello Worlds"); //sending the response to front end
		// response.write("<h1>Hello</h1>");
		// response.end(); //closing the server

		// sending JSON response
		const user = { name: "John", age: 23 };
		response.write(JSON.stringify(user));
		response.end(); //closing the server
	})
	.listen(5000); //port number
