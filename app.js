var opt = require('node-getopt').create([
    ['f' , 'file=ARG'  , 'psd file path'],
])
.bindHelp()
.parseSystem();

var PSD = require('psd');
var psd = PSD.fromFile(opt.options['file']);
psd.parse();

var arr = [];
psd.tree().descendants().forEach(function (node) {
   arr.push(node.name);
});

console.info(arr.join(" "));

