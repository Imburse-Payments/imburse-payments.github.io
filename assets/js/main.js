$(document).ready(function() {
	
    /* ===== Stickyfill ===== */
    /* Ref: https://github.com/wilddeer/stickyfill */
    // Add browser support to position: sticky
    var elements = $('.sticky');
    Stickyfill.add(elements);
  
    
    /* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
    $(window).on('load resize', function() {
        $(window).trigger('scroll'); 
    });

    /* Activate scrollspy menu */
    /* Disabled as not currently using. Our guides are broken down into separate pages */
    //$('body').scrollspy({target: '#doc-menu', offset: 100});
    
    /* Smooth scrolling */
	$('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;    
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});
    });
    
    
    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */
    
    // $('#cards-wrapper .item-inner').matchHeight();
    // $('#showcase .card').matchHeight();
     
    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });

    /* Make doc-menu links active when page location matches */
    $(function () {
        var strippedTrailingSlash = location.pathname.replace(/\/$/, "");

        $('a[href^="' + strippedTrailingSlash  + '"]').addClass('active');
    });
});
