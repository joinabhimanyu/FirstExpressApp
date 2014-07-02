
var express = require('express'),
    path = require('path');

var app = express();

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.set('view options', {
        layout: false,
        pretty: true
    });
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(app.router);
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/', function (req, res) {
    res.render('index', { title: 'Home Page' });
});

app.get("/xamarin", function (req, res) {
    //res.send('This is the xamarin page');
    res.render('xam_view', { title: 'Xamarin Page' });
});

app.get("/phonegap", function (req, res) {
    //res.send('This is the phonegap page');
    //res.render('gap_view', { title: 'Phonegap Page' });
    res.sendfile('./public/AngularFireDemo.html');
});

app.listen(process.env.PORT || 8080, function () {
    console.log('Express server started listening');
});