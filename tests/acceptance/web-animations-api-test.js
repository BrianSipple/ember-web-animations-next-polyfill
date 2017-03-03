import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | web animations api');

test('visiting /web-animations-api', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    assert.equal(typeof Animation, 'function');
    assert.equal(typeof KeyframeEffect, 'function');
  });
});
