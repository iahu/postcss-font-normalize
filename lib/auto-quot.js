// see detail https://www.w3.org/TR/CSS2/fonts.html
// https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
// *NOTE:* escape string , !important AND comment not processed.

function indentifiersValify (indentifiers) {
	if (!indentifiers) {
		return false;
	}
	return /^((\-(?![\-\d])|[^\-\d]))[a-zA-Z0-9\u00A0-\uFFFF\-_]*$/.test(indentifiers);
}

function isGenericFonts (str) {
	return /^(serif|sans-serif|cursive|fantasy|monospace)$/i.test(str);
}

function quoted (str) {
	return /(^"([^"]+|)"$)|(^'([^']+|)'$)/.test(str.trim());
}

function replaceCSSUnicode ($0) {
	return String.fromCharCode('0x' + $0.slice(1));
}
function unescapeCSS (str) {
	return str.replace(/(\\[0-9-a-f]{4})/gi, replaceCSSUnicode);
}

function includesBlankspace (str) {
	return str.includes(' ');
}

function autoQuot(str) {
	var strEsc = unescapeCSS( str.trim() );

	if ( !quoted(strEsc) &&
		(includesBlankspace(strEsc) || !isGenericFonts(strEsc) ) ) {
		
		// return '"' + str + '"';
		return str.replace(/(\s*)?(.+)(\s*)?/, '$1"$2"$3');
	}
	// else if ( !quoted(strEsc) && !indentifiersValify(strEsc) ) {
	// 	console.warn(str , 'maybe not a valid value.');
	// }

	return str;
}


module.exports = autoQuot;