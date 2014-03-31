var labelNumber = null;
var number = 6000;
var updateRate = 1.0;
var labelName = "TIME: "+number;

var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.labelNumber = cc.LabelTTF.create(labelName, "Arial", 72);
        this.labelNumber.setColor(cc.c3(64, 64, 64));
        this.labelNumber.setPosition(540,670);
        this.addChild(this.labelNumber);
        

        this.player1 = new play1(200,360);
        this.player1.setPosition( new cc.Point( 200, 360 ) );
        this.addChild( this.player1 );
        
        this.lifeB1 = new Life1(100,630);
        this.lifeB1.setPosition( new cc.Point( 100, 630 ) );
        this.addChild( this.lifeB1 );
        
        this.setKeyboardEnabled( true );
        this.player1.scheduleUpdate();
        this.lifeB1.scheduleUpdate();
        this.schedule(this.updateNumber, this.updateRate);

        return true;
    },
    updateNumber:function() {
        number--;
        if(number >= 0){
        if(this.labelNumber == null)
             return;
         this.labelNumber.setString("TIME: "+number);}
         //console.log(number);
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
        case cc.KEY.space:
            this.lifeB1.hitted();
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
     },
});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});