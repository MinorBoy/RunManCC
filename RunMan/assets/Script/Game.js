
cc.Class({
    extends: cc.Component,

    properties: {
        king:{
            default:null,
            type:cc.Node,
        }
    },

    // onLoad () {},

    onLoad () {
        let self = this;

        this.node.on('touchstart', function (event) {
            console.log('touchstart');
            
            let visibleSize = cc.director.getVisibleSize();
            if (event.getLocationX() < visibleSize.width/2) {
                self.king.getComponent('King').jumpDown();
            } else {
                self.king.getComponent('King').jumpUp();
            }
            
        });

        this.node.on('touchend', function (event) {
            console.log('touchend');
            
            let visibleSize = cc.director.getVisibleSize();
            if (event.getLocationX() < visibleSize.width/2) {
                self.king.getComponent('King').jumpRelease();
            } else {
                // self.king.getComponent('King').jumpUp();
            }
            
        });

    },

    // update (dt) {},
});
