window.onload = function () {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var autoTimer = null;

    /**
     * 左右切换函数
     * @param offset 左右的偏移量
     */
    var offsetL = 0;
    function animate(offset) {
        var oldLeft = parseInt(list.style.left);
        var newLeft = oldLeft + offset;
        offsetL = oldLeft;
        var interval = null;
        var intervalNum = 10;

        //console.log('offsetL: ' + offsetL);
        //console.log('newLeft: ' + newLeft);

        // 向左切换动画
        if((offset > 0) && (offsetL < newLeft)) {
            //console.log('左');
            interval = setInterval(function () {
                offsetL += offset/(300/intervalNum); // 300为移动的总时间

                //console.log(offsetL);

                list.style.left = offsetL + 'px';

                if(offsetL == newLeft) {
                    clearInterval(interval);

                    // 两个if语句实现了无限滚动
                    if(newLeft > -600) {
                        list.style.left = -3000 + 'px';
                    }

                    if(newLeft < -3000) {
                        list.style.left = -600 + 'px';
                    }
                }
            }, intervalNum);
        }

        // 向右切换动画
        if((offset < 0) && (offsetL > newLeft)) {
            //console.log('右');
            interval = setInterval(function () {
                offsetL -= -offset/(300/intervalNum); // 300为移动的总时间

                //console.log(offsetL);

                list.style.left = offsetL + 'px';

                if(offsetL == newLeft) {
                    clearInterval(interval);
                    // 两个if语句实现了无限滚动
                    if(newLeft > -600) {
                        list.style.left = -3000 + 'px';
                    }

                    if(newLeft < -3000) {
                        list.style.left = -600 + 'px';
                    }
                }
            }, intervalNum);
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

    /**
     * 自动切换功能
     */
    function autoPlay() {
        autoTimer = setInterval(function () {
            next.onclick();
        }, 3000);
    }

    /**
     * 停止自动切换功能
     */
    function autoStop() {
        clearInterval(autoTimer);
    }

    // 自动切换
    autoPlay();
    container.onmouseover = autoStop;
    container.onmouseout = autoPlay;

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

    /**
     * 点击小圆点切换焦点图
     */
    for(var i = 0;i < buttons.length;i++) {
        buttons[i].onclick = function () {
            if(this.className == 'on') {
                return; // 后面的语句不会再执行了，一直到buttonCtrl()都不会再执行
            }
            var myIndex = this.getAttribute('index');
            var offset = -600 * (myIndex - index);
            animate(offset);

            // index 更新到最新
            index = myIndex;

            // 小圆点变成橙色
            buttonsCtrl();
        };
    }
};















