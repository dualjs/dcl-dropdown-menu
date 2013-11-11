/*
 * dcl-dropdown-menu
 * https://github.com/dualjs/dropdown-menu
 *
 * Copyright (c) 2013 Mark
 * Licensed under the MIT license.
 */

var D = require('dual');
require('dcl-bootstrap');
var Item = require('./item');
var Separator = require('./separator');

var DropdpwnMenu = module.exports = D.Container.extend({
    ATTRS: {
        caption: {
            textAsset: 'root'
        },
        visible: {
            init: true
        }
    },

    initStructure: function() {
        this.$ = D.fromJSON([
            'div', {
                'ui:asset': 'root',
                'class':'dropdown-menu'
            }
        ]);
    }
});

DropdpwnMenu.Item = Item;
DropdpwnMenu.Separator = Separator;