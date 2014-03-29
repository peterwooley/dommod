var test = require('tape');
var dommod = require('./index.js');

test('No modification returns the same HTML', function(t) {
  t.plan(1);
  var html = "<html><head></head><body></body></html>";
  t.equal(dommod(html, null), html);
});

test('Removal of element', function(t) {
  t.plan(4);
  var html = "<html><body><a></a></body></html>";
  t.equal(dommod(html, "dom('a').remove()"), "<html><body></body></html>");
  t.equal(dommod(html, "dom('body').remove()"), "<html></html>");
  t.notEqual(dommod(html, "dom('html').remove()"), "<html></html>");
  t.equal(dommod(html, "dom.root().children('html').remove()"), "");
});

test('Removal of attribute', function(t) {
  t.plan(1);
  var html = "<html><body class='test'></body></html>";
  t.equal(dommod(html, "dom('body').removeAttr('class')"), "<html><body></body></html>");
});

test('Value returned instead of modified HTML', function(t) {
  t.plan(2);
  var html = "<ul><li></li><li></li><li></li></ul>";
  t.equal(dommod(html, "n = dom('li').length; dom.root().text(n)"), "3");
  t.equal(dommod(html, "dom.root().text('Useless')"), "Useless");
});

test('Single-quoted attributes are swapped out for double-quotes', function(t) {
  t.plan(1);
  var html = "<html lang='en'></html>";
  t.equal(dommod(html, null), '<html lang="en"></html>');
});
