$(document).ready(function(){
    var bar_template = '<div class="social-bar"><div class="social-links">' +
        '<div class="social-link"><a href="https://www.facebook.com/SuzukiGuadalajaraLopezMateosYAvVallarta"  class="facebook"  onclick="push_social('+"'Facebook'"+');"  target="_blank"><span>Facebook </span></a></div>'+
        '<div class="social-link"><a href="https://twitter.com/Suzuki_Gdl"              class="twitter"   onclick="push_social('+"'Twitter'"+');"  target="_blank"><span>Twitter  </span></a></div>'+
        '</div></div>';
    $('body').prepend( bar_template );
});