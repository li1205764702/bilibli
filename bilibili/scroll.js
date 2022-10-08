(function () {
    let html = document.documentElement || document.body;
    const nav1 = document.querySelector('.nav1')
    console.log(nav1);
    const Top=document.querySelector('.Top')

    window.onscroll = function () {
        if (html.scrollTop > 167) {
           Top.style.opacity='1'
            nav1.style.position = 'fixed';
            nav.style.transition='all 0.5s'
           
           
        } else {
            Top.style.opacity='0'
            nav1.style.position = 'relative';
            
            
        }
    }
    // 回到顶部
    Top.onclick = function () {
        document.documentElement.scrollTop = 0;
    }

})()
