
// document.addEventListener('scroll',function(e){
//     let barid = document.getElementById("barid");
//     if(window.scrollY+1){

//         barid.removeClass("barcomeup");
//         barid.classList.add("bargodown");

//     } else if(window.scrollY-1){

//         barid.removeClass("bargodown");
//         barid.classList.add("barcomeup");
//     }
// });

//建立一個變數
let lastScrollTop =0;

//開始滑鼠的判斷
    $(window).scroll(function(e){
        //在功能裡建立一個不會流出去的變數叫st = 這個身體的滾動
        let st = $(this).scrollTop();
        //如果 變數 不大過於 本身滾動的Y
        if(st < lastScrollTop) {

            //就會進行這裡的判讀。
            console.log('123')
            $('#barid').removeClass('barcomeup');
            $('#barid').addClass('bargodown');


        }else {
            //反之
            console.log('321');
            $('#barid').removeClass('bargodown');
            $('#barid').addClass('barcomeup');

            
        }
        //這是關鍵 ， 在程式的最後，進行賦予變數。
        //現在滑鼠的值等於變數
        lastScrollTop = st;
        //這意味什麼？
        //每一次滑鼠的定位都會賜予變數，例如我今天滑到了300px，然後我就給 lastScrollTop = 300px
        //每一次判斷，lastScrollTop雖然被賜予值，
        //但是都不會比st來的大呀，就會實現第一個狀況
        //反之，今天我往上滑，st本身就會變小，當進入判斷時，st比lastScrollTop還要小，就會直接進入 else的判斷。
    });


    //if($(this).scrollTop()<-1)