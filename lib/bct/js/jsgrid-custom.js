/**
 * 
 */

$.fn.bctTable = function( opt ) {
	if( opt != undefined ) {
		if( opt.title != undefined ) $('<div class="table-title">' + opt.title + '</div>').insertBefore(this);
		if( opt.subtitle != undefined ) $('<div class="table-subtitle">' + opt.subtitle + '</div>').insertBefore(this);
		$(this).jsGrid(opt);
	}
}