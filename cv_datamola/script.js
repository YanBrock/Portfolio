let avatarHeight = 200;
let prevHeight = 100;
const mainElement = document.documentElement;
const allowWindowHeigt = mainElement.clientHeight;

const avatarsAppear = document.querySelector(".presentation .avatar").classList.add("-active");
const name = document.querySelector(".presentation .name").classList.add("-active");
const email = document.querySelector(".presentation .email").classList.add("-active");
const phone = document.querySelector(".presentation .phone").classList.add("-active");




// console.log(allowWindowHeigt);

// window.onscroll = function () {
// let avatarCoords = avatar.getBoundingClientRect();
// let avatarOffsetTop = avatar.offsetTop;

// if (avatar.clientHeight < allowWindowHeigt) {
// 	avatar.style.transform = `translateY(${window.scrollY}px)`;
// 	avatar.style.height = (avatarHeight + window.scrollY) + "px";
// 	prev.style.height = (prevHeight + (window.scrollY / 10)) + "vh";
// 	avatar.classList.add("expand");
// }

// console.log(avatarCoords.top);
// console.log(avatarCoords.bottom);
// console.log(window.scrollY);
// console.log(avatarOffsetTop);
// }

let lastScroll = 0;

window.onscroll = function () {
	const avatar = document.querySelector(".avatar");
	const prev = document.querySelector(".presentation");

	let avatarRect = avatar.getBoundingClientRect()

	let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

	console.log(currentScroll);

	if (currentScroll > 0 && lastScroll <= currentScroll) {
		if (avatar.clientHeight <= allowWindowHeigt) {
			avatar.style.transform = `translateY(${currentScroll}px)`;
			avatar.style.height = (avatarHeight + currentScroll) + "px";
			prev.style.height = (prevHeight + (currentScroll / 10)) + "vh";

			lastScroll = currentScroll;
			console.log("Scrolling DOWN");

			console.log(avatar.clientHeight);
		}
	} else {
		avatar.style.transform = `translateY(${currentScroll}px)`;
		avatar.style.height = (avatarHeight + currentScroll) + "px";
		prev.style.height = (prevHeight + (currentScroll / 10)) + "vh";

		lastScroll = currentScroll;
		console.log("Scrolling UP");

		console.log(prev.clientHeight);
		console.log(avatarRect.bottom);
	}
};





//? offsetHeight - высота элемента (с рамками и внутренними отступами)
//? clientHeight - высота элемента без рамки (минус рамки со сторон и скролл)
//? scrillHeight - полный размер контента элемента (внутренний, который скролится)
//? scrollTop - показывает количество прокрученных пикселей (можно задавать значения)



//? clientTop - отступ от внешней границы до внутренней границы элемента (ширина рамки)
