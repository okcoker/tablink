(function() {
	var list = document.getElementsByTagName('a'), i = 0,
		win = window.location.hostname;
	for (i; i < list.length; i++) {
		if (list[i].href.indexOf(win) === -1) {
			list[i].target = '_blank';
		}
	}
})();