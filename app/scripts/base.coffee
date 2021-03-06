#requirejs
require.config
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone'
    },
    shim: {
        'underscore': ['jquery']
        'backbone': ['jquery', 'underscore']
    }

require(['jquery','underscore','backbone'], ->

    class Model extends Backbone.Model
    class Collection extends Backbone.Collection
    class View extends Backbone.View
    class Router extends Backbone.Router

    @Model = Model
    @Collection = Collection
    @Router = Router
    @View = View

    class App extends View
        el: $('body')
        models: {}
        collections: {}
        views: {}
        decorators: {}
        # Private objects
        _models: {}
        _collections: {}
        _views: {}
        console.log 'backbone loaded'

    class CommonView extends View

        el: $('body')

        events: ->
            'click .top-navigation .home': 'goHome',
            'click .top-navigation .concept': 'goConcept'
            'click .top-navigation .benefits': 'goBenefits'
            'click .top-navigation .process': 'goProcess'
            'click .top-navigation .rules': 'goRules'
            'click .top-navigation .join': 'goJoin'

        initialize: ->
            @boat = @.$el.find('.rock-boat')
            @BHeight = $(window).height()
            @BWidth = $(window).width()

            @loadVisor()

            @boat.animate({
                marginTop: '-2160px',
                marginLeft: '-1030px'
            }, 500 )

        loadVisor: ->
            @.$el.find('.page-container').height(@BHeight)
            @.$el.find('.page-container').width(@BWidth)

        setActive: (target) ->
            target.parent().siblings().find('a').removeClass('active')
            target.addClass('active')

        goHome: (event) ->
            @target = $(event.currentTarget)
            @setActive(@target)

            @boat.animate({
                marginTop: '-2160px',
                marginLeft: '-1030px'
            }, 500 )

        goConcept: (event) ->
            event.preventDefault()

            @target = $(event.currentTarget)
            @setActive(@target)

            @boat.animate({
                marginTop: '-1440px',
                marginLeft: '-2286px'
            }, 500 )

        goBenefits: (event) ->
            event.preventDefault()

            @target = $(event.currentTarget)
            @setActive(@target)

            @boat.animate({
                marginTop: '100px',
                marginLeft: '-970px'
            }, 500 )

        goProcess: (event) ->
            event.preventDefault()

            @target = $(event.currentTarget)
            @setActive(@target)

            @boat.animate({
                marginTop: '-750px',
                marginLeft: '-940.5px'
            }, 500 )

        goRules: (event) ->
            event.preventDefault()

            @target = $(event.currentTarget)
            @setActive(@target)

            @boat.animate({
                marginTop: '230px',
                marginLeft: '-2510.5px'
            }, 500 )

        goJoin: (event) ->
            #width: 0px; margin-left: 572.5px; margin-top: -1295px;
            event.preventDefault()

            @target = $(event.currentTarget)
            @setActive(@target)

            @boat.animate({
                marginTop: '-1500px',
                marginLeft: '468.5px'
            }, 500 )

    @app = new App()
    @commonView = new CommonView()

)