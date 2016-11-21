//Function Astronote Themelate
function channel(id)
{
	if(id == 'one')
    {
		$(".button-channel-one").removeAttr("onclick");
		$(".button-channel-two").attr("onclick","channel('two')");
    }
	else if(id == 'two')
    {
		$(".button-channel-two").removeAttr("onclick");
		$(".button-channel-one").attr("onclick","channel('one')");
    }
	//main func
	$('.channel-active').removeClass('channel-active');
	$('.button-channel-'+id).addClass('channel-active');
	$('#channel-one').hide();
	$('#channel-two').hide();
	$('#channel-'+id).fadeIn('fast');
}
// Menu
function menu(val) {
  if(val == 'open')
  {
    $('#navbar').addClass('sticky');
    $('#menu-navbar .widget-content').addClass('fadein');
    $('#menu-navbar .widget-content').removeClass('fadeout');
    $('.open-nav').hide();
    $('.close-nav').show();
  }
  else
  {
    $('#menu-navbar .widget-content').removeClass('fadein');
    $('#menu-navbar .widget-content').addClass('fadeout');
    $('.open-nav').show();
    $('.close-nav').hide();
  }
}

function resizeThumb(el, from, to) {
    $(el).each(function() { $(this).attr({ 'src': $(this).attr('src').replace('/s'+from+'-', '/s'+to+'-'), 'width': to }); });
}
function resizeAva(el, from, to) {
    $(el).each(function() { $(this).attr({ 'src': $(this).attr('src').replace('/s'+from+'/', '/s'+to+'/'), 'width': to }); });
}
function resizeInsta(el, from, to) {
    $(el).each(function() { $(this).attr({ 'src': $(this).attr('src').replace('/s'+from+'x'+from+'/', '/s'+to+'x'+to+'/'), 'width': to }); });
}