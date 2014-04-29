var labelNumber = null;
var number = 3;
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
        
        this.player1 = new Player(200,360,1);
        this.player1.setPosition( new cc.Point( 200, 360 ) );
        this.player1.setFlippedX(true);
        this.addChild( this.player1 );

        this.player2 = new Player(880,360,2);
        this.player2.setPosition( new cc.Point( 880, 360 ) );
        this.addChild( this.player2 );

        this.lifeB1 = new Life1(100,640);
        this.lifeB1.setPosition( new cc.Point( 180, 640 ) );
        this.addChild( this.lifeB1 );

        this.lifeB2 = new Life1(900,640);
        this.lifeB2.setPosition( new cc.Point( 900, 640 ) );
        this.addChild( this.lifeB2 );
        
        this.setKeyboardEnabled( true );
        this.player1.scheduleUpdate();
        this.player2.scheduleUpdate();
        this.lifeB1.scheduleUpdate();
        this.lifeB2.scheduleUpdate();
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
         if(number == -1){
            this.player1.endGame();
            this.player2.endGame();
         }
         //console.log(number);
    },

     onKeyDown: function( e ) {
        if (e == cc.KEY.a)
            this.player1.setDirection( Player.DIR.LEFT );
        else if (e == cc.KEY.d)
            this.player1.setDirection( Player.DIR.RIGHT );
        else if (e == cc.KEY.w)
            this.player1.setDirection( Player.DIR.UP );
        else if (e == cc.KEY.s)
            this.player1.setDirection( Player.DIR.DOWN );
        else if (e == cc.KEY.f){
            this.player1.run();
            this.player1.shootSaliva();
        };
        if (e == cc.KEY.left){
            //console.log(e);
            this.player2.setDirection( Player.DIR.LEFT );
        }else if (e == cc.KEY.right)
            {//console.log(e);
            this.player2.setDirection( Player.DIR.RIGHT );
        }else if (e == cc.KEY.up){
            {//console.log(e);
            this.player2.setDirection( Player.DIR.UP );}
        }else if (e == cc.KEY.down){
            //console.log(e);
            this.player2.setDirection( Player.DIR.DOWN );
        }
        else if (e == cc.KEY.space){
            //console.log(e);
            this.player2.run();
            this.player2.shootSaliva();
        };
    },
    
     onKeyUp: function( e ){
        if (e == cc.KEY.a)
            this.player1.setDirection( Player.DIR.STILL );
        else if (e == cc.KEY.d)
            this.player1.setDirection( Player.DIR.SILL );
        else if (e == cc.KEY.w)
            this.player1.setDirection( Player.DIR.STILL );
        else if (e == cc.KEY.s)
            this.player1.setDirection( Player.DIR.STILL );
        if (e == cc.KEY.left)
            this.player2.setDirection( Player.DIR.STILL );
        else if (e == cc.KEY.right)
            this.player2.setDirection( Player.DIR.STILL );
        else if (e == cc.KEY.up)
            this.player2.setDirection( Player.DIR.STILL );
        else if (e == cc.KEY.down)
            this.player2.setDirection( Player.DIR.STILL );
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