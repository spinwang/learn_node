/**
 * Created by spin on 11/15/15.
 */
var devMongo = 'mongodb://@localhost:27017/learn_node';
var mongoose = require('mongoose');
mongoose.connect(devMongo);

var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

var Blog = mongoose.model('Blog', blogSchema);
// create a document
var newBlog = new Blog({
    title: 'blogpost',
    author: 'spin'
});

newBlog.save()
    .then(
       function(result) {
            return Blog.findOneAndUpdate(
            {title:'blogpost'},{$set:{author: 'spin11'}}, {new:true,passRawResult: true}
        ).exec() }

    /*Blog.findOneAndUpdate(
        {title:'blogpost'},{$set: {author: 'spin111'}} , {new:true,passRawResult: true}, function(err,blog,rawResp){
            console.log(blog);
            console.log(rawResp);
        }
    )*/

    ).then(function(blog,rawResp) {
        console.log(arguments);
        console.log('--------');
        Blog.findOneAndUpdate(
            {title:'blogpost'},{$set: {author: 'spin111'}} , {new:true,passRawResult: true}, function(err,blog,rawResp){
                console.log(blog);
                console.log(rawResp);
                mongoose.disconnect();
            }
        )


    }, function(err){
        console.err(err);
    });