var D = require('dual');

module.exports = D.Container.extend({
    ATTRS: {
        caption: {
            textAsset: 'a'
        },
        href: {
            htmlAttribute: 'href',
            htmlAttributeAsset: 'a',
            init: 'javascript:void(0)'
        }
    },

    initStructure: function() {
        this.$ = D.fromJSON([
            'li', {
                'ui:asset': 'root'
            },
            [
                ['a', {
                    'ui:asset': 'a'
                }]
            ]
        ]);
    }
});