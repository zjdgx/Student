var http = require('http'),
	path = require('path'),
	compression = require('compression'),
	express = require('express'),
	methodOverride = require('method-override'),
	bodyparser = require('body-parser'),
	route = require('./lib/student/student'),
	app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'public/views'));
app.use(compression());
app.use(express.static(path.join(__dirname, 'public/static')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: true
}));

app.get('/', route.main);
app.post('/regStudent', route.regStudent);
/*app.get('/todoList', route.getTodoList);
app.delete('/todo/remove/:id', route.removeTodo);*/

app.use(methodOverride());
app.listen(8000, function () {
	console.log('Student start on port 8000...');
});