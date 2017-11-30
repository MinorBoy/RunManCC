
cc.Class({
    extends: cc.Component,

    properties: {
        king:{
            default: null,
            type: cc.Node,
        },
        voiceJump:{
            default: null,
            url: cc.AudioClip,
        },
        voiceDown:{
            default: null,
            url: cc.AudioClip,
        },
        musicGame:{
            default: null,
            url: cc.AudioClip,
        }
    },

    // onLoad () {},

    onLoad () {
        let self = this;
        
        this.musicGame = cc.audioEngine.play(self.musicGame, true);
        cc.audioEngine.setMaxAudioInstance(1);
        cc.audioEngine.setVolume(this.musicGame, 0.5);            

        this.node.on('touchstart', function (event) {
            console.log('touchstart');
            
            let visibleSize = cc.director.getVisibleSize();
            if (event.getLocationX() < visibleSize.width/2) {
                this.current = cc.audioEngine.play(self.voiceDown, false, 1);
                self.king.getComponent('King').jumpDown();
            } else {
                this.current = cc.audioEngine.play(self.voiceJump, false, 1);
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
