var express = require("express");
var app = express();
var cors =require('cors');
var router = require('./router/main')(app);

// view 경로 설정
app.set('views', __dirname + '/views');
app.set('port', process.env.PORT || 8080)

app.use(cors());

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

var server = app.listen(app.get('port'), function(){
    console.log("Express server has started on port " + app.get('port'))
});