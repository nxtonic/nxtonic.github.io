/**
 * Created by Angus McMillan on 9/12/14.
 */

/* Sweet Medium-style header-fading behaviour, proudly sponsored by jQuery (I fixed it up a bit and stress-tested the daylights out of it) */

if(!Modernizr.touch) {

    var lastScrollTop = $(window).scrollTop();

    $(window).scroll(function() {
        if (window.scrollY > 0 && window.scrollY < 475) {
            var scrollAmt = $(this).scrollTop();
            var deltaS = scrollAmt - lastScrollTop;
            $('#header-fadebox').css({
                bottom: '-=' + deltaS / 1.5,
                opacity: '-=' + deltaS / 475,
            }).stop(true,true);
        }
        if (window.scrollY <= 0 ) {
            $('#header-fadebox').animate({
                bottom: 0,
                opacity: 1
            }, 300/*, console.log('this happened')*/);
        }
        lastScrollTop = scrollAmt;
    });

}

/* End Medium fading effect */

/* Start of snap.svg winningness *

$(document).ready(function(){

    var logo = Snap('#zapmail-logo-svg');

//    var x = logo.circle(20,20,10);

    Snap.load("img/zapmail-logo.svg", function (f) {
        // Note that we traversre and change attr before SVG
        // is even added to the page
        // f.select("polygon[fill='#09B39C']").attr({fill: "#bada55"});
        g = f.selectAll("path");
        logo.append(g);
        g.attr({
            strokeWidth: 2,
            stroke: '#f00'
        })
    });
});

/* End of snap.svg winning */

/* Start class toggle management */

$(document).ready(function(){

    var Expanded = false;

        $('#special-box').on('click', function(e){
            e.stopPropagation();
            if(!Expanded) {
                $('#first-section').addClass('expanded');
                Expanded = true;
                console.log('expand');
            }
        });

        $('.exit').on('click', function(e){
            e.stopPropagation();
           if(Expanded) {
               $('#first-section').removeClass('expanded');
               Expanded = false;
               console.log('unexpand');
           }
        });

});

/* End class toggle management */

/* Start form submission */

$(document).ready(function(){

    function makeRequest(email, cb) {
        var re = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
        if(re.test(email)) {
            $.ajax({
                type: "POST",
                url: "https://docs.google.com/a/naavi.com/forms/d/1ygVWcC9YAbkwjOP7g2N5Fl2daEMQetFrMPG-6sCLlgs/formResponse",
                data: {
                    "entry.1568896907": email
                },
                success: function(data) {
                    if(typeof cb == 'function') {
                        cb(data,email);
                    }
                }, error: function(data) {
                    if(typeof cb == 'function') {
                        cb(data,email);
                    }
                }
            });
        } else {
            alert('You need to supply a valid email address');
        }
    }

    $('#top-button.ready').click(function() {
        makeRequest($("#top-text").val(), function (data,email) {
            // update ui here
            $('#top-button').val('successfully registered').removeClass('ready');
            $('#bottom-button').val('successfully registered').removeClass('ready');
            $('#top-text').remove();
            $('#bottom-text').remove();
        });
    });

    $('#bottom-button.ready').click(function() {
        makeRequest($("#bottom-text").val(), function(data,email) {
            // update ui here
            $('#top-button').val('successfully registered').removeClass('ready');
            $('#bottom-button').val('successfully registered').removeClass('ready');
            $('#top-text').remove();
            $('#bottom-text').remove();
        });
    });

});

/* End form submission */