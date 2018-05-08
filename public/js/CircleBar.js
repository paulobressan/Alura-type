// Custom Loading
// -----------------------------------

/**
 * Classe Message
 *
 * Exibe notificações na tela
 */
 function Message() {

  var timeMessage = null;

  this.show = function(msg, w, autoHide, millisec){
    w = w == undefined ? 500 : w;
    $('#custom-loading').css({
      width : w,
      marginLeft : ((w / 2) - w)
    });

    $('#custom-loading').html(msg).show(0, function(){
      clearTimeout(timeMessage);
      if (autoHide == undefined || autoHide == true){
        timeMessage = setTimeout(function(){
          $('#custom-loading').fadeOut('fast', function(){
            $('#custom-loading').html('');
          });
        }, millisec == undefined ? 10000 : millisec);
      }
    });
  };

  this.hide = function(fadeOut){
    if (fadeOut == undefined || fadeOut){
      $('#custom-loading').fadeOut('fast', function(){
        $('#custom-loading').html('');
      });
    }else if ( ! fadeOut){
      $('#custom-loading').hide().html('');
    }
  };

}

function Loading() {
  this.show = function(msg, w){
    message.show(msg != undefined ? msg : 'Carregando...', w != undefined ? w : 100, false);
  };

  this.hide = function(fadeOut){
    message.hide(fadeOut);
  };
}

var Event = {
  isChar : function(evt){
    return false;
  },
  getKeyEvent : function(evt){
    var e = false;
    try{
      e = (evt.which) ? evt.which : window.event.keyCode;
    }catch(exception){}
    return e;
  }
};
// Carregar classes dos loadings
var loading = new Loading();
var message = new Message();