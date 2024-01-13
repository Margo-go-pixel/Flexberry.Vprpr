import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISVprprNewClass2LForm from './forms/i-i-s-vprpr-new-class2-l';
import IISVprprДолжностьLForm from './forms/i-i-s-vprpr-должность-l';
import IISVprprNewClass2EForm from './forms/i-i-s-vprpr-new-class2-e';
import IISVprprДолжностьEForm from './forms/i-i-s-vprpr-должность-e';
import IISVprprNewClass2Model from './models/i-i-s-vprpr-new-class2';
import IISVprprДолжностьModel from './models/i-i-s-vprpr-должность';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-vprpr-new-class2': IISVprprNewClass2Model,
    'i-i-s-vprpr-должность': IISVprprДолжностьModel
  },

  'application-name': 'Vprpr',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Vprpr',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vprpr',
          title: 'Vprpr'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        vprpr: {
          caption: 'Vprpr',
          title: 'Vprpr',
          'i-i-s-vprpr-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-vprpr-new-class2-l': {
            caption: 'New class2',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-vprpr-new-class2-l': IISVprprNewClass2LForm,
    'i-i-s-vprpr-должность-l': IISVprprДолжностьLForm,
    'i-i-s-vprpr-new-class2-e': IISVprprNewClass2EForm,
    'i-i-s-vprpr-должность-e': IISVprprДолжностьEForm
  },

});

export default translations;
