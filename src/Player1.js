var play1 = cc.Sprite.extend({
    ctor: function(x, y) {
        this._super();
        this.initWithFile( 'res/images/Model1.png' );
        this.x = x;
        this.y = y;
        this.updatePosition();
        this.direction = play1.DIR.STILL;
        

    },
     update: function( dt ) {
     	//console.log(this);
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
    }
});

play1.MOVE_SPEED = 10;

play1.DIR = {
  	LEFT: 1,
    RIGHT: 2,
    UP: 3,
    DOWN: 4,
    STILL: 0
};
