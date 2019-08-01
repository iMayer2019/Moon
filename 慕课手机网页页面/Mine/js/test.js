var setScreenAnimateElements = {

    '.screen-1': [
        '.screen-1__heading',
        '.screen-1__phone',
        '.screen-1__shadow',

    ]
}

function setScreenAnimate(screenCls) {

    var screen = document.querySelector(screenCls); //获取当前屏的元素
    var animateElements = setScreenAnimateElements[screenCls]; //需要设置动画的元素

    var isSetAnimateClass = false; //是否有初始化子元素的样式


    screen.onclick = function() {

        // 初始化样式，增加init
        if (isSetAnimateClass === false) {

            for (var i = 0; i < animateElements.length; i++)

                var element = document.querySelector(animateElements[i]);
            var baseCls = element
        }
        // 切换所有 animateElements 的 init -> done

        // 切换所有 animateElements 的 done -> init

    }
}