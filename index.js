var Koa = require("koa");
var app =  module.exports = new Koa();

app.use(async (ctx) => {
	try{
		ctx.body = 'Hello World';
		
	} catch(err) {
		ctx.body = { message: err.message };
		ctx.status = err.status || 500;
	} 
});


var port = process.env.PORT || (process.argv[2] || 3000);
port = (typeof port === "number") ? port : 3000;

if(!module.parent){ app.listen(port); }

console.log("Application started. Listening on port: " + port);


