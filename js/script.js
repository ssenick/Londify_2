(function (){
	const parent = document.querySelector('.parent');
	const arrow = document.querySelector('.arrow');
	const subMenu = document.querySelector('.menu__sub-list');
	parent.addEventListener('mouseover', () => {
		subMenu.classList.add('open');
	});
	parent.addEventListener('mouseout', () => {
		subMenu.classList.remove('open');
	});
	parent.addEventListener('click', () => {
		subMenu.classList.toggle('open');
	});
	subMenu.addEventListener('mouseover', () => {
		subMenu.classList.add('open');
	});
	subMenu.addEventListener('mouseout', () => {
		subMenu.classList.remove('open');
	});

}());


// присвоение классов (бургер)
// убирание классов при клике на линк в меню(linksArticles...linksSignIn)
// блокировка скрола за приделами бургера (bodyLock)

(function () {
	const burger = document.querySelector('.burger');
	const menuList = document.querySelector('.menu__body');
	const bodyLock = document.querySelector('body');
	const linksAbout = document.querySelector('.link-js-1');
	const linksProducts = document.querySelector('.link-js-2');
	const linksPricing = document.querySelector('.link-js-3');
	const linksBlog = document.querySelector('.link-js-4');
	const linksJobs = document.querySelector('.link-js-5');

	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
	});
	burger.addEventListener('click', () => {
		menuList.classList.toggle('menu__body_active');
	});
	burger.addEventListener('click', () => {
		bodyLock.classList.toggle('body-lock');
	});
	linksAbout.addEventListener('click', () => {
		menuList.classList.remove('menu__body_active');
		burger.classList.remove('active');
	});
	linksProducts.addEventListener('click', () => {
		menuList.classList.remove('menu__body_active');
		burger.classList.remove('active');
	});
	linksPricing.addEventListener('click', () => {
		menuList.classList.remove('menu__body_active');
		burger.classList.remove('active');
	});
	linksBlog.addEventListener('click', () => {
		menuList.classList.remove('menu__body_active');
		burger.classList.remove('active');
	});
	linksJobs.addEventListener('click', () => {
		menuList.classList.remove('menu__body_active');
		burger.classList.remove('active');
	});
}());

//присвоение класса при скроле
// для навешивания BG+ что бы меню стало видно
(function (){
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('header_active');
		} else {
			header.classList.remove('header_active');
		}
	}
}());

// Scroll to anchors (плавный скрол по странице)
// нажимая на навигационное меню идет плавный скрол этой часте на странице
// нужно указать класс главнего блока (.header)+ в html в навигацию каждему
// элементу добавить класс (js-scroll), и привязать все по ID
// 
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - (1.8 * headerElHeight) ;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

