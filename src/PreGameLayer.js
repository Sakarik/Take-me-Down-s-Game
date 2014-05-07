var PreGameLayer = cc.Layer.extend({
    ctor: function(){
        this._super();
    },

    init: function(){
        this._super();

        var bg = cc.Sprite.create();
        bg.setPosition(new cc.Point(540, 360));

        this.anime = this.preAnimation();
        bg.runAction(this.anime);
    

        this.intro();
        this.addChild( bg );
        this.setKeyboardEnabled( true );

    },

    intro: function(){
         cc.AudioEngine.getInstance().playMusic("res/music/introMusic.mp3");
    },

    onKeyDown: function( e ) {
    	console.log(e);
    	if(e == 13){
    		 var director = cc.Director.getInstance();
       		 director.replaceScene(cc.TransitionFade.create(1.5, new GameLayerScene()));
    	}
    },

    preAnimation: function(){
        var preAnime = new cc.Animation.create();
        preAnime.setDelayPerUnit( 0.7  );
        preAnime.addSpriteFrameWithFile('res/images/pre1.png' );
        preAnime.addSpriteFrameWithFile('res/images/pre2.png' );
        return cc.RepeatForever.create( cc.Animate.create( preAnime ));
    },

});

var PreGameScene = cc.Scene.extend({
    ctor: function(){
        this._super();
        var layer = new PreGameLayer();
        layer.init();
        this.addChild( layer );
    }
});