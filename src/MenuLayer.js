var MenuLayer = cc.Layer.extend({
    ctor: function(){
        this._super();
    },

    init: function(){
        this._super();

        var director = cc.Director.getInstance();

        var bg = cc.Sprite.create("res/images/menu.png");
        bg.setPosition(new cc.Point(540, 360));

        this.intro();

        this.menuStart = new cc.MenuItemFont.create("click anywhere to start");
        this.menuStart.setPosition(new cc.Point(540, 300));

        var menu = cc.Menu.create(this.menuStart);
        menu.setPosition(new cc.Point(0,0));
        menu.setEnabled(true)

        this.addChild( bg );
        this.addChild(menu); 

        this.setTouchEnabled(true);
        this.setTouchMode(1);
    },

    intro: function(){
         cc.AudioEngine.getInstance().playMusic("res/music/introMusic.mp3");
    },

    onTouchBegan:function( touch, event ) {
        var director = cc.Director.getInstance();
        director.replaceScene(cc.TransitionFade.create(1.5, new StartScene()));
    }
});

var MenuScene = cc.Scene.extend({
    ctor: function(){
        this._super();
        var layer = new MenuLayer();
        layer.init();
        this.addChild( layer );
    }
});