//Imports
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');

//Application Init
const app = express();
const port = 9090;

app.engine('hbs', exphbs({
	extname: 'hbs',
	defaultView: 'main',
	layoutsDir: path.join(__dirname, '/views/layouts'),
	partialsDir: path.join(__dirname, 'views/partials'),

	//Helpers
	helpers: {
		cap: function(text) { return text.toUpperCase(); },
		em: function(text) {
			var x = `<em>${text}</em>`;

			return new handlebars.SafeString(x);
		}
	}
}));

//HBS Init
app.set('view engine', 'hbs');

//Home Route
app.get('/', function(req, res) {
	res.render('home', {
		title: 'Developers',
		developer_active: true,
	})
});

app.get('/platforms', function(req, res) {
	res.render('platforms', {
		title: 'Platforms',
		platforms_active: true,
	});
});

app.get('/usertags', function(req, res) {
	res.render('usertags', {
		title: 'User Tags',
		usertag_active: true,
	});
});

app.get('/pricerange', function(req, res) {
	res.render('pricerange', {
		title: 'Price Range',
		pricerange_active: true,
	});
});

app.get('/toptags', function(req, res) {
	res.render('toptags', {
		title: 'Top Tags',
		toptags_active: true,
	});
});

app.listen(port, function() {
	console.log('App listening at port ' + port)
});

//Create Static URL
app.use(express.static('public'));
