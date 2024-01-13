import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-vprpr-new-class2-l');
  this.route('i-i-s-vprpr-new-class2-e',
  { path: 'i-i-s-vprpr-new-class2-e/:id' });
  this.route('i-i-s-vprpr-new-class2-e.new',
  { path: 'i-i-s-vprpr-new-class2-e/new' });
  this.route('i-i-s-vprpr-должность-l');
  this.route('i-i-s-vprpr-должность-e',
  { path: 'i-i-s-vprpr-должность-e/:id' });
  this.route('i-i-s-vprpr-должность-e.new',
  { path: 'i-i-s-vprpr-должность-e/new' });
});

export default Router;
