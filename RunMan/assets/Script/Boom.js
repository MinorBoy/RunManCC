cc.Class({
    extends: cc.Component,

    properties: {
        king:{
            default:null,
            type:cc.Node,
        },
        voiceLose:{
            default: null,
            url: cc.AudioClip,
        }
    },

    // onLoad () {},

    judgeJump:function () {
        let self = this;
        console.log('跳跃判断');
        if (self.king.getComponent('King').state == 'jump') {
            console.log('jump*********************************');
        }else{
            cc.director.loadScene('over');
        }
    },

    judgeDown:function () {
        let self = this;
        console.log('下蹲判断');
        if (self.king.getComponent('King').state == 'down') {
            console.log('down*********************************');
        } else {
            // cc.audioEngine.stopAll();
            this.current = cc.audioEngine.play(self.voiceLose, false, 1);
            cc.director.loadScene('over');
        }
    },

    onLoad () {
        this.schedule(function () {
            if (Math.random() > 0.5) {
                console.log('create a boom low .........');
                
                this.getComponent(cc.Animation).play('boom_low');
            }else{
                console.log('create a boom hight .........');
                this.getComponent(cc.Animation).play('boom_hight');
            }
        }, 3);
    },

    // update (dt) {},
});
