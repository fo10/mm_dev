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
// console.log(init_dim());
// init_dim() +'!important'
// $('.galleria-image').css('width',319);
ytf_();
function ytf_(){
    var playListURL = 'http://gdata.youtube.com/feeds/api/playlists/PLE32B13A5DDF6C7FD?v=2&alt=json&max-results=50';
        var videoURL = 'http://www.youtube.com/watch?v=';
        $.getJSON(playListURL, function (data) {
            // console.log('playListURL:   ' + data);


            $.each(data.feed.entry, function (i, item) {
                var feedTitle = item.title.$t;
                var feedURL = item.link[1].href;
                var fragments = feedURL.split("/");
                var videoID = fragments[fragments.length - 2];
                var url = videoURL + videoID;
                var thumb = "http://img.youtube.com/vi/" + videoID + "/default.jpg";

        // video: 'http://www.youtube.com/watch?v=GCZrz8siv4Q',
        // title: 'My second title',
        // description: 'My second description'
                photoitem.push({
                    "video" : url,
                    "thumb"       : thumb,
                    "title"       : videoID
                });
            });

        });
}

$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=2a2ce06c15780ebeb0b706650fc890b2&photoset_id=72157633051512474&format=json&nojsoncallback=1', function(ps_json) {
        // console.log(ps_json.photoset)
        var tmparray=[];


        $.each(ps_json.photoset.photo, function(i, photo) {
            //  (el.id+' - '+el.type);

            id_ = photo.id;
            title_ = photo.title;
            server_ = photo.server;
            secret_ = photo.secret;

            // thumbimg = 'http://farm2.staticflickr.com/' + server_ + '/' + id_ + '_' + secret_ + '.jpg';
            bigimg = 'http://farm2.staticflickr.com/' + server_ + '/' + id_ + '_' + secret_ + '_b.jpg';
            medimg = 'http://farm2.staticflickr.com/' + server_ + '/' + id_ + '_' + secret_ + '.jpg';
        // thumb: 'thumb.jpg',
        // image: 'image.jpg',
        // big: 'big.jpg',
        // title: 'My title',
        // description: 'My description',
        // link: 'http://my.destination.com',
        // layer: '<div><h2>This image is gr8</h2><p>And this text will be on top of the image</p>'



// photoitem.push(tmparray);
photoitem.push({
    "thumb" : medimg,
    "image"  : bigimg,
    "big"       : bigimg,
    "title"       : title_
});



img_item = $('<img />').attr('src', thumbimg).attr('data-big', bigimg).attr('data-title', title_);
a_item = $('<a class="frodo" />').attr('href', medimg).append(img_item);

            // console.log(id_+' - ' +title_)
            // photoitem=[id_,title_,server_];
            // final_items[i]=photoitem;

            $('#galleria').append(a_item);

            if (i == ps_json.photoset.photo.length - 1) {

                // console.log(photoitem);

                // $('#galleria').galleria({
                //     dataSource: photoitem
                // })
            Galleria.run('#galleria', {
                    dataSource: photoitem
                    })
            .ready(function(options) {
                this.bind("thumbnail", function(e) {
                this.remove()
                });


                    this.bind("loadstart", function(e) {
                                                    this.prependChild('thumbnails', '<div class="galleria-image frodo" id="cat-title">images | videos</div>');

                        // if ( !e.cached ) {
                        //     for (var i = 0; i < $('.galleria-image').length; i++) {
                        //         $('.galleria-image').eq(i).css('height','148px');
                        //     }

                        //     alert('test');                       
                        //      }
                    });
                    });

                        // Galleria.addElement('mystuff'); // the image index
                        // setTimeout(function(){

                        // },100);
                    // });
                    // .on('loadfinish', function(e) {
                    //         for (var i = 0; i < $('.galleria-image').length; i++) {
                    //             $('.galleria-image').eq(i).css('height','148px');
                    //         }
                    // });
                // $('#galleria').prepend('<a href="http://www.youtube.com/watch?v=XXCAtZoCECQ"><img src="http://img.youtube.com/vi/XXCAtZoCECQ/0.jpg"></a>');


                // $('#galleria img').eq(i).load(function() {
                    // alert('photo.length'+ps_json.photoset.photo.length)

                    //     Galleria.run('#galleria', {

                    //     }).ready(function(options) {
                    //         this.prependChild('thumbnails', '<div class="galleria-image frodo" id="cat-title">images | videos</div>');
                    //     // Galleria.addElement('mystuff'); // the image index
                    //     setTimeout(function(){
                    //         for (var i = 0; i < $('.galleria-image').length; i++) {
                    //             $('.galleria-image').eq(i).css('height','148px');
                    //         }
                    //     },1000);


                    // });
                    // });
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
