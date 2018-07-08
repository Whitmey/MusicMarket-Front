import Application from '@ember/application';
import Resolver from './resolver';
import Ember from 'ember';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

Ember.deprecate = () => {};

export default App;
