
var Player = cc.Sprite.extend({

    ctor: function(x, y,num ,lifeBar) {
        this._super();
        this.initWithFile( 'res/images/s1.png'  );
        
        this.x = x;
        this.y = y;
        this.num = num;
        this.lifeBar = lifeBar;
        this.Life = 6;
        this.maxLife = 6;
        this.updatePosition();
        this.salivaList = [];
        this.checkGameEnd = false;
        this.direction = Player.DIR.STILL;
        if(this.checkGameEnd == false){
            this.anime = this.standAnimation();
            this.runAction(this.anime);
        };
    },
    setPlayer2: function( player2 ) {
        this.player2 = player2;
        this.salivaList2 = player2.getSaliva();
    },

    getSaliva: function( ) {
        return this.salivaList;
    },

    update: function( dt ) {
     if(this.checkGameEnd == false){
        if(this.num == 1)
           {
           // console.log("do1");
            this.movingArea1();
            }

        else
           {
          //  console.log("do2");
            this.movingArea2();
           } 
        }
    for(var i = 0; i<this.salivaList2.length ; i++){
        var saliva = this.salivaList2[i];
        var posP = this.getPosition();
        var posS = saliva.getPosition();
        // console.log(saliva.getNum() + " ooo " + this.num );
        if(saliva.getNum() != this.num){
            // console.log("ice");
            if((posP.x+30) >=  posS.x && (posP.x-30)  <= posS.x && (posP.y+30) >=  posS.y && (posP.y-30)  <= posS.y) {
                this.Life -= 1;
                //console.log(this.Life+" "+ this.num);
                this.lifeBar.hitted(this.Life,this.maxLife);
                saliva.hit();
                if(this.Life == 0)
                    {
                        this.endGame();
                        this.deadAction();
                        this.pauseSchedulerAndActions();
                    }
            }
        }
    }
    },

    movingArea1: function(){
        this.temp_x = 0;
        this.temp_y = 0;
            switch ( this.direction ) {
                case Player.DIR.UP:
                    this.temp_y += Player.MOVE_SPEED;
                    break;
                case Player.DIR.DOWN:
                    this.temp_y -= Player.MOVE_SPEED;
                    break;
                case Player.DIR.LEFT:
                    this.temp_x -= Player.MOVE_SPEED;
                    break;
                case Player.DIR.RIGHT:
                    this.temp_x += Player.MOVE_SPEED;
                    break;
        };
        if((this.temp_x + this.x) >= 40&& 
            (this.temp_x + this.x) <= 480 && 
            (this.temp_y + this.y) > 70 && 
            (this.temp_y + this.y) <= 520 ){
                this.x += this.temp_x;
                this.y += this.temp_y;
        } 
        this.updatePosition();
    },

    movingArea2: function(){
        this.temp_x = 0;
        this.temp_y = 0;
            switch ( this.direction ) {
                case Player.DIR.UP:
                    this.temp_y += Player.MOVE_SPEED;
                    break;
                case Player.DIR.DOWN:
                    this.temp_y -= Player.MOVE_SPEED;
                    break;
                case Player.DIR.LEFT:
                    this.temp_x -= Player.MOVE_SPEED;
                    break;
                case Player.DIR.RIGHT:
                    this.temp_x += Player.MOVE_SPEED;
                    break;
        };
        if((this.temp_x + this.x) < 1040 && 
            (this.temp_x + this.x) >= 590 && 
            (this.temp_y + this.y) > 70 && 
            (this.temp_y + this.y) <= 520 ){
                this.x += this.temp_x;
                this.y += this.temp_y;
        } 
        this.updatePosition();

    },

    standAnimation: function(){
        var standAnime = new cc.Animation.create();
        standAnime.setDelayPerUnit( 0.15 );
        standAnime.addSpriteFrameWithFile('res/images/s1.png' );
        standAnime.addSpriteFrameWithFile('res/images/s2.png' );
        standAnime.addSpriteFrameWithFile('res/images/s3.png' );
        return cc.RepeatForever.create( cc.Animate.create( standAnime ));
    },

    run: function() {
        if(this.checkGameEnd == false){
            this.anime = this.shootAnimation();
            this.runAction(this.anime);
         }
    },

    shootAnimation: function(){
        var shootAnime = new cc.Animation.create();
        shootAnime.setDelayPerUnit( 0.03 );
        shootAnime.addSpriteFrameWithFile('res/images/a1.png' );
        shootAnime.addSpriteFrameWithFile('res/images/a2.png' );
        shootAnime.addSpriteFrameWithFile('res/images/a3.png' );
        shootAnime.addSpriteFrameWithFile('res/images/a4.png' );
        shootAnime.addSpriteFrameWithFile('res/images/a5.png' );
        shootAnime.addSpriteFrameWithFile('res/images/a6.png' );
        return cc.Repeat.create( cc.Animate.create( shootAnime ),1);
    },

    setDirection: function( dir ) {
        this.direction = dir;
    },

    updatePosition: function() {
        this.setPosition( cc.p( this.x, this.y ) );
    },

    switchDirection: function() {
	if ( this.direction == Player.DIR.UP ) {
	    this.direction = Player.DIR.RIGHT;
	} else {
	    this.direction = Player.DIR.UP;
	}
    },

    deadAction: function() {
        this.initWithFile('res/images/dead.png' );
        this.setPositionY(this.getPositionY()+44);
        if(this.num == 1)
        {
            this.setFlippedX(true);
        }

    },

    endGame: function(){
        this.checkGameEnd = true;
        this.getParent().stopGamePlay();
    },

    shootSaliva:function(){
        if(this.checkGameEnd == false){
            var saliva = new Saliva(this.getPosition(),this.num);
            this.getParent().addChild(saliva);
            this.salivaList.push(saliva);
            if(this.num == 1)
                cc.AudioEngine.getInstance().playEffect("res/effect/shoot1.mp3");
            else
                cc.AudioEngine.getInstance().playEffect("res/effect/shoot2.mp3");
        }
     },

});
Player.MOVE_SPEED = 10; 
 Player.DIR = {
  	LEFT: 1,
    RIGHT: 2,
    UP: 3,
    DOWN: 4,
    STILL: 0
};
