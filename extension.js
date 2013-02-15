
const Main = imports.ui.main;

function _hideCategories() {
	Main.overview._viewSelector._appDisplay._appView._categoryScroll.hide();
}

function _showCategories() {
		Main.overview._viewSelector._appDisplay._appView._categoryScroll.show();
}

function init() {
	//ain't doin nuttin
}

function enable() {
	_hideCategories();
}

function disable() {
	_showCategories();
}
