var postcss = require('postcss');
var autoQuot = require('./lib/auto-quot.js');
var parseFont = require('./lib/parse-font.js');
var formteFormate = require('./lib/formate-font.js');

module.exports = postcss.plugin('postcss-font-normalize', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css, result) {

        // Transform CSS AST here

        css.walkDecls(function (decl) {
        	switch(decl.prop) {
        		case 'font':
        			var font = parseFont(decl.value);
                    if (font) {
            			font.fontFamily = font.fontFamily.split(',').map(autoQuot);
                        decl.value = formteFormate(font);
                    }
                    break;
                case 'font-family':
                    decl.value = decl.value.split(',').map(autoQuot);
        			break;
        	}
        });
    };
});
