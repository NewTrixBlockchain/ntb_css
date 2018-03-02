/**
 * 
 */

$.fn.bootstrapTable.defaults.height = "400px";
$.fn.bootstrapTable.defaults.method = "POST";
$.fn.bootstrapTable.defaults.queryParams = function( params ) {
	return params;
};
$.fn.bootstrapTable.defaults.locale = "ko-KR";
$.fn.bootstrapTable.defaults.classes = "";

$.fn.customTable = function( opt ) {
	if( opt != undefined ) {
		if( opt.title != undefined ) $('<h2>' + opt.title + '</h2>').insertBefore(this);
		if( opt.subtitle != undefined ) $('<h5>' + opt.subtitle + '</h5>').addClass("table-subtitle").insertBefore(this);
		$(this).bootstrapTable(opt);
		console.log($(this))
		debugger;
	}
}