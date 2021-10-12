/*
window.addEventListener('DOMContentLoaded', event => {

	// Side navigation
	const button = document.body.querySelector('#sidebarToggle');

	if (button) {
		if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
			document.body.classList.toggle('sb-sidenav-toggled');
		}

		button.addEventListener('click', event => {
			event.preventDefault();
			document.body.classList.toggle('sb-sidenav-toggled');
			localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
		});
	}

});
*/

ready(() => {
	// MetisMenuJS >> use <nav> element
	let nav = document.getElementById('nav-menu');

	new MetisMenu(nav);

	// ScreenFull >> use <body> element
	let sfToggle = document.getElementById('fullscreenToggle');

	if (screenfull.isEnabled) {
		sfToggle.addEventListener('click', (ev) => {
			ev.preventDefault();

			screenfull.toggle(document.querySelector('body'));

			screenfull.on('change', () => {
				if (screenfull.isFullscreen) {
					sfToggle.classList.add('active');
				} else {
					sfToggle.classList.remove('active');
				}
			});
		});
	} else {
		sfToggle.style.display = 'none';
	}

	// screenfull >> use .btn-fullscreen for display element
	[].forEach.call(document.querySelectorAll('.btn-fullscreen'), function(el) {
		if (screenfull.isEnabled) {
			let cardElem = el.closest('.card');

			el.addEventListener('click', (ev) => {
				ev.preventDefault();

				screenfull.toggle(cardElem);

				screenfull.on('change', () => {
					if (screenfull.isFullscreen) {
						el.classList.add('active');
					} else {
						el.classList.remove('active');
					}
				});
			});
		} else {
			el.style.display = 'none';
		}
	});
});
