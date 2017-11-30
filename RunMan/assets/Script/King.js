
cc.Class({
    extends: cc.Component,

    properties: {
        jumpHight:0,  //跳跃高度
        jumpDelay:0,  //跳跃时长
        scaleNumber:0,//下蹲缩放值
        state:'run'   //状态
    },

    // 跳跃
    jumpUp:function () {
        console.log('跳跃');
        if (this.state == 'run') {
            this.state = 'jump';
            this.getComponent(cc.Animation).stop();
            this.node.runAction(
                cc.sequence(
                    cc.jumpBy(this.jumpDelay, cc.p(0,0), this.jumpHight, 1),
                    cc.callFunc(function () {
                        console.log('跳完了');
                        
                        this.run();
            }, this)));
        }
    },

    // 下蹲
    jumpDown:function () {
        console.log('下蹲');
        if (this.state == 'run') {
            this.state = 'down';
            this.node.runAction(cc.scaleTo(this.jumpDelay, this.scaleNumber));
            
        }
    },

    // 奔跑
    run:function () {
        console.log('奔跑');
        this.state = 'run';
        this.node.getComponent(cc.Animation).play('king');
        
    },
    // 恢复奔跑
    jumpRelease:function () {
        console.log('恢复奔跑');
        if (this.state != 'run') {
            this.state = 'run';
            if (this.node.scale != 1) {
                this.node.runAction(cc.scaleTo(this.jumpDelay, 1));
            }
            this.getComponent(cc.Animation).play('king');
        }
    },


    start () {

    },

    // update (dt) {},
});
