// Не работает
// const inst = () => {
// 	const phone = document.querySelector('.intro__phone');
// 	const fronInst = document.querySelector('.intro__inst-1');
// 	const backInst = document.querySelector('.intro__inst-2');
//
// 	const randomSide = () => {
// 		const sides = ['top', 'left', 'bottom', 'right'];
// 		return sides[Math.floor(Math.random() * (3 + 1))];
// 	};
// 	phone.addEventListener('mousemove', (e) => {
// 		// backInst.style.zIndex = '1';
// 		// fronInst.classList.remove('_unactive');
// 		// backInst.classList.remove('_unactive');
// 		// const pos = e.target;
// 		// let X = e.pageX - pos.clientX,
// 		// 	Y = e.pageY - pos.clientY,
// 		// 	V = Y - e.pageY,
// 		// 	H = X - e.pageX;
// 		// V = V > 0 ? 'up: ' + e.pageY + '/' + V : 'down: ' + e.pageY + '/' + V;
// 		// H = H < 0 ? 'right: ' + e.pageX + '/' + H : 'left: ' + e.pageX + '/' + H;
// 		// Y = e.pageY;
// 		// X = e.pageX;
// 		// // console.log(X, Y);
//
// 		setTimeout(() => {
// 			fronInst.style.left = -e.clientX / 10 + 'px';
// 			fronInst.style.top = e.clientY / 10 + 'px';
// 			backInst.style.left = e.clientX / 10 + 'px';
// 			backInst.style.top = -e.clientY / 10 + 'px';
// 		}, 500);
// 	});
// 	phone.addEventListener('mouseleave', (e) => {
// 		console.log('leave');
// 		// fronInst.classList.add('_unactive');
// 		// backInst.classList.add('_unactive');
//
// 		// fronInst.style.bottom = 29 + '%';
// 		// fronInst.style.right = -2 + '%';
// 		// backInst.style.top = 18 + '%';
// 		// backInst.style.left = -11 + '%';
// 		// backInst.style.zIndex = '-1';
// 	});
// };
//
// inst();

const burgerMenu = () => {
	const burgerMenus = document.querySelectorAll('.header__item_menu');
	const burgerMenuBtns = document.querySelectorAll('.header__item_menu button');
	const burgerMenuTexts = document.querySelectorAll('.header__item_menu-text');
	const fullMobileMenu = document.querySelector('.header__menu_mobile_full');

	const isMobile = window.innerWidth <= 767 || navigator.userAgent.match(/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i);

	let activeMenu = false;

	const openBurger = (node) => {
		if (activeMenu) {
			return false;
		}
		node.classList.add('_active');
		setTimeout(() => {
			node.innerHTML = '✕';
			activeMenu = true;
		}, 500);

		if (isMobile) {
			fullMobileMenu.classList.add('_active');
			document.body.style.overflow = 'hidden';
		}
	};

	const closeBurger = (node) => {
		if (!activeMenu) {
			return false;
		}
		node.classList.remove('_active');
		setTimeout(() => {
			node.innerHTML = '☰';
			activeMenu = false;
		}, 500);

		if (isMobile) {
			fullMobileMenu.classList.remove('_active');
			document.body.style.overflow = 'auto';
		}
	};

	burgerMenuBtns.forEach((menu, id) => {
		menu.addEventListener('click', (e) => {
			const node = e.target;
			if (!activeMenu) {
				openBurger(node);
			} else {
				closeBurger(node);
			}
		});

		menu.addEventListener('blur', (e) => {
			const node = e.target;
			!isMobile ? closeBurger() : '';
		});
	});

	burgerMenuTexts.forEach((menu, id) => {
		menu.addEventListener('click', (e) => {
			const node = e.target.previousElementSibling;
			if (!activeMenu) {
				openBurger(node);
			} else {
				closeBurger(node);
			}
		});
	});
};

burgerMenu();
