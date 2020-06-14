// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require jquery.turbolinks
//= require turbolinks
//= require_tree .
$(document).on('turbolinks:load', function () {
    jQuery(function ($) {
    $('.tabcontent > div').hide();

    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();

        $('.tabnav a').removeClass('active');
        $(this).addClass('active');

        return false;
    }).filter(':eq(0)').click();
});

$(function () {
            function buildMESSAGE(message) {
                console.log("build")
                console.log(message)
                var messages = $('#mes').append('<div class="messages" data-id="'+ message.id + '"><img src="'+ message.image + '" class="img-circle" id="profile_pic"><a href="/users/'+ message.user_id + '">'+ message.name + '</a>: ' + message.content +'</div>');
            }


  $(function () {
      setInterval(update, 10000);
  });

  function update() { 
      if ($('.messages')[0]) { 
          var message_id = $('.messages:last').data('id'); 
            $.ajax({
                    url: location.href,
                    type: 'GET',
                    data: {
                        message: {
                            id: message_id
                        }
                    },
                    dataType: 'json'
                })
                .always(function (data) {
                    $.each(data, function (i, data) {
                        buildMESSAGE(data);
                    });
                });
      } else { 
          var message_id = 0 
          
      }
    }
});



var called = false;

  $(function () {
    function buildMESSAGE_all(message) {
    if ($('.allchat_item').length >= 10 && !called) {
            $('.allchats div:last').remove();
        }
        var messages = $('.allchats').prepend('<div class="allchat_item" data-id="' + message.id + '"><span><img src="' + message.image + '" class="img-circle" id="profile_pic"><a href="/users/' + message.user_id + '">' + message.name + '</a>: ' + message.content + ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="1.5">' + message.created_at + '</font></span></div>');
    }



$(function () {
      setInterval(update_allchat, 8000);
});

function update_allchat() {
    if ($('.allchat_item')[0]) {
        var allchat_id = $('.allchat_item:first').data('id');
    } else {
        var allchat_id = 0
    }
    $.ajax({
        url: "/users",
         type: 'GET',
        data: {
            allchat: {
            id: allchat_id
            }
        },
        dataType: 'json'
    })
    .always(function (data) {
        $(".form_allchats").removeAttr("disabled");
        $.each(data, function (i, data) {
            buildMESSAGE_all(data);
        });
        called = true;
    });
}
});


function chatcontrolle(){
    console.log($('.allchat_item').length)
    if ($('.allchat_item').length > 10) {
        $('.allchats div:last').fadeOut(2000, function(){
        $('.allchats div:last').remove();
        });
    }
}

setInterval(chatcontrolle, 1000);

})