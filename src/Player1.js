var checkGameEnd = false;
var checkMove = false;
var Player1 = cc.Sprite.extend({

    ctor: function(x, y) {
        this._super();
        this.initWithFile( 'res/images/s1.png'  );
        this.setFlippedX(true);
        this.x = x;
        this.y = y;
        this.updatePosition();
        this.direction = Player1.DIR.STILL;
        this.anime = this.standAnimation();
        this.runAction(this.anime);
    },

     update: function( dt ) {
     if(checkGameEnd == false){
        this.temp_x = 0;
        this.temp_y = 0;
            switch ( this.direction ) {
                case Player1.DIR.UP:
                    this.temp_y += Player1.MOVE_SPEED;
                    break;
                case Player1.DIR.DOWN:
                    this.temp_y -= Player1.MOVE_SPEED;
                    break;
                case Player1.DIR.LEFT:
                    this.temp_x -= Player1.MOVE_SPEED;
                    break;
                case Player1.DIR.RIGHT:
                    this.temp_x += Player1.MOVE_SPEED;
                    break;
        };
        if((this.temp_x + this.x) > (30+(this.temp_y + this.y)/6) && 
            (this.temp_x + this.x) <= 500 && 
            (this.temp_y + this.y) > 50 && 
            (this.temp_y + this.y) <= 520 ){
                this.x += this.temp_x;
                this.y += this.temp_y;
        } 
        else if(this.x < 500 && this.y < 510){
            this.x += 1;
            this.y += 6;
        }
        this.updatePosition();
    }},

    standAnimation: function(){
        var standAnime = new cc.Animation.create();
        standAnime.setDelayPerUnit( 0.15 );
        standAnime.addSpriteFrameWithFile('res/images/s1.png' );
        standAnime.addSpriteFrameWithFile('res/images/s2.png' );
        standAnime.addSpriteFrameWithFile('res/images/s3.png' );
        return cc.RepeatForever.create( cc.Animate.create( standAnime ));
    },

    run: function() {
        if(checkGameEnd == false){
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
	if ( this.direction == Player1.DIR.UP ) {
	    this.direction = Player1.DIR.RIGHT;
	} else {
	    this.direction = Player1.DIR.UP;
	}
    },

    endGame: function(){
        checkGameEnd = true;
        this.stopAction(this.anime);
     },

     shootSaliva:function(){
        if(checkGameEnd == false){
            this.saliva = new Saliva(this.getPosition());
            this.getParent().addChild(this.saliva);
        }
     }

});
 Player1.MOVE_SPEED = 10; Player1.PUSH_BACK = 100; Player1.DIR = {
  	LEFT: 1,
    RIGHT: 2,
    UP: 3,
    DOWN: 4,
    STILL: 0
};
