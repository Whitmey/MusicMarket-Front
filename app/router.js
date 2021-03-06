import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('login');
  this.route('register');
  this.route('portfolio');
  this.route('shares');
  this.route('leaderboards');
});

export default Router;
