let avatarHeight = 200;
let prevHeight = 100;

const mainElement = document.documentElement;
const allowWindowHeigt = mainElement.clientHeight;

const avatarsAppear = document.querySelector(".presentation .avatar").classList.add("active");
const name = document.querySelector(".presentation_info .name").classList.add("active");
const email = document.querySelector(".presentation_info .email").classList.add("active");
const phone = document.querySelector(".presentation_info .phone").classList.add("active");
const animItems = document.querySelectorAll(".experience_card");

let lastScroll = 0;

window.onscroll = function () {
	const avatar = document.querySelector(".avatar");
	const prev = document.querySelector(".presentation");

	let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

	if (currentScroll > 0 && lastScroll <= currentScroll) {
		if (avatar.clientHeight <= allowWindowHeigt) {
			avatar.style.transform = `translateY(${currentScroll}px)`;
			avatar.style.height = (avatarHeight + currentScroll) + "px";
			prev.style.height = (prevHeight + (currentScroll / 10)) + "vh";

			lastScroll = currentScroll;
		}
	} else {
		avatar.style.transform = `translateY(${currentScroll}px)`;
		avatar.style.height = (avatarHeight + currentScroll) + "px";
		prev.style.height = (prevHeight + (currentScroll / 10)) + "vh";

		lastScroll = currentScroll;
	}

	if(animItems.length > 0) {
		animOnScroll()
	}
};

function animOnScroll() {
	for(let i = 0; i < animItems.length; i++) {
		const animItem = animItems[i];
		const animItemHeight = animItem.clientHeight;
		const animItemOffset = Math.floor(offset(animItem).top);
		let animStart = 4;		

		let animItemPoint = Math.floor(window.innerHeight - animItemHeight / animStart);
		if(animItemHeight > window.innerHeight) {
			animItemPoint = Math.floor(window.innerHeight - window.innerHeight / animStart);
		}

		if((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
			animItem.classList.add("anim");
		} else {
			if(!animItem.classList.contains("anim_no_hide")) {
				animItem.classList.remove("anim");
			}			
		}
	}
}

function offset(el) {
	const rect = el.getBoundingClientRect(),
	scrollTop = window.scrollY || document.documentElement.scrollTop;
	return {top: rect.top + scrollTop}
}