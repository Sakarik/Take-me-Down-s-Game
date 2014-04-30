var Saliva = cc.Sprite.extend({
   	ctor: function(position,num) {
   		this._super();
        this.initWithFile( 'res/images/saliva.png'  );
        this.setPosition(position); 
        this.num = num;
        if(this.num == 2)
            this.setFlippedX(true);
       
        this.scheduleUpdate();
    },

    getNum: function() {
        return this.num;
    },

    update: function( dt ) {
        if(this.num == 1)
    	   this.setPositionX(this.getPositionX()+15); 
        else
            this.setPositionX(this.getPositionX()-15);   

        if(this.getPositionX() >= 1080 || this.getPositionX() <= 0){
            this.getParent().removeChild(this);
        }
    },

    hit : function(){
        this.setPosition(1000,1000);
        this.removeFromParent(true);
    },

 });