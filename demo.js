/*jshint browser:true*/
var D = require('dual');
var DropdownMenu = require('./');

var demo = D.fromJSON([
    'div', {
        'class': 'dropdown open'
    },
    [
        ['DropdownMenu', [
            ['li', [
                ['a', ['Hello']]
            ]],
            ['li', [
                ['a', ['World']]
            ]]
        ]]
    ]
], {
    'DropdownMenu': DropdownMenu
});

console.log(demo);

// var assets = D.utils.indexBy(demo, false, 'ui:asset');

document.body.appendChild(demo.domify());