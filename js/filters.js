// cache container
var $container = $('#pictures');
// initialize isotope



$container.isotope({
	// options
	resizable: false,
	//masonry: { 
	 // columnWidth: 240,
	  //rowHeight: 360,
	  //gutterWidth: 20
	//}
	filter: '.front'
});

$(document).ready(function() {
	$container.isotope({ filter: '.front' });
	return false;
});

$(window).smartresize(function(){
  $container.isotope({
    // update columnWidth to a percentage of container width
    //masonry: { columnWidth: $container.width() / 3 }
  });
});

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});
