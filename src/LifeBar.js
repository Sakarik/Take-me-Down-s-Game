
var LifeBar = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.sprite =  this.initWithFile('res/images/healthBar.png');
    },


    update: function( dt ) {
    	if(this.lifeP == 4){
    		this.sprite = this.initWithFile('res/images/healthBar3.png');
    	}
    	else if(this.lifeP == 2){
    		this.sprite = this.initWithFile('res/images/healthBar2.png');
    	}
    	else if(this.lifeP == 0){
    		this.sprite = this.initWithFile('res/images/healthBar4.png');
    	}
    },
    hitted: function( life , maxlife ) {
    	this.lifeP = life;
        this.lifeM = maxlife;
    }
    });