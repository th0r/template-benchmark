var nunjucks = require('nunjucks');
var compiled;
var tplData;
var i;

var env = nunjucks.configure(__dirname, {
    watch: false,
    autoescape: true
});

module.exports.prepare = function (data, done) {
	tplData = data;
    compiled = env.getTemplate('tpl_escaped.nunjucks', true);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	compiled = env.getTemplate('tpl_unescaped.nunjucks', true);
	done();
};

module.exports.step = function (done) {
	var html = compiled.render(tplData);
	done(undefined, html);
};
