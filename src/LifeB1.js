var lifeM1 = 10;
var lifeP1 = lifeM1;


var Life1 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.sprite =  this.initWithFile('res/images/healthBar.png');
    },
    update: function( dt ) {
    	if(lifeP1 <= lifeM1 / 2 && lifeP1 >lifeM1 /3){
    		this.sprite = this.initWithFile('res/images/healthBar3.png');
    	}
    	else if(lifeP1 <= lifeM1/3 && lifeP1 > 0){
    		this.sprite = this.initWithFile('res/images/healthBar2.png');
    	}
    	else if(lifeP1 <= 0){
    		this.sprite = this.initWithFile('res/images/healthBar4.png');
    		
    	}
    },
    hitted: function() {
    	lifeP1 -=  1;
    	//console.log()
    }
    });