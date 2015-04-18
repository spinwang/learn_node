var http = require('http');
var cheerio = require('cheerio');
var CountStream = require('./countstream');
// A countstream designed for counting 'books'
countStream = new CountStream('link');
var fs = require('fs');


console.log('Started...')

url = "http://www.manning.com/index.html";

//http.get(url, function(res){
//  res.pipe(countStream);
//});

//fs.createReadStream('./test.file').pipe(countStream);

countStream.on('Total', function(count){
  console.log('total count is ' + count);
});

// Scrape Manning.com
http.get(url, function(res){
  //var $ = cheerio.load(html);
  //var releases = $('.Releases a strong');

  //releases.each(function(index){
  //  console.log('New realease:', this.text());
  //});
  console.log(res.statusCode);
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    //res.pipe(countStream);
  //console.log(chunk);
  });
  //console.log(res.body);
  res.pipe(countStream);
  //return res;
  //res.pipe(process.stdout);
});
