import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vprpr-должность', 'Unit | Model | i-i-s-vprpr-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-vprpr-new-class2',
    'model:i-i-s-vprpr-должность',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
