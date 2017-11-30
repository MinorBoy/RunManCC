
cc.Class({
    extends: cc.Component,

    properties: {
    },

    reStart:function () {
        console.log('点击按钮：restart');        
        cc.director.loadScene("game");
    }

});
