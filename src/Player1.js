var done = false;
var play1 = cc.Sprite.extend({
    ctor: function(x, y) {
        this._super();
        this.initWithFile( 'res/images/s1.png'  );
        this.setFlippedX(true);
        this.x = x;
        this.y = y;
        this.updatePosition();
        this.direction = play1.DIR.STILL;
        this.anime = this.standAnimation();
        this.runAction(this.anime);
    },
     update: function( dt ) {
     	//console.log(this);
     if(done == false){
        this.temp_x = 0;
        this.temp_y = 0;
        switch ( this.direction ) {
        case play1.DIR.UP:
            this.temp_y += play1.MOVE_SPEED;
            break;
        case play1.DIR.DOWN:
            this.temp_y -= play1.MOVE_SPEED;
            break;
        case play1.DIR.LEFT:
            this.temp_x -= play1.MOVE_SPEED;
            break;
        case play1.DIR.RIGHT:
            this.temp_x += play1.MOVE_SPEED;
            break;
        };
        if((this.temp_x + this.x) > 30 && (this.temp_x + this.x) < 500 && (this.temp_y + this.y > 30) && (this.temp_y + this.y) < 520 ){
            this.x += this.temp_x;
            this.y += this.temp_y;
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
        if(done == false){
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
	if ( this.direction == play1.DIR.UP ) {
	    this.direction = play1.DIR.RIGHT;
	} else {
	    this.direction = play1.DIR.UP;
	}
    },
     endGame: function(){
        done = true;
        this.stopAction(this.anime);
     },
     shoot:function(){
        if(done == false){
            this.saliva = new Saliva(this.getPosition());
            this.getParent().addChild(this.saliva);
        }
     }
});

play1.MOVE_SPEED = 10;
play1.PUSH_BACK = 100;
play1.DIR = {
  	LEFT: 1,
    RIGHT: 2,
    UP: 3,
    DOWN: 4,
    STILL: 0
};
