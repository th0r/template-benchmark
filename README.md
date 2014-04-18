# Node.JS template engines benchmark

## Engines

- [doT](https://github.com/olado/doT) v1.0.2 ([website](http://olado.github.com/doT/))
- [Jade](https://github.com/visionmedia/jade) v1.3.1 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v1.3.2 ([website](http://paularmstrong.github.io/swig/))
- [Nunjucks](https://github.com/paularmstrong/swig) v1.3.2 ([website](http://mozilla.github.io/nunjucks/))

## Results

### Mac OSX 10.9.2 (MacBook Air i7 1.7 GHz 8GB Ram), NodeJS 0.10.26

    Rendering 50000 templates:

    doT
      Escaped   : 952ms
      Unescaped : 21ms
      Total     : 973ms

    Jade
      Escaped   : 1649ms
      Unescaped : 745ms
      Total     : 2394ms

    Jade without `with`
      Escaped   : 999ms
      Unescaped : 196ms
      Total     : 1195ms

    Swig
      Escaped   : 1376ms
      Unescaped : 104ms
      Total     : 1480ms

    Nunjucks
      Escaped   : 1025ms
      Unescaped : 14562ms
      Total     : 15587ms

    Performance report for 50000 templates (darwin):

    doT                  (  973ms) - fastest
    Jade without `with`  ( 1195ms) - 23% slower
    Swig                 ( 1480ms) - 52% slower
    Jade                 ( 2394ms) - 146% slower
    Nunjucks             (15587ms) - 1502% slower

## Usage

	git clone git://github.com/th0r/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
