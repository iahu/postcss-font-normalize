import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

import parseFont from './lib/parse-font.js';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.same(result.css, output);
            t.same(result.warnings().length, 0);
        });
}

/* Write tests here
*/

test('parse-font should run well', t => {
    var o = parseFont('normal small-caps 120%/120% fantasy');

    t.same( o.style, 'normal' );
    t.same( o.variant, 'small-caps' );
    t.same( o.size, '120%' );
    t.same( o.lineHeight, '120%' );
    t.same( o.fontFamily, 'fantasy' );
});

test('before blankspace should be resaved', t => {

    return run(t, 'a{font-family: Arial, sans-serif}',
    	'a{font-family: Arial, sans-serif}');
});

test('includes blankspace should be qouted', t => {

    return run(t, 'a{font-family: New Century Schoolbook}',
    	'a{font-family: "New Century Schoolbook"}');
});

test('generic font name should NOT be quoted', t => {

    return run(t, 'a{font-family: serif, sans-serif, cursive, fantasy, monospace}',
    	'a{font-family: serif, sans-serif, cursive, fantasy, monospace}');
});

test('font properties should be right order', t => {

    return run(t, 'a{font: bold italic large Palatino, serif}',
    	'a{font: italic bold large Palatino, serif}');
});

test('font properties should be right order', t => {

    return run(t, 'a{font: bold italic large Palatino, serif}',
    	'a{font: italic bold large Palatino, serif}');
});

test('ascii fontFamily should not be quoted', t => {

    return run(t, 'a{font-family: Arial;}',
    	'a{font-family: Arial;}');
});

test('non-ascii fontFamily should not be quoted', t => {

    return run(t, 'a{font-family: 楷体;}',
    	'a{font-family: "楷体";}');
});

test('escaped non-ascii fontFamily should not be quoted', t => {

    return run(t, 'a{font-family: \\4EFF\\5B8B;}',
    	'a{font-family: "\\4EFF\\5B8B";}');
});

test('multi fontFamily should be auto quoted', t => {

    return run(t, 'a{font-family: Arial, 楷体, serif;}',
    	'a{font-family: Arial, "楷体", serif;}');
});


