import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.vprpr.caption'),
          title: i18n.t('forms.application.sitemap.vprpr.title'),
          children: [{
            link: 'i-i-s-vprpr-должность-l',
            caption: i18n.t('forms.application.sitemap.vprpr.i-i-s-vprpr-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.vprpr.i-i-s-vprpr-должность-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-vprpr-new-class2-l',
            caption: i18n.t('forms.application.sitemap.vprpr.i-i-s-vprpr-new-class2-l.caption'),
            title: i18n.t('forms.application.sitemap.vprpr.i-i-s-vprpr-new-class2-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})