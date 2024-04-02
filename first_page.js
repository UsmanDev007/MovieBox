// buttons for trending movies
const action=document.querySelector('#mov_cat_btn1');
const film_img=document.querySelector('.card-img-top');
const film_title=document.querySelector('.card-title');
const Trends_mov_con=document.querySelector('#Trends');
const card_img1=document.querySelector('#action1');
const card_img2=document.querySelector('#action2');
const card_img3=document.querySelector('#action3');
const card_img4=document.querySelector('#action4');
const mov_title1=document.querySelector('#movie_title1');
const mov_title2=document.querySelector('#movie_title2');
const mov_title3=document.querySelector('#movie_title3');
const mov_title4=document.querySelector('#movie_title4');

action.addEventListener('click',()=>{
    action.style.backgroundColor = "Black";
    adventure.style.backgroundColor = "Red";
    Animation.style.backgroundColor = "Red";
    Romantic.style.backgroundColor = "Red";
    card_img1.src='/img/thor love of thunder.jpg';
    card_img2.src='/hbp/99.jpg';
    card_img3.src='/hbp/along-with-the-gods.jpg';
    card_img4.src='/img/ant man.jpg';
    mov_title1.innerHTML='Thor Love of Thunder';
    mov_title2.innerHTML='Broken Nine';
    mov_title3.innerHTML='Along With Gods';
    mov_title4.innerHTML='Ant Nine';
})
const adventure=document.querySelector('#mov_cat_btn2');
adventure.addEventListener('click',()=>{
    adventure.style.backgroundColor = "Black";
    Animation.style.backgroundColor = "Red";
    action.style.backgroundColor = "Red";
    Romantic.style.backgroundColor = "Red";
    thriller.style.backgroundColor = "Red";
    card_img1.src='/hbp/chaos-wlaking.jpg';
    card_img2.src='/img/race_to_witch_mountain.jpg';
    card_img3.src='/img/Archore.jpg';
    card_img4.src='/img/Rampage_poster_one-sheet.jpg';
    mov_title1.innerHTML='Chaos Walking';
    mov_title2.innerHTML='Race To Witch';
    mov_title3.innerHTML='Archore';
    mov_title4.innerHTML='Rampage';
})
const thriller=document.querySelector('#mov_cat_btn3');
thriller.addEventListener('click',()=>{
    adventure.style.backgroundColor = "Red";
    action.style.backgroundColor = "Red";
    Romantic.style.backgroundColor = "Red";
    thriller.style.backgroundColor = "Black";
    Animation.style.backgroundColor = "Red";
    card_img1.src='/hbp/ghoul.jpg';
    card_img2.src='/images/The Calling.png';
    card_img3.src='/images/Conjuring.jpg';
    card_img4.src='/images/the-conjuring-2.jpg';
    mov_title1.innerHTML='Ghoul';
    mov_title2.innerHTML='The Calling';
    mov_title3.innerHTML='Conjuring';
    mov_title4.innerHTML='The Conjuring 2';
})
const Romantic=document.querySelector("#mov_cat_btn4");
Romantic.addEventListener('click',()=>{
    adventure.style.backgroundColor = "Red";
    action.style.backgroundColor = "Red";
    thriller.style.backgroundColor = "Red";
    Animation.style.backgroundColor = "Red";
    Romantic.style.backgroundColor = "Black";
    card_img1.src='/hbp/Get_Out.jpeg';
    card_img2.src='/hbp/little things.jpg';
    card_img3.src='/hbp/lukka.jpg';
    card_img4.src='/hbp/mismatched.jpg';
    mov_title1.innerHTML='Get Out';
    mov_title2.innerHTML='Little Things';
    mov_title3.innerHTML='Lukka Chuppi';
    mov_title4.innerHTML='Missmatched';
})
const Animation=document.querySelector("#mov_cat_btn5");
Animation.addEventListener('click',()=>{
    adventure.style.backgroundColor = "Red";
    action.style.backgroundColor = "Red";
    thriller.style.backgroundColor = "Red";
    Romantic.style.backgroundColor = "Red";
    Animation.style.backgroundColor = "Black";
    card_img1.src='/hbp/naruto.jpg';
    card_img2.src='/hbp/nemo.jpg';
    card_img3.src='/hbp/one-punch-man.jpg';
    card_img4.src='/hbp/Onward_IanBarley-1-702x1024.jpg';
    mov_title1.innerHTML='Naruto';
    mov_title2.innerHTML='Nemo';
    mov_title3.innerHTML='One Punch Man';
    mov_title4.innerHTML='Onwards';
})

// Download
const fileinput='http://127.0.0.1:5500/Movies/SPIDER-MAN_%20NO%20WAY%20HOME%20-%20Official%20Trailer%20(HD).mp4';
const download=document.querySelector("#mov_cat_btn_dow");
download.addEventListener("click",e=>{
   e.preventDefault();
    fetchFile(fileinput)
    download.innerText='Downloaing..';
})
function fetchFile(url){
    fetch(url).then(res=>res.blob()).then(fileinput=>{
        let tempUrl=URL.createObjectURL(fileinput);
        let aTag=document.createElement("a");
        aTag.href=tempUrl;
        aTag.download='Movie';
        document.body.appendChild(aTag);
       aTag.click();
       aTag.remove();
       download.innerText='Download';
    }).catch(()=>{
        download.innerText='Download';
        alert('Failed to Download Try Again')
    })
}

