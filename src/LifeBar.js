
var LifeBar = cc.Sprite.extend({
    ctor: function(num) {
        this._super();
        this.sprite =  this.initWithFile('res/images/health.png');
        this.num = num;
    },


    update: function( dt ) {
    	if(this.lifeP == 5){
    		this.sprite = this.initWithFile('res/images/health2.png');
    	}
    	else if(this.lifeP == 4){
    		this.sprite = this.initWithFile('res/images/health3.png');
    	}
    	else if(this.lifeP == 3){
    		this.sprite = this.initWithFile('res/images/health4.png');
    	}
        else if(this.lifeP == 2){
            this.sprite = this.initWithFile('res/images/health5.png');
        }
        else if(this.lifeP == 1){
            this.sprite = this.initWithFile('res/images/health6.png');
        }
        else if(this.lifeP == 0){
            this.sprite = this.initWithFile('res/images/health7.png');
        }

        if(this.num == 2)
            this.setFlippedX(true);
        
    },
    hitted: function( life , maxlife ) {
    	this.lifeP = life;
        this.lifeM = maxlife;
    }
    });