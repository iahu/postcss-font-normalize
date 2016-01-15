# PostCSS Font Normalize [![Build Status][ci-img]][ci]

[PostCSS] plugin to normalize font-family.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/iahu/postcss-font-normalize.svg
[ci]:      https://travis-ci.org/iahu/postcss-font-normalize

input:
```css
p { font: x-large/110% New Century Schoolbook, serif }
p { font: bold italic large Palatino, serif }
p { font: normal small-caps 120%/120% fantasy }

.ascii {
	font-family: Arial;
}
.lowercase {
	font-family: arial;
}
.unicode {
	font-family: 楷体;
}
.unicode-escape {
	font-family: \4EFF\5B8B;
}
.generic {
	font-family: Arial, 楷体, serif;
}
.blankspace {
	font-family: Tohama, Microsoft Yahei, sans-serif;
}
.good {
	font-family: Arial, \9ed1\4f53,"黑体", '华文细黑', sans-serif;
}
```
output:
```css
p { font: x-large/110% "New Century Schoolbook",serif }
p { font: italic bold large Palatino,serif }
p { font: normal small-caps 120%/120% fantasy }

.ascii {
	font-family: Arial;
}
.lowercase {
	font-family: arial;
}
.unicode {
	font-family: "楷体";
}
.unicode-escape {
	font-family: "\4EFF\5B8B";
}
.generic {
	font-family: Arial,"楷体",serif;
}
.blankspace {
	font-family: Tohama,"Microsoft Yahei",sans-serif;
}
.good {
	font-family: Arial,"\9ed1\4f53","黑体",'华文细黑',sans-serif;
}
```

## Usage

```js
postcss([ require('postcss-font-normalize') ])
```

See [PostCSS] docs for examples for your environment.
