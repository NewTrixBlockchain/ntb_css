/**
* Time-limit.js
* @dmkim
**/

$.fn.timeLimit = function( opt ) {
	var ret = {};

	if( opt.start && opt.end ) {
		var start = opt.start instanceof Date ? opt.start : new Date(opt.start);
		var end = opt.end instanceof Date ? opt.end : new Date(opt.end);

		start = new Date(start.getFullYear(), start.getMonth()+1, start.getDate(), start.getHours(), start.getMinutes(), start.getSeconds());
		end = new Date(end.getFullYear(), end.getMonth()+1, end.getDate(), end.getHours(), end.getMinutes(), end.getSeconds());

		var diff = end.getTime() - start.getTime();

		/*
		if( (new Date()).getTime() < start.getTime() ) {
			$(this).addClass('timeLimit').addClass('timeLimit-wait').text(opt.waitText);
		} else 
		*/if( diff < 0 ) {
			$(this).addClass('timeLimit').addClass('timeLimit-close').text(opt.closeText);
		} else {
			ret.day = Math.floor( diff / ( 1000 * 60 * 60 * 24 ) );
			ret.hour = Math.floor( ( diff % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
			ret.min = Math.floor( ( diff % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
			ret.sec = Math.floor( ( diff % ( 1000 * 60 ) ) / 1000 );

			if( $(this).find(".timeLimit-container").length > 0 ) {
				$(this).find('.timeLimit-day').text(ret.day);
				$(this).find('.timeLimit-hour').text(ret.hour);
				$(this).find('.timeLimit-min').text(ret.min);
				$(this).find('.timeLimit-sec').text(ret.sec);
			} else {
				$(this).append("<div class='timeLimit-container'></div>");
				$("<span class='timeLimit-day'/>").text(ret.day).appendTo( $(this).find(".timeLimit-container") );
				$("<span class='timeLimit-hour'/>").text(ret.hour).appendTo( $(this).find(".timeLimit-container") );
				$("<span class='timeLimit-min'/>").text(ret.min).appendTo( $(this).find(".timeLimit-container") );
				$("<span class='timeLimit-sec'/>").text(ret.sec).appendTo( $(this).find(".timeLimit-container") );
			}
		}
	}
};