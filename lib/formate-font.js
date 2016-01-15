// [ [ <'font-style'> || <'font-variant'> || <'font-weight'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar | inherit
module.exports = function (o) {
	var lh = o.lineHeight;
	var size = o.size + (lh ? '/'+ lh : '');
	var f = '';

	return [o.style, o.variant, o.weight, size, o.fontFamily].join(' ').trim().replace(/\s+/g, ' ');
};