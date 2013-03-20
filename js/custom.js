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
$('.galleria-image').css('width',319);

    $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=2a2ce06c15780ebeb0b706650fc890b2&photoset_id=72157632877501669&format=json&nojsoncallback=1', function(ps_json) {
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
                    });
                })
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
