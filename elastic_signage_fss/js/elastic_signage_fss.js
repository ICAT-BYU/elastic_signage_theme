jQuery(document).ready(function($) {

	$(window).resize( function(){ changeFont(); });
    $("head").append("<style id='dynamicElasticSignage'></style>");
    
	function changeFont() {
		$curWidth = $(window).width();
		$curHeight = $(window).height();

        $imgWidth = $curWidth;
        $imgHeight = $imgWidth * 9/16;
        $imgPadding = ($curHeight - $imgHeight) / 2;

        $styleText = "";
        $styleText += "#slide{width: " +$curWidth+ "px; height: " +$curHeight+ "px;} ";
        $styleText += "#slide-content img{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
        $styleText += "#slide-content div{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
        $styleText += "#slide-content iframe{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
        $styleText += "#slide-content .active{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
        $styleText += "#slide-content .next{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
        $styleText += "#slide-content .later{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
        
        $styleText += ".signage-slide {width:100%; height: auto; padding-bottom: 100%;}";
        if ($imgPadding > 0) {
            $styleText += "#slide-content {padding-top: " +$imgPadding+ "px; padding-bottom: " +$imgPadding+ "px;}";
        } else {
            $styleText += "#slide-content {padding-top: 0px; padding-bottom: 0px;}";
        }

        $("#dynamicElasticSignage").text($styleText);
            
	}

    changeFont();
    setTimeout(changeFont,10000);
    
});

