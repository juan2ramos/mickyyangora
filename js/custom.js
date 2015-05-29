(function($) {
    $(document).ready(function() {

        if (!device.tablet() && !device.mobile()) {
            $(".player").mb_YTPlayer();
        } else {
            $('.big-background, .small-background-section').addClass(
                'big-background-default-image');
        }

        $(".play-toogle").on("click",function(e) {
            e.preventDefault()
            if($(this).hasClass("paused")){
                $(".player").playYTP();
            }else{
                $(".player").pauseYTP();
            }
            $(this).toggleClass("paused");
            
            
        });
         $(".wrap").on("click",function(e) {
           
               $(".player").toggleVolume();
            
            
            
        });
        
    });

})(jQuery);