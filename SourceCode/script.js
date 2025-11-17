let $ = document

const button = $.querySelector("button")
const modalParent = $.querySelector(".modal-parent")
const x = $.querySelector(".X")
const sectionElem = $.querySelector("section")



function showModal() {
    modalParent.style.display = "block"
    sectionElem.style.filter = "blur(10px)" //  ویندو ما یکم تار میشه موقع باز شدن مودال
     button.blur() // روی دکمه ایونت بلور رخ میده و بوردر دور دکمه نمیمونه دیگه ، چون در حالت دیفالت میموند موقع کلیک
}

function hideModalWithX() {
    modalParent.style.display = "none"
    sectionElem.style.filter = "blur(0px)" // ویندو ما از تاری در میاد موقع بسته شدن مودال
}

function hideModalWithEsc(event) {

    //keycod esc = 27
    if (event.keyCode === 27) {
        modalParent.style.display = "none"
        sectionElem.style.filter = "blur(0px)"
    }
}




button.addEventListener("click", showModal) //برای نمایش مودال موقع کلیک روی دکمه
x.addEventListener("click", hideModalWithX) // برای بسته شدن مودال موقع کلیک روی ضربدر 
document.body.addEventListener("keyup", hideModalWithEsc) //برای بسته شدن مودال موقع فشردن دکمه esc