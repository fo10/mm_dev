$(window).load(init_main);



function init_main(){
Galleria.loadTheme('js/galleria.folio.mod.js');

// alert(init_dim());

    var final_items = [];
    var id_;
    var title_;
    var secret_;
    var server_;
    var photoitem = [];
    var thumbimg;
    var bigimg;
    var medimg;
    var img_item;
    var a_item;
console.log(init_dim());
// init_dim() +'!important'
// $('.galleria-image').css('width',319);
ytf_()
function ytf_(){
        var playListURL = 'http://gdata.youtube.com/feeds/api/playlists/PLE32B13A5DDF6C7FD?v=2&alt=json&max-results=50';
        // var videoURL = 'http://www.youtube.com/watch?v=';
        $.getJSON(playListURL, function (data) {
                    console.log('playListURL:   ' + data)

            // var list_data = "";
            // var column_count = -1;
            // var begin_table = "<table width='100%'><tr>";
            // var end_table = "</table>";
            // var html_data = "";
            // $.each(data.feed.entry, function (i, item) {
            //     column_count = column_count + 1;
            //     var feedTitle = item.title.$t;
            //     var feedURL = item.link[1].href;
            //     var fragments = feedURL.split("/");
            //     var videoID = fragments[fragments.length - 2];
            //     var url = videoURL + videoID;
            //     var thumb = "http://img.youtube.com/vi/" + videoID + "/default.jpg";

            //     if(column_count <= 3)
            //         html_data += '<td><a class="youtube" href="#" rel="' + videoID + '" title="' + feedTitle + '"><img alt="' + feedTitle + '" src="' + thumb + '"></a></td>';
            //     else
            //     {
            //         column_count = 0;
            //         html_data += "</tr><tr>";
            //         html_data += '<td><a class="youtube" href="#" rel="' + videoID + '" title="' + feedTitle + '"><img alt="' + feedTitle + '" src="' + thumb + '"></a></td>';
            //     }
            // });
            // html_data = begin_table + html_data + end_table;
            // $(html_data).appendTo(".vidz");
            });
}
    $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=2a2ce06c15780ebeb0b706650fc890b2&photoset_id=72157633051512474&format=json&nojsoncallback=1', function(ps_json) {
        // console.log(ps_json.photoset)



        $.each(ps_json.photoset.photo, function(i, photo) {
            //  (el.id+' - '+el.type);

            id_ = photo.id;
            title_ = photo.title;
            server_ = photo.server;
            secret_ = photo.secret;

            thumbimg = 'http://farm2.staticflickr.com/' + server_ + '/' + id_ + '_' + secret_ + '.jpg';
            bigimg = 'http://farm2.staticflickr.com/' + server_ + '/' + id_ + '_' + secret_ + '_b.jpg';
            medimg = 'http://farm2.staticflickr.com/' + server_ + '/' + id_ + '_' + secret_ + '.jpg';

            // console.log(id_);
            // console.log(title_);
            // console.log(server_);

            img_item = $('<img />').attr('src', thumbimg).attr('data-big', bigimg).attr('data-title', title_);
            a_item = $('<a class="frodo" />').attr('href', medimg).append(img_item);

            // console.log(id_+' - ' +title_)
            // photoitem=[id_,title_,server_];
            // final_items[i]=photoitem;

            $('#galleria').append(a_item);
            // alert(i)

            if (i == ps_json.photoset.photo.length - 1) {
                $('#galleria img').eq(i).load(function() {
                    // alert('photo.length'+ps_json.photoset.photo.length)

                    Galleria.run('#galleria', {

                    }).ready(function(options) {
                        this.prependChild('thumbnails', '<div class="galleria-image frodo" id="cat-title">images | videos</div>');
                        // Galleria.addElement('mystuff'); // the image index
                        setTimeout(function(){
                        for (var i = 0; i < $('.galleria-image').length; i++) {
                            $('.galleria-image').eq(i).css('height','148px');
                        };                            
                        },1000)


                    });
                });
            }

        });

    });
}

        function init_dim() {

            // if($('#page').hasClass('sub')){
            if (document.body && document.body.offsetWidth) {
                winW = $(window).width();
                winH = $(window).height();
            }
            in_w=winW/5;
            return in_w;
        }
