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

        var click = cc.Sprite.create();
        this.anime = this.clickAnimation();
        click.runAction(this.anime);
        click.setPosition(new cc.Point(740, 250));


        this.addChild( bg );
        this.addChild(click);


        this.setTouchEnabled(true);
        this.setTouchMode(1);
    },
    
    clickAnimation: function(){
        var clickAnime = new cc.Animation.create();
        clickAnime.setDelayPerUnit( 0.3  );
        clickAnime.addSpriteFrameWithFile('res/images/clickMe1.png' );
        clickAnime.addSpriteFrameWithFile('res/images/clickMe2.png' );
        clickAnime.addSpriteFrameWithFile('res/images/clickMe3.png' );
        return cc.RepeatForever.create( cc.Animate.create( clickAnime ));
    },

    intro: function(){
         cc.AudioEngine.getInstance().playMusic("res/music/introMusic.mp3");
    },

    onTouchBegan:function( touch, event ) {
        var director = cc.Director.getInstance();
        director.replaceScene(cc.TransitionFade.create(1.5, new PreGameScene()));
    }
});

var StartScene = cc.Scene.extend({
    ctor: function(){
        this._super();
        var layer = new MenuLayer();
        layer.init();
        this.addChild( layer );
    }
});