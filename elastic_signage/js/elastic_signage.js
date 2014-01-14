jQuery(document).ready(function($) {

	$(window).resize( function(){ changeFont(); });
    $("head").append("<style id='dynamicElasticSignage'></style>");
    
    function styleTheTicker() {
        $curWidth = $(window).width();
        $curHeight = $(window).height();
        $LimgWidth = $curWidth * 0.75;
        $LimgHeight = $LimgWidth * 9/16;
        $PimgWidth = $curWidth;
        $PimgHeight = $PimgWidth * 9/16;
        $LeWidth = $curWidth - $LimgWidth;

        $landHeight = $LimgHeight - ($LeWidth * 9/16);
        $portaitHeight = $PimgHeight * 0.7;
        $LtickerAllHeight = Math.floor($landHeight * 0.94 / 5) * 5;
        $LtickerOneHeight = $LtickerAllHeight / 5 ;
        $PtickerAllHeight = Math.floor($portaitHeight * 0.94 / 3) * 3 ;
        $PtickerOneHeight = $PtickerAllHeight / 3 ;
        $LtickerAllHeight += 10; // the 10px accounts for the added width of the borders
        $PtickerAllHeight += 6; // the 6px accounts for the added width of the borders
        
        if ($curWidth > $curHeight) { // landscape
            $('#eventTicker').css({"height":$LtickerAllHeight+"px"});
            $('#eventTicker li').css({"height":$LtickerOneHeight+"px"});
        } else { // portrait
            $('#eventTicker').css({"height":$PtickerAllHeight+"px"});
            $('#eventTicker li').css({"height":$PtickerOneHeight+"px"});
        }
    }
 
	function changeFont() {
		$curWidth = $(window).width();
		$curHeight = $(window).height();
		$fontSize = $curWidth/40;
		$('body').css({"font-size" : $fontSize + "px"});
        
		if ($curWidth > $curHeight) { // Landscape
		
			$imgWidth = $curWidth * 0.74;
			$imgHeight = $imgWidth * 9/16;
            $wWidth = $curWidth * 0.25;
			$wHeight = $wWidth * 9/16;
			$eHeight = $imgHeight - $wHeight;
			$hfHeight = ($curHeight - $imgHeight) / 2;

            $('div#datetime').appendTo('div#header');

            $styleText = "";
            $styleText += "#slide{width: " +$imgWidth+ "px;} ";
            $styleText += "#slide-content{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            $styleText += "#slide-content img{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            $styleText += "#slide-content div{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            $styleText += "#slide-content iframe{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            $styleText += "#slide-content .active{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            $styleText += "#slide-content .next{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            $styleText += "#slide-content .later{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";

            $styleText += "#weather{width:25%; height:" + $wHeight + "px; padding-left: 0.3em;} ";
            $styleText += ".weather-table{height:" + $wHeight + "px;} ";
            $styleText += ".weather-day{height:" + ($wHeight*0.20) + "px;} ";
            $styleText += ".weather-img{height:" + ($wHeight*0.50) + "px;} ";
            $styleText += ".weather-temp{height:" + ($wHeight*0.20) + "px;} ";
            $styleText += ".weather-img img{width:4em;} ";
            $styleText += "#weather-content .weather-day{font-size:1em; line-height:1em;} ";
            $styleText += "#weather-content .weather-temp{font-size:0.8em; line-height:0.8em;} ";
            
            $styleText += "#events{font-size:0.49em; width:25%; height:" + $eHeight + "px; padding-left: 0.8em;} ";
            $styleText += "#eventTicker ul{width:100%;} ";
            $styleText += "#eventTicker li{width:98%;} ";
            $styleText += "#slide2{display:none;} ";

            $styleText += "#header{height:" + $hfHeight + "px;} ";
            $styleText += "#footer{height:" + $hfHeight + "px;} ";

            $styleText += "#headline-content .the-headline{font-size:0.55em; line-height:0.7em; white-space: nowrap; overflow: hidden;} ";
            $styleText += "#headline-content{top:0em;} ";

            $styleText += ".date-time-clock{font-size:0.38em;} ";
 
            $styleText += "#title{height:" + $hfHeight + "px; width:75%; position:relative;} ";
            $styleText += "#title-content{position:absolute; bottom:0.14em; right:0.4em;} ";
            $styleText += ".sign-logo-byu{width:2.8em; margin-bottom:0em;padding-right:0.5em;} ";
            $styleText += ".sign-logo-text{font-size:.98em; line-height:1.38em;} ";
            $styleText += ".sign-logo-img{width:15.8em; margin-bottom:-0.08em;} ";

            $styleText += "#datetime{height:" + $hfHeight + "px; width:25%; position:relative;} ";
            $styleText += "#datetime-content{position:absolute; bottom:0.46em; right:0.4em; font-size:0.9em;} ";

            $styleText += "#content{padding-top:" + $hfHeight + "px;} ";
            $styleText += "#content{padding-bottom:" + $hfHeight + "px;} ";

            $styleText += "#header{border-bottom:solid 0.03em #fff;} ";
            $styleText += "#footer{border-top:solid 0.03em #fff;} ";

            $styleText += "#eventTicker{font-size : 0.50em;} ";         

            // RHS Theme :-)
            var $queryString = window.location.search.substring(1);
            if ($queryString.search("right") == 0) {
                $styleText += "#slide{float: right;} ";
            } else {
                $styleText += "#slide{float: left;} ";
            }
            
            $("#dynamicElasticSignage").text($styleText);
            styleTheTicker();
            
        } else { // Portrait
			$imgWidth = $curWidth;
			$imgHeight = $curWidth * 9/16;
			$weHeight = $imgHeight * 0.7;
			$hfHeight = ($curHeight - (($imgHeight * 2) + $weHeight)) / 2;
            $wHeight = ($imgWidth * 0.5) * 9/16;

            $('div#datetime').insertAfter('div#weather-content');

            $styleText = "";
            $styleText += "#slide{width: " +$imgWidth+ "px;} ";
            $styleText += "#slide-content{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            $styleText += "#slide-content img{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            $styleText += "#slide-content div{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            $styleText += "#slide-content iframe{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            $styleText += "#slide-content .active{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            $styleText += "#slide-content .next{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            $styleText += "#slide-content .later{width: " +$imgWidth+ "px; height: " +$imgHeight+ "px;} ";
            
            $styleText += "#weather{width:50%; height:" + $weHeight + "px;} ";
            $styleText += ".weather-table{height:" + $wHeight + "px;} ";
            $styleText += ".weather-day{height:" + ($wHeight*0.20) + "px;} ";
            $styleText += ".weather-img{height:" + ($wHeight*0.45) + "px;} ";
            $styleText += ".weather-temp{height:" + ($wHeight*0.20) + "px;} ";
            $styleText += ".weather-img img{width:8em;} ";
            $styleText += "#weather-content .weather-day{font-size:2em; line-height:1em;} ";
            $styleText += "#weather-content .weather-temp{font-size:1.6em; line-height:0.8em;} ";
            $styleText += "#weather-content{float:left; height:50%;} ";

            $styleText += "#events{font-size:1em; width:50%; height:" + $weHeight + "px;} ";
            $styleText += "#eventTicker ul{width:100%;} ";
            $styleText += "#eventTicker li{width:97%;} ";
            $styleText += "#eventTicker{margin-top:1.2em;} ";
            $styleText += "#slide2{display:block;} ";

            $styleText += "#header{height:" + $hfHeight + "px;} ";
            $styleText += "#footer{height:" + $hfHeight + "px;} ";

            $styleText += "#headline-content .the-headline{font-size:1.0em; line-height:1.2em;} ";
            $styleText += "#headline-content{top:0.2em;} ";

            $styleText += ".date-time-clock{font-size:1.8em;} ";
            
            $styleText += "#title{height:" + $hfHeight + "px; width:100%; position:relative;} ";
            $styleText += "#title-content{position:absolute; bottom:0.14em; right:0.4em;} ";
            $styleText += ".sign-logo-byu{width:3.7em; margin-bottom:-0.02em;padding-right:0.5em;} ";
            $styleText += ".sign-logo-text{font-size:1.3em; line-height:1.38em;} ";
            $styleText += ".sign-logo-img{width:21.5em; margin-bottom:0.2em;} ";

            
            $styleText += "#datetime{width:100%; height:50%;} ";
            $styleText += "#datetime-content{bottom:3em; right:1.5em; font-size:0.9em;} ";

            $styleText += "#content{padding-top:" + $hfHeight + "px;} ";
            $styleText += "#content{padding-bottom:" + $hfHeight + "px;} ";
			
            $styleText += "#header{border-bottom:solid 0.05em #fff;} ";
            $styleText += "#footer{border-top:solid 0.05em #fff;} ";

            $styleText += "#eventTicker{font-size : 0.50em;} ";

            $("#dynamicElasticSignage").text($styleText);
            styleTheTicker();
 
        }
	}

    changeFont();
    setTimeout(changeFont,10000);
    
});