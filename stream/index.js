var util           = require('util');
var TransformStream = require('stream').Transform;

function ReplaceStream(){
    TransformStream.call(this,{decodeString:false});
    this.src = 'World';
    this.target = 'node';
    this.tailPiece = '';
    this.srcLength = 0;
}

util.inherits(ReplaceStream,TransformStream);

ReplaceStream.prototype._transform = function(chunk, encoding, cb) {
    var self = this; var writePiece, start, length;
    self.srcLength = self.src.length;
    chunk = this.tailPiece + chunk;
    var pieces = chunk.split(self.src);
    if (pieces.length === 1) {
        length = chunk.length;
        start = length - self.srcLength;
        var chunkAry = chunk.split('');
        var tailPieceAry = chunkAry.splice(start);
        self.tailPiece = tailPieceAry.join('');
        writePiece = chunk.slice(0,start);
    } else {
        self.tailPiece = pieces.pop(); //don't use pop, then no need to check length again
        if (pieces.length === 1) {
            pieces[1] = '';
        }
        writePiece = pieces.join(self.target);
    }

    self.push(writePiece);
    if (cb) {cb()}
};

ReplaceStream.prototype._flush = function(cb){
    this.push(this.tailPiece);
    if (cb) {cb()}
}

var rs = new ReplaceStream();
rs.on('data',function(data){
    console.log(data.toString());
});
rs.write('Hello Wor');
rs.write('ld!! World World Tsts W');
rs.write('orld!!! TS World')
rs.end();


