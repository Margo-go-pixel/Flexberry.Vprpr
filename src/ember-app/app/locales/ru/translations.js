import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Vprpr',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vprpr',
          title: 'Vprpr'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-vprpr-new-class2-l': IISVprprNewClass2LForm,
    'i-i-s-vprpr-должность-l': IISVprprДолжностьLForm,
    'i-i-s-vprpr-new-class2-e': IISVprprNewClass2EForm,
    'i-i-s-vprpr-должность-e': IISVprprДолжностьEForm
  },

});

export default translations;
