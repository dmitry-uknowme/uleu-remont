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
	const burgerMenu = document.querySelector('.header__item_menu');
	const burgerMenuBtns = document.querySelectorAll('.header__item_menu button');
	const fullMobileMenu = document.querySelector('.header__menu_mobile_full');

	const isMobile = window.innerWidth <= 767;

	let activeMenu = false;

	const openBurger = (e) => {
		e.target.classList.add('_active');
		setTimeout(() => {
			e.target.innerHTML = '✕';
			activeMenu = true;
		}, 500);

		if (isMobile) {
			fullMobileMenu.classList.add('_active');
			document.body.style.overflow = 'hidden';
		}
	};

	const closeBurger = (e) => {
		e.target.classList.remove('_active');
		setTimeout(() => {
			e.target.innerHTML = '☰';
			activeMenu = false;
		}, 500);

		if (isMobile) {
			fullMobileMenu.classList.remove('_active');
			document.body.style.overflow = 'auto';
		}
	};

	burgerMenuBtns.forEach((menu, id) => {
		menu.addEventListener('click', (e) => {
			if (!activeMenu) {
				openBurger(e);
			} else {
				closeBurger(e);
			}
		});
		menu.addEventListener('blur', (e) => {
			!isMobile ? closeBurger() : '';
		});
	});
};

burgerMenu();
