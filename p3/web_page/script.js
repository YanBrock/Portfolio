//======================== Scroll ==================================>
let header =
{
    logo: document.querySelector(".logo_item"),
    
    logic: function()
    {
        const anchors = document.querySelectorAll("a[href*='#']");
        for(let anchor of anchors)
        {
            anchor.addEventListener("click", function(e)
            {
                e.preventDefault();

                const blockId = anchor.getAttribute("href").substr(1);

                document.getElementById(blockId).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
        };
    },
};
//======================== /Scroll ==================================>



//=================== Slider testimonials ===========================>
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector(".slider_container");
const track = document.querySelector(".slider_track");
const btnPrev = document.querySelector(".btn_prev");
const btnNext = document.querySelector(".btn_next");
const items = document.querySelectorAll(".slider_item");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => 
{
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", () =>
{
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener("click", () =>
{
    const itemsLeft = itemsCount - (Math.abs(position) / itemWidth);

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () =>
{
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () =>
{
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

console.log(items);
console.log(container);



window.onload = function()
{
    header.logic();
    offerForms.send();
};

//================== /Slider testimonials ===========================>

let offerForms =
{
    sendMessageBtn: document.querySelector(".send_message"),
    send: function()
    {
        this.sendMessageBtn.setAttribute("href", "#header");
    },
};