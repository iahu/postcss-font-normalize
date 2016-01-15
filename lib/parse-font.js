var sFontStyle = '(normal|italic|oblique|inherit)';
var sFontVariant = '(normal|small-caps|inherit)';
var sFontWeight = '(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit)';
var sFontSizeKeyword = '(xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller)';
var sFontSizeLength = '((?:\\d*)(?:\\.\\d*)?(?:px|em|%|))';
var sFontSize = '('+ sFontSizeKeyword + '|' + sFontSizeLength +')';
var sFontPropExt = 'caption|icon|menu|message-box|small-caption|status-bar|inherit';

var rFontStyle = new RegExp(sFontStyle, 'i');
var rFontVariant = new RegExp(sFontVariant, 'i');
var rFontWeight = new RegExp(sFontWeight, 'i');
var rFontSize = new RegExp(sFontSize, 'i');
var rFontLineHeight = new RegExp('/' + sFontSizeLength, 'i');

// [ [ <'font-style'> || <'font-variant'> || <'font-weight'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar | inherit

function parseFont (str) {
	str = str.trim();
	var str_o = str;
	var idx = 0;

	var style = rFontStyle.exec(str);
	style = getValue(style);
	str = str.replace(style, '').trim();

	var variant = rFontVariant.exec(str);
	variant = getValue(variant);
	str = str.replace(variant, '').trim();

	var weight = rFontWeight.exec(str);
	weight = getValue(weight);
	str = str.replace(weight, '').trim();

	var size = rFontSize.exec(str);
	// console.log('size', size);
	size = getValue(size);
	str = str.replace(size, '').trim();

	var lineHeight = rFontLineHeight.exec(str);
	lineHeight = getValue(lineHeight);
	str = str.replace(lineHeight, '').trim();
	lineHeight = lineHeight.slice(1);

	var fontFamily = str.trim();

	return {
		style: style,
		variant: variant,
		weight: weight,
		size: size,
		lineHeight: lineHeight,
		fontFamily: fontFamily,
		string: str_o
	};
}

function getValue (match) {
	return match ? match[0].trim() : '';
}

module.exports = parseFont;