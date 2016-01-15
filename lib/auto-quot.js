// see detail https://www.w3.org/TR/CSS2/fonts.html
// https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
// *NOTE:* escape string , !important AND comment not processed.

function indentifiersValify (indentifiers) {
	if (!indentifiers) {
		return false;
	}
	return /^((\-(?![\-\d])|[^\-\d]))[a-zA-Z0-9\u00A0-\uFFFF\-_]*$/.test(indentifiers);
}

function isAllAscii (str) {
	return /^[a-zA-Z0-9]{1,}$/.test(str);
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
	var str_trim = str.trim();
	var strEsc = unescapeCSS( str_trim );
	var qMarker = '"';

	if ( !quoted(strEsc) && !isAllAscii(str) &&
		(includesBlankspace(strEsc) || !isGenericFonts(strEsc) ) ) {
		
		return str.replace( str.trim(), qMarker + str_trim + qMarker);
	}
	// else if ( !quoted(strEsc) && !indentifiersValify(strEsc) ) {
	// 	console.warn(str , 'maybe not a valid value.');
	// }

	return str;
}


module.exports = autoQuot;