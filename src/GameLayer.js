var labelNumber = null;
var number = 60
var labelName = number;

var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.bg = new BackGround();
        this.bg.setPosition( new cc.Point( 540, 360 ) );
        this.addChild( this.bg );

        this.labelNumber = cc.LabelTTF.create(labelName, "Marker Felt", 60);
        this.labelNumber.setColor(cc.c3(100, 00, 00));
        this.labelNumber.setPosition(520,615);
        this.addChild(this.labelNumber);
        
        this.player1 = new Player1(200,360);
        this.player1.setPosition( new cc.Point( 200, 360 ) );
        this.addChild( this.player1 );

        this.lifeB1 = new Life1(100,630);
        this.lifeB1.setPosition( new cc.Point( 100, 630 ) );
        this.addChild( this.lifeB1 );
        
        this.setKeyboardEnabled( true );
        this.player1.scheduleUpdate();
        this.lifeB1.scheduleUpdate();
        this.schedule(this.updateTimer, 1);

        return true;
    },

    update : function(){
        this.updateNumber();
    },

    updateTimer:function() {
        number--;
        if(number >= 0){
        if(this.labelNumber == null)
             return;
        // var number2 = Math.round(number/100);
         this.labelNumber.setString(number);}
         if(number == 0){
            this.player1.endGame();
         }
         //console.log(number);
    },

     onKeyDown: function( e ) {
        
        switch( e ) {
        case cc.KEY.left:
            this.player1.setDirection( Player1.DIR.LEFT );
            break;
        case cc.KEY.right:
            this.player1.setDirection( Player1.DIR.RIGHT );
            break;
        case cc.KEY.up:
            this.player1.setDirection( Player1.DIR.UP );
            break;
        case cc.KEY.down:
            this.player1.setDirection( Player1.DIR.DOWN );
            break;
        case cc.KEY.space:
            this.player1.run();
            this.player1.shootSaliva();
            break;
        }
    },
    
     onKeyUp: function( e ){
        switch( e ) {
        case cc.KEY.left:
            this.player1.setDirection( Player1.DIR.STILL );
            break;
        case cc.KEY.right:
            this.player1.setDirection( Player1.DIR.STILL );
            break;
        case cc.KEY.up:
            this.player1.setDirection( Player1.DIR.STILL );
            break;
        case cc.KEY.down:
            this.player1.setDirection( Player1.DIR.STILL );
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