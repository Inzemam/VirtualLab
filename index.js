var express = require("express");
var app     = express();

app.use(express.static(__dirname + '/routes'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/public'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/views'));

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

// app.get('/lectures',function(req,res){
//   res.render('content', 'hello');
//   //It will find and locate index.html from View or Scripts
// });

// var lecture = require('./models/lecture');
//
// // view engine setup
// app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'head', layoutsDir: __dirname + '/views'}));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
//
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/lectures', lecture);





app.listen(process.env.PORT || 3000);
