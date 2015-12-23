window.addEventListener('DOMContentLoaded', fin.desktop.main.bind(null, init))

function init(){
  var wname = document.getElementById('win-name'),
      aname = document.getElementById('app-name'),
      auuid = document.getElementById('app-uuid'),
      mkwin = document.getElementById('mkwin'),
      mkapp = document.getElementById('mkapp');


  mkwin.addEventListener('click', function (){

    if (wname.value) {
      new fin.desktop.Window({
        name: wname.value+'',
        autoShow: true,
        url: './child.html'
      },null, function (e){alert(e)});
    }
  })

  mkapp.addEventListener('click', function (){

    if (aname.value && auuid.value) {
      var app = new fin.desktop.Application({
        name: aname.value+'',
        uuid: auuid.value+'',
        autoShow: true,
        url: location.href
      },function(){app.run()}, function (e){alert(e)});
    }
  })

}

