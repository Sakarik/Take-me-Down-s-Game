var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.player1 = new play1(150,300);
        this.player1.setPosition( new cc.Point( 150, 300 ) );
        this.addChild( this.player1 );
        
        this.setKeyboardEnabled( true );
        this.player1.scheduleUpdate();

        return true;
    },
     onKeyDown: function( e ) {
        switch( e ) {
        case cc.KEY.left:
            this.player1.setDirection( play1.DIR.LEFT );
            break;
        case cc.KEY.right:
            this.player1.setDirection( play1.DIR.RIGHT );
            break;
        case cc.KEY.up:
            this.player1.setDirection( play1.DIR.UP );
            break;
        case cc.KEY.down:
            this.player1.setDirection( play1.DIR.DOWN );
            break;
        }
    },
     onKeyUp: function( e ){
        switch( e ) {
        case cc.KEY.left:
            this.player1.setDirection( play1.DIR.STILL );
            break;
        case cc.KEY.right:
            this.player1.setDirection( play1.DIR.STILL );
            break;
        case cc.KEY.up:
            this.player1.setDirection( play1.DIR.STILL );
            break;
        case cc.KEY.down:
            this.player1.setDirection( play1.DIR.STILL );
            break;
        }
     }
});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});