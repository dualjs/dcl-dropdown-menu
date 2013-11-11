var D = require('dual');

module.exports = D.Container.extend({
    ATTRS: {},

    initStructure: function() {
        this.$ = D.fromJSON([
            'li', {
                'ui:asset': 'root',
                'class': 'divider'
            }
        ]);
    }
});