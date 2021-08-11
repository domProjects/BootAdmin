




if (window.matchMedia) {
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		console.log('scheme: dark');
	}

	if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		console.log('scheme: light');
	}

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
		const newColorScheme = e.matches ? "dark" : "light";
		console.log('scheme: ' + newColorScheme);
	});
}



var toggle = document.getElementById("theme-toggle");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

