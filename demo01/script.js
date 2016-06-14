window.onload = function () {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;

    /**
     * 左右切换函数
     * @param offset 左右的偏移量
     */
    function animate(offset) {
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';

        // 两个if语句实现了无限滚动
        if(newLeft > -600) {
            list.style.left = -3000 + 'px';
        }

        if(newLeft < -3000) {
            list.style.left = -600 + 'px';
        }
    }

    /**
     * 小圆点切换函数
     */
    function buttonsCtrl() {
        for(var i = 0;i < buttons.length;i++) {
            if(buttons[i].className == 'on') {
                buttons[i].className = '';
            }
        }
        buttons[index - 1].className = 'on';
    }


    // 左右切换的功能
    next.onclick = function () {
        if(index == 5) {
            index = 1;
        }else {
            index++;
        }
        buttonsCtrl();

        animate(-600);
    };

    prev.onclick = function () {
        if(index == 1) {
            index = 5;
        }else {
            index--;
        }
        buttonsCtrl();

        animate(600);
    };
};














