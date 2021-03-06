const $ = require('jquery');

require('ui/overlay/ui.overlay');

QUnit.testStart(function() {
    const markup = '<div id="overlay"></div>';

    $('#qunit-fixture').html(markup);
});

QUnit.module('default options');

QUnit.test('height and width are \'auto\' on SSR', function(assert) {
    const overlay = $('#overlay').dxOverlay().dxOverlay('instance');
    const overlayElementStyles = overlay.element().style;

    assert.equal(overlay.option('height'), null, 'height is \'null\'');
    assert.equal(overlay.option('width'), null, 'width is \'null\'');
    assert.equal(overlayElementStyles.width, '', 'element has no width');
    assert.equal(overlayElementStyles.height, '', 'element has no height');
});

