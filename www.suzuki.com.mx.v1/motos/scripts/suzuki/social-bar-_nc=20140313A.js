$(document).ready(function(){
    var bar_template = '<div class="social-bar"><div class="social-links">' +
        '<div class="social-link"><a href="https://www.facebook.com/SuzukiMotosMexico"  class="facebook"  onclick="push_social('+"'Facebook'"+');"  target="_blank"><span>Facebook </span></a></div>'+        
        '<div class="social-link"><a href="http://instagram.com/suzukimotos_mex"             class="instagram" onclick="push_social('+"'Instagram'"+');" target="_blank"><span>Instagram</span></a></div>'+
        '<div class="social-link"><a href="https://www.youtube.com/suzuki_mex" class="youtube"   onclick="push_social('+"'Youtube'"+');"  target="_blank"><span>Youtube  </span></a></div>'+
        '</div></div>';
    // $('body').prepend( bar_template );
});