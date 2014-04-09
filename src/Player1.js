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
     if(!(this.x > 0 && this.x < 540 && this.y > 0 && this.y < 720)){
	    switch ( this.direction ) {
        case play1.DIR.UP:
            this.y -= play1.PUSH_BACK;
            break;
        case play1.DIR.DOWN:
            this.y += play1.PUSH_BACK;
            break;
        case play1.DIR.LEFT:
            this.x += play1.PUSH_BACK;
            break;
        case play1.DIR.RIGHT:
            this.x -= play1.PUSH_BACK;
            break;
        };
        this.updatePosition();
    }
    else{
        switch ( this.direction ) {
        case play1.DIR.UP:
            this.y += play1.MOVE_SPEED;
            break;
        case play1.DIR.DOWN:
            this.y -= play1.MOVE_SPEED;
            break;
        case play1.DIR.LEFT:
            this.x -= play1.MOVE_SPEED;
            break;
        case play1.DIR.RIGHT:
            this.x += play1.MOVE_SPEED;
            break;
        };
        this.updatePosition();
    }}

    },
    standAnimation: function(){
        var standAnime = new cc.Animation.create();
        standAnime.setDelayPerUnit( 0.15 );
        standAnime.addSpriteFrameWithFile('res/images/s1.png' );
        standAnime.addSpriteFrameWithFile('res/images/s2.png' );
        standAnime.addSpriteFrameWithFile('res/images/s3.png' );
        return cc.RepeatForever.create( cc.Animate.create( standAnime ));
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
