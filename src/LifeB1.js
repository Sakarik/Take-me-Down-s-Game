
var Life1 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.lifeM = 10;
        this.lifeP = 10;
        this.sprite =  this.initWithFile('res/images/healthBar.png');
    },


    update: function( dt ) {
    	if(this.lifeP <= this.lifeM / 2 && this.lifeP > this.lifeM / 3){
    		this.sprite = this.initWithFile('res/images/healthBar3.png');
    	}
    	else if(this.lifeP <= this.lifeM / 3 && this.lifeP > 0){
    		this.sprite = this.initWithFile('res/images/healthBar2.png');
    	}
    	else if(this.lifeP <= 0){
    		this.sprite = this.initWithFile('res/images/healthBar4.png');
    	}
    },
    hitted: function( live , maxlive ) {
    	this.lifeP = live;
        this.lifeM = maxlive;
        console.log(live +"fucnm");
    }
    });