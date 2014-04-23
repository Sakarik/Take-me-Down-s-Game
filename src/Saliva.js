var Saliva = cc.Sprite.extend({
   	ctor: function(position) {
   		this._super();
        this.initWithFile( 'res/images/saliva.png'  );
        this.setPosition(position);
        this.scheduleUpdate();
    },

    update: function( dt ) {
    	this.setPositionX(this.getPositionX()+10); 
        if(this.getPositionX() == 1080){
            this.getParent().removeChild(this);
        }
    }

 });