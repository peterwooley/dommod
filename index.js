var cheerio = require('cheerio');

module.exports = function(html, script) {
    dom = cheerio.load(html, { xmlMode: true });
    eval(script);
    return dom.root().html();
};
