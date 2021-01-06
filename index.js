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
		title: 'Welcome',
	})
});

app.get('/profile', function(req, res) {
	res.render('profile', {
		title: 'Profile',

		name: 'Jacob Darvin',
		idprefix: '118',
		course: 'BS CSS-ST',
	})
});

app.get('/academics', function(req, res) {
	res.render('academics', {
		title: 'Courses Taken',
		frosh: [
			{
				course_code: 'GDPROG1',
				faculty: 'Esguerrera',
			},
			{
				course_code: 'BASMATH',
				faculty: 'Lawas',
			},
			{
				course_code: 'BASTAT',
				faculty: 'Ocampo',
			},
			{
				course_code: 'GEPCOMM',
				faculty: 'Pili',
			},
			{
				course_code: 'NSTP101',
				faculty: 'Laranga',
			},
			{
				course_code: 'CCDSTRU',
				faculty: 'Gendrano',
			},
			{
				course_code: 'GDPROG2',
				faculty: 'Dimaunahan',
			},
			{
				course_code: 'CSMATH1',
				faculty: 'Gervacio',
			},
			{
				course_code: 'GEARTAP',
				faculty: 'Marasigan',
			},
			{
				course_code: 'GEMATW',
				faculty: 'Candelaria',
			},
			{
				course_code: 'GEUSELF',
				faculty: 'Reyes',
			},
			{
				course_code: 'LCLSONE',
				faculty: 'Magpantay',
			},
			{
				course_code: 'GDPROG3',
				faculty: 'Esguerrera',
			},
			{
				course_code: 'CSMATH2',
				faculty: 'Esguerrera',
			},
			{
				course_code: 'GEFILI1',
				faculty: 'Donnes',
			},
			{
				course_code: 'GEFTWEL',
				faculty: 'Calabio',
			},
			{
				course_code: 'LCFAITH',
				faculty: 'Lacsa',
			},
			{
				course_code: 'NSTP201',
				faculty: 'Laranga',
			},
		],

		sophmore: [
			{
				course_code: 'CCINFOM',
				faculty: 'Esguerrera',
			},
			{
				course_code: 'GDDASGO',
				faculty: 'Neil Patrick',
			},
			{
				course_code: 'CSINTSY',
				faculty: 'Azcarraga',
			},
			{
				course_code: 'GEDANCE',
				faculty: 'Calabio',
			},
			{
				course_code: 'GEFILI2',
				faculty: 'Felicilda',
			},
		]
	});
});

app.get('/activities', function(req, res) {
	res.render('activities', {
		title: 'Extra Curricular Activities',
		profile: [
			{
				orgname: 'INDIE',
				role: 'Internal Vice President',
			},
			{
				orgname: 'LSCS',
				role: 'Media And Publications Commitee',
			},
		]
	})
});

app.listen(port, function() {
	console.log('App listening at port ' + port)
})

//Create Static URL
app.use(express.static('public'));
