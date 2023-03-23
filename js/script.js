let z = [...document.querySelectorAll('.button__choose')];
z.forEach(function (item) {
    item.addEventListener('click', function () {
        let c = item.dataset.chapter;
    
        z.forEach(element => element.style.color = '#d0d0d0');
        let buttonsArr = document.querySelectorAll(`.button__choose[data-chapter="${c}"]`)[0];
        buttonsArr.style.color = '#fff';
        
        let toggleArr = document.querySelectorAll(`.textBlock`);
        toggleArr.forEach(element => element.classList.add('hidden'));
        document.querySelectorAll('.projectExamples').forEach(el => el.classList.add('hidden'));
        let toggle = document.querySelectorAll(`.textBlock[data-chapter="${c}"]`)[0];
        toggle.classList.remove('hidden');

    })
})

const prt = [...document.querySelectorAll('.portfolio__block')];
prt.forEach(function (item) {
    item.addEventListener('click', function () {
        const attr = this.getAttribute('data-project');
        let toggleArr = document.querySelectorAll(`.textBlock`);
        toggleArr.forEach(element => element.classList.add('hidden'));
        document.querySelectorAll('.projectExamples').forEach(el => el.classList.add('hidden'));
        document.querySelector(`.${attr}`).classList.remove('hidden');
    })
})

//carousel top
const imgs = [...document.querySelectorAll('.photoHead img')];

imgs.forEach(function (item) {
    item.addEventListener('click', function () {
        let currentSrc = this.getAttribute('src');
        var root = this.closest('.photoHead');
        var srcArr = [...root.querySelectorAll('img')].map(i => i.getAttribute('src'));
        document.querySelectorAll('.carousel-item').forEach(el => el.remove());
        srcArr=srcArr.reverse();
        srcArr.forEach((src) => {
            const wrap = document.createElement('div');
            wrap.innerHTML = `<img src="${src}" class="d-block">`;
            wrap.classList.add('carousel-item');
            if (src === currentSrc) {
                wrap.classList.add('active');
            }
            document.querySelector('.carousel-inner').prepend(wrap);
        });

        document.querySelector('.fullscreenCW').classList.remove('hidden');
    })
})

let buttonClose = document.querySelector('.btn-close');
buttonClose.addEventListener('click',function(){
    document.querySelector('.fullscreenCW').classList.add('hidden'); 
})

//carousel bottom