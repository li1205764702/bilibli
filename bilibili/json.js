let mindata = (function () {
    // let swiperWrapper = document.querySelector('.swiper-wrapper');
    let contentCard = document.querySelector('.recommend_content')
    let extension = document.querySelector('.extension_bottom')

    let gamea = document.querySelector('.game_bottom')
    // let lefta=document,querySelector('.left_content')
    let lefta = document.querySelector('.left_content')
    let button = document.querySelector('.change')
    let chioiceCard = document.querySelector('.choiceCard_live')
    let data = null;
    console.log(lefta);
    let startNum = 1
    let endNum = 9


    function getData() {
        // 获取数据
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest;
            xhr.open('get', './json/product.json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    data = JSON.parse(xhr.response);
                    resolve(data);
                }
            }
            xhr.send();
        })
    }
    // 渲染页面
    const render = function render(newdata) {
        let str = "";
        for (let i = 0; i < 6; i++) {
            let { pic, text, name, imga, ad } = newdata[i];
            str += `<div class="content_card">
            <a href="" class="image">
                <img src="${pic}" alt="">
            </a>
            <div class="card">
                <h3>
                ${text}
                </h3>
                <p class="upName">
                <img src="${imga}" alt="">
                ${name}
                </p>
            </div>
        </div>`;
        }
        contentCard.innerHTML = str;

    };

    const expand = function expand(newimg) {
        let str = "";
        for (let i = 6; i < 11; i++) {
            let { pic, text, name, imga, ad } = newimg[i];
            str += `<div class="extension_content">
            <a href="" class="image">
                <img src="${pic}" alt="">
            </a>
            <div class="extension_card">
                <h3>
                    <a href="">${text}</a>
                </h3>
                <p class="upName">
                <img src="${imga}" alt="">
                ${name}
                </p>
            </div>
            </div>`;
        }
        extension.innerHTML = str;

    };
    const game = function game(newgame) {
        let str = "";
        for (let i = 11; i < 16; i++) {
            let { pic, text, name, imga, ad } = newgame[i];
            str += `<div class="game_content">
            <a href="">
                <img src="${pic}" alt="">
            </a>
            <div class="game_card">
                <h3>
                <a href="">${text}
                
            </a>
                </h3>
                <p class="upName">
                <img src="${imga}" alt="">&nbsp;
                ${name}
                </p>
            </div>

        </div>`;
        }
        gamea.innerHTML = str;

    };
    const live = function live(newlive) {
        let str = "";
        for (let i = startNum; i < endNum; i++) {
            let { pic, text, name, imga, ad } = newlive[i];
            str += `<div class="live_content">
            <a href="#">
                <img src="${pic}" alt="">
            </a>
            <div class="live_card">
                <div>

                    <a href="#">
                        <img src="./image/轮播图图片/live.gif" alt="">
                        直播中
                    </a>
                    ${text}
                    </div>
                <p class="upName">
                    <img src="${imga}" alt="">
                    ${name}
                </p>
            </div>

        </div>`;
        }
        lefta.innerHTML = str;



    };
    const liveright = function liveright(newright) {
        let str = "";
        for (let i = 17; i < 23; i++) {
            let { pic, text, name, imga, ad } = newright[i];
            str += `<li class="live1">
            <span></span>
            <div class="live_box">
                <img src="${pic}" alt="" class="imgb">
                <div class="box_in">
                    <div class="box_top">
                        <img src="./image/轮播图图片/live.gif" alt="">
                        <span>${name}</span>
                    </div>
                    <div class="box_bottom">
                        <p>${text}</p>
                        <div>
                            <span class="iconfont"></span>
                            <span>${ad}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>`;
        }
        chioiceCard.innerHTML = str;
        const dsa = document.querySelectorAll(".live1")
        console.log(dsa);

    };
    console.log(button);

    // button.addEventListener('click', function () {
    //     
    // })
    button.onclick = function () {
        startNum = startNum + 3
        endNum = endNum + 3
        getData().then(resposne => {
            value = resposne
            console.log(value);
            live(value);
        })
        if (startNum > 7) {
            startNum = 1;
            endNum = 9;
        }

    };

    (async () => {
        let value = await getData();
        render(value);
        expand(value);
        game(value);
        live(value);
        liveright(value);
        // handle(value);

    })()
})()
