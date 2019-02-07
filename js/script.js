
$(function() {
//popup thumb carousel
$(function() {

  $('.b-gallery-thumb').each(function() {

	var detail = $(this).children('.js-thumb-gallery-detail'),
	  thumbs = $(this).children('.js-thumb-gallery-thumbs');
	thumbGallery(detail, thumbs);
  });

  function thumbGallery(nameDetail, nameThumbs) {
	/*
	Thumb Gallery
	*/
	var thumbGalleryDetail = $(nameDetail),
	  thumbGalleryThumbs = $(nameThumbs),
	  flag = false,
	  duration = 300;

	thumbGalleryDetail
	  .owlCarousel({
		items: 1,
		margin: 10,
		nav: true,
		dots: false,
		loop: false,
		navText: [ '<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>' ]
	  })
	  .on('changed.owl.carousel', function(e) {
		if (!flag) {
		  flag = true;
		  thumbGalleryThumbs.trigger('to.owl.carousel', [e.item.index - 1, duration, true]);
		  flag = false;
		}
	  });

	thumbGalleryThumbs
	  .owlCarousel({
		margin: 10,
		items: 6,
		autoPlay: 1000,
		nav: true,
		navText: [ '<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>' ],
		center: false,
		dots: false
	  })
	  .on('click', '.owl-item', function(e) {
		e.preventDefault();
		thumbGalleryDetail.trigger('to.owl.carousel', [$(this).index(), duration, true]);
	  })
	  .on('changed.owl.carousel', function(e) {
		if (!flag) {
		  flag = true;
		  thumbGalleryDetail.trigger('to.owl.carousel', [e.item.index, duration, true]);
		  flag = false;
		}
	  });
  }
});


	
//homepage carousel
$('.customer-review').owlCarousel({
	loop:true,
	margin:10,
	nav: false,
	smartSpeed: 700,
	autoplay: 4000,
	navText: [ '<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>' ],
	responsive:{
		0:{
			items:1
		},
		768:{
			items:2
		},
		800:{
			items:2
		},
		1024:{
			items:3
		}
	}
});    	
$('.brand-logo').owlCarousel({
	loop:true,
	margin:10,
	nav: false,
	smartSpeed: 700,
	autoplay: 3000,
	navText: [ '<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>' ],
	responsive:{
		0:{
			items:2
		},
		768:{
			items:3
		},
		992:{
			items:4
		},
		1024:{
			items:5
		}
	}
});    	




	
});    		