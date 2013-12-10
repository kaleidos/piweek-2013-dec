(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require.config({
    paths: {
      jquery: 'libs/jquery',
      underscore: 'libs/underscore',
      backbone: 'libs/backbone'
    },
    shim: {
      'underscore': ['jquery'],
      'backbone': ['jquery', 'underscore']
    }
  });

  require(['jquery', 'underscore', 'backbone'], function() {
    var App, Collection, CommonView, Model, Router, View, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
    Model = (function(_super) {
      __extends(Model, _super);

      function Model() {
        _ref = Model.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return Model;

    })(Backbone.Model);
    Collection = (function(_super) {
      __extends(Collection, _super);

      function Collection() {
        _ref1 = Collection.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      return Collection;

    })(Backbone.Collection);
    View = (function(_super) {
      __extends(View, _super);

      function View() {
        _ref2 = View.__super__.constructor.apply(this, arguments);
        return _ref2;
      }

      return View;

    })(Backbone.View);
    Router = (function(_super) {
      __extends(Router, _super);

      function Router() {
        _ref3 = Router.__super__.constructor.apply(this, arguments);
        return _ref3;
      }

      return Router;

    })(Backbone.Router);
    this.Model = Model;
    this.Collection = Collection;
    this.Router = Router;
    this.View = View;
    App = (function(_super) {
      __extends(App, _super);

      function App() {
        _ref4 = App.__super__.constructor.apply(this, arguments);
        return _ref4;
      }

      App.prototype.el = $('body');

      App.prototype.models = {};

      App.prototype.collections = {};

      App.prototype.views = {};

      App.prototype.decorators = {};

      App.prototype._models = {};

      App.prototype._collections = {};

      App.prototype._views = {};

      console.log('backbone loaded');

      return App;

    })(View);
    CommonView = (function(_super) {
      __extends(CommonView, _super);

      function CommonView() {
        _ref5 = CommonView.__super__.constructor.apply(this, arguments);
        return _ref5;
      }

      CommonView.prototype.el = $('body');

      CommonView.prototype.events = function() {
        return {
          'click .top-navigation .home': 'goHome',
          'click .top-navigation .concept': 'goConcept',
          'click .top-navigation .benefits': 'goBenefits',
          'click .top-navigation .process': 'goProcess',
          'click .top-navigation .rules': 'goRules',
          'click .top-navigation .join': 'goJoin'
        };
      };

      CommonView.prototype.initialize = function() {
        this.boat = this.$el.find('.rock-boat');
        this.BHeight = $(window).height();
        this.BWidth = $(window).width();
        this.loadVisor();
        return this.boat.animate({
          marginTop: '-1995px',
          marginLeft: '-722px'
        }, 500);
      };

      CommonView.prototype.loadVisor = function() {
        this.$el.find('.page-container').height(this.BHeight);
        return this.$el.find('.page-container').width(this.BWidth);
      };

      CommonView.prototype.setActive = function(target) {
        target.parent().siblings().find('a').removeClass('active');
        return target.addClass('active');
      };

      CommonView.prototype.goHome = function(event) {
        this.target = $(event.currentTarget);
        this.setActive(this.target);
        return this.boat.animate({
          marginTop: '-1995px',
          marginLeft: '-722px'
        }, 500);
      };

      CommonView.prototype.goConcept = function(event) {
        event.preventDefault();
        this.target = $(event.currentTarget);
        this.setActive(this.target);
        return this.boat.animate({
          marginTop: '-1295px',
          marginLeft: '-2032.5px'
        }, 500);
      };

      CommonView.prototype.goBenefits = function(event) {
        event.preventDefault();
        this.target = $(event.currentTarget);
        this.setActive(this.target);
        return this.boat.animate({
          marginTop: '115px',
          marginLeft: '-752.5px'
        }, 500);
      };

      CommonView.prototype.goProcess = function(event) {
        event.preventDefault();
        this.target = $(event.currentTarget);
        this.setActive(this.target);
        return this.boat.animate({
          marginTop: '-750px',
          marginLeft: '-652.5px'
        }, 500);
      };

      CommonView.prototype.goRules = function(event) {
        event.preventDefault();
        this.target = $(event.currentTarget);
        this.setActive(this.target);
        return this.boat.animate({
          marginTop: '245px',
          marginLeft: '-2400.5px'
        }, 500);
      };

      CommonView.prototype.goJoin = function(event) {
        event.preventDefault();
        this.target = $(event.currentTarget);
        this.setActive(this.target);
        return this.boat.animate({
          marginTop: '-1255.5px',
          marginLeft: '468.5px'
        }, 500);
      };

      return CommonView;

    })(View);
    this.app = new App();
    return this.commonView = new CommonView();
  });

}).call(this);

(function() {


}).call(this);
