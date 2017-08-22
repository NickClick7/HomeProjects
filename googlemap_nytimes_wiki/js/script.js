$(function(){
    function loadData() {

        var $body = $('body');
        var $wikiElem = $('#wikipedia-links');
        var $nytHeaderElem = $('#nytimes-header');
        var $nytElem = $('#nytimes-articles');
        var $greeting = $('#greeting');

        // clear out old data before new request
        $wikiElem.text("");
        $nytElem.text("");
        $("img").attr("src","");
        // load streetview

        // YOUR CODE GOES HERE!
        var $street = $("#street").val();
        var $city = $("#city").val();
        var address = $street +","+$city;

        $greeting.text("So, you want to live at"+address+"?");
        var url = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location="+address;
        $body.append("<img class='bgimg' src='"+url+"'/>");

        var url2 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+$city+"&sort=newest&apikey=2374b366ff614d62b7c3ee579d3970b5";
        $.getJSON(url2, function(data) {
           $nytHeaderElem.text("NYT articles about "+$city);
           var articles = data.response.docs;
           for(var i=0; i<articles.length; i++) {
                $nytElem.append("<li class='article'><a target='blank' href='"+articles[i].web_url+"'>"
                    +articles[i].headline.main+"</a><p>'"+articles[i].snippet+"'</p></li>")
           }
        });

        var wikiRequestTimeout = setTimeout(function(){
            $wikiElem.text("failed to get wikipedia resources!")
        },8000);

        var url3 = "http://en.wikipedia.org/w/api.php?action=opensearch&search="+$city+"&format=json&callback=wikiCallback";
        $.ajax({
            url: url3,
            dataType: "jsonp",
            success: function(response){
                var wikiArticles = response[1];
                for(var i=0; i<wikiArticles.length;i++) {
                    var wiki = "https://en.wikipedia.org/wiki/"+wikiArticles[i];
                    $wikiElem.append("<li class='article'><a target = 'blank' href='"+wiki+"'>"+wikiArticles[i]+"</a></li>")
                }
                $(".wikipedia-container").append("<img src='"+url+"'/>");
                clearTimeout(wikiRequestTimeout);
                $("input").val("");
            }
        });
        return false;
    };

    $('#form-container').submit(loadData);

});
