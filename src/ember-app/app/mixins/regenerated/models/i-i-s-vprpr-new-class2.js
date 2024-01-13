import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.belongsTo('i-i-s-vprpr-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-vprpr-new-class2.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass2E', 'i-i-s-vprpr-new-class2', {
    должность: belongsTo('i-i-s-vprpr-должность', 'Должность', {
      имя: attr('Имя', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'имя' })
  });

  modelClass.defineProjection('NewClass2L', 'i-i-s-vprpr-new-class2', {
    должность: belongsTo('i-i-s-vprpr-должность', 'Имя', {
      имя: attr('Имя', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
