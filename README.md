# PostCSS Font Normalize [![Build Status][ci-img]][ci]

[PostCSS] plugin to normalize font-family.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/iahu/postcss-font-normalize.svg
[ci]:      https://travis-ci.org/iahu/postcss-font-normalize

input:
```css
.absolute-font-size { font: x-large Arial, serif }
.font-size-with-line-height { font: x-large/110% Arial, serif }
.length-font-size-and-line-height { font: normal small-caps 120%/120% fantasy }
.bad-order { font: bold italic large Palatino, serif }

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
.all-in-one {
	font-family: Arial, \9ed1\4f53, 黑体, 华文细黑, sans-serif;
}
.good {
	font-family: Arial, "\9ed1\4f53", "黑体", "华文细黑", sans-serif;
}
```
output:
```css
.absolute-font-size { font: x-large "Arial", serif }
.font-size-with-line-height { font: x-large/110% "Arial", serif }
.length-font-size-and-line-height { font: normal small-caps 120%/120% fantasy }
.bad-order { font: italic bold large "Palatino", serif }

.ascii {
	font-family: "Arial";
}
.lowercase {
	font-family: "arial";
}
.unicode {
	font-family: "楷体";
}
.unicode-escape {
	font-family: "\4EFF\5B8B";
}
.generic {
	font-family: "Arial", "楷体", serif;
}
.blankspace {
	font-family: "Tohama", "Microsoft Yahei", sans-serif;
}
.all-in-one {
	font-family: "Arial", "\9ed1\4f53", "黑体", "华文细黑", sans-serif;
}
.good {
	font-family: "Arial", "\9ed1\4f53", "黑体", "华文细黑", sans-serif;
}
```

## Usage

```js
postcss([ require('postcss-font-normalize') ])
```

See [PostCSS] docs for examples for your environment.
