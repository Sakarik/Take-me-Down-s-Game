var labelNumber = null;
var number = 60;
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

        this.lifeBar1 = new LifeBar(100,640);
        this.lifeBar1.setPosition( new cc.Point( 180, 640 ) );
        this.addChild(this.lifeBar1);

        this.lifeBar2 = new LifeBar(900,640);
        this.lifeBar2.setPosition( new cc.Point( 900, 640 ) );
        this.addChild(this.lifeBar2);

        this.player1 = new Player(200,360,1,this.lifeBar1);
        this.player1.setPosition( new cc.Point( 200, 360 ) );
        this.player1.setFlippedX(true);
        this.addChild( this.player1 );

        this.player2 = new Player(880,360,2,this.lifeBar2);
        this.player2.setPosition( new cc.Point( 880, 360 ) );
        this.addChild( this.player2 );

        this.player1.setPlayer2(this.player2);
        this.player2.setPlayer2(this.player1);        


        this.setKeyboardEnabled( true );
        this.player1.scheduleUpdate();
        this.player2.scheduleUpdate();
        this.lifeBar1.scheduleUpdate();
        this.lifeBar2.scheduleUpdate();
        this.schedule(this.updateTimer, 1);
        this.schedule(this.shoot, 0.2);
        this.schedule(this.update);

        return true;
    },

    update : function(){
        this.moveDirection();
    },

    updateTimer:function() {
        number--;
        if(number >= 0){
        if(this.labelNumber == null)
             return;
         this.labelNumber.setString(number);}
         if(number == -1){
            this.player1.endGame();
            this.player2.endGame();
            this.stopGamePlay();
         }
    },

    checkPressButton: function(){
        this.pressF = false;
        this.pressAlt = false;
    },

     onKeyDown: function( e ) {
        if (e == cc.KEY.a)
            this.player1.setDirection( Player.DIR.LEFT );
        if (e == cc.KEY.d)
            this.player1.setDirection( Player.DIR.RIGHT );
        if (e == cc.KEY.w)
            this.player1.setDirection( Player.DIR.UP );
        if (e == cc.KEY.s)
            this.player1.setDirection( Player.DIR.DOWN );
        if (e == 224){
            this.pressF = true;
        };
        if (e == cc.KEY.left){
            this.player2.setDirection( Player.DIR.LEFT );
        }
        if (e == cc.KEY.right){
            this.player2.setDirection( Player.DIR.RIGHT );
        }
        if (e == cc.KEY.up){
            this.player2.setDirection( Player.DIR.UP );
        }
        if (e == cc.KEY.down){
            this.player2.setDirection( Player.DIR.DOWN );
        }
        if (e == 18){
            this.pressAlt = true;
        };
    },
    
     onKeyUp: function( e ){
        if (e == cc.KEY.a)
            this.player1.setDirection( Player.DIR.STILL );
        if (e == cc.KEY.d)
            this.player1.setDirection( Player.DIR.SILL );
        if (e == cc.KEY.w)
            this.player1.setDirection( Player.DIR.STILL );
        if (e == cc.KEY.s)
            this.player1.setDirection( Player.DIR.STILL );
        if (e == cc.KEY.left)
            this.player2.setDirection( Player.DIR.STILL );
        if (e == cc.KEY.right)
            this.player2.setDirection( Player.DIR.STILL );
        if (e == cc.KEY.up)
            this.player2.setDirection( Player.DIR.STILL );
        if (e == cc.KEY.down)
            this.player2.setDirection( Player.DIR.STILL );
     },

     shoot: function() {
        if(this.pressF){
            this.player1.run();
            this.player1.shootSaliva();
        }
        if(this.pressAlt){
            this.player2.run();
            this.player2.shootSaliva();
        }
        this.checkPressButton();
     },

     moveDirection: function(){
        if (this.pressA)
            this.player1.setDirection( Player.DIR.LEFT );
        if (this.pressD)
            this.player1.setDirection( Player.DIR.RIGHT );
        if (this.pressW)
            this.player1.setDirection( Player.DIR.UP );
        if (this.pressS)
            this.player1.setDirection( Player.DIR.DOWN );

        if (this.pressLeft)
            this.player2.setDirection( Player.DIR.LEFT );
        if (this.pressRight)
            this.player2.setDirection( Player.DIR.RIGHT );
        if (this.pressUp)
            this.player2.setDirection( Player.DIR.UP );
        if (this.pressDown)
            this.player2.setDirection( Player.DIR.DOWN );
     },

     stopGamePlay: function(){
        this.pauseSchedulerAndActions();
        this.setKeyboardEnabled( false );
        this.black = cc.Sprite.create( 'res/images/blackScreen.png' );
        this.black.setPosition( new cc.Point( 540, 360 ) );
        this.black.setScale(8,8);
        this.black.setOpacity(90);
        this.addChild( this.black);

        if(this.player1.Life > this.player2.Life)
             this.result = cc.Sprite.create( 'res/images/wl.png' );
        else if (this.player1.Life < this.player2.Life)
            this.result = cc.Sprite.create( 'res/images/lw.png' );
        else
            this.result = cc.Sprite.create( 'res/images/draw.png' );
        this.result.setPosition( new cc.Point( 558, 300 ) );
        this.result.setScale(2,2);
        this.addChild( this.result);

        console.log(this.player1.Life);
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