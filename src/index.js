const hljs = require('highlight.js/lib/core');

// Load any languages you need
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'));
hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'));
hljs.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'));
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
// hljs.registerLanguage('html', require('highlight.js/lib/languages/html'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('ini', require('highlight.js/lib/languages/ini'));
hljs.registerLanguage('c', require('highlight.js/lib/languages/c'));
hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'));
hljs.registerLanguage('diff', require('highlight.js/lib/languages/diff'));
hljs.registerLanguage('makefile', require('highlight.js/lib/languages/makefile'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('perl', require('highlight.js/lib/languages/perl'));
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'));
hljs.registerLanguage('rust', require('highlight.js/lib/languages/rust'));


window.hljs = hljs;

console.log('Platon Highlight.js v1.01');
