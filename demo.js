/*jshint browser:true*/
var D = require('dual');
var DropdownMenu = require('./');

var demo = D.fromJSON([
    'div', {
        'class': 'dropdown open'
    },
    [
        ['DropdownMenu', [
            ['Item', {caption:'Hello'}],
            ['Item', {caption:'World'}],
            ['Separator'],
            ['Item', {caption:'Exit'}]
        ]]
    ]
], {
    'DropdownMenu': DropdownMenu,
    'Item': DropdownMenu.Item,
    'Separator': DropdownMenu.Separator
});

console.log(demo);

// var assets = D.utils.indexBy(demo, false, 'ui:asset');

document.body.appendChild(demo.domify());