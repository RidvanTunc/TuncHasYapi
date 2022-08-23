var cizgiler = document.querySelector('.cizgiler');
var anaLinkler = document.querySelector('.anaLinkler');
var opakLink = document.querySelectorAll('.anaLinkler .animLink');
var navigasyonShow = () => {
  cizgiler.addEventListener('click', ()=> {
    anaLinkler.classList.toggle('getirLink');
    opakLink.forEach((link,indeks)=> {
      if(link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation= `yaziAnimLink .5s ease-in forwards ${indeks/10+.2}s`;
      }
    });
    cizgiler.classList.toggle('kapat');
  });
}; navigasyonShow();


$(function() {
  $(".anaLinkler .link").on("click", function(){
    $(this).siblings().removeClass('aktifLink');
    $(this).addClass('aktifLink');
  });
  
  $(".anaLinkler .link2").on("click", function(){
    $(this).siblings().removeClass('pasifLink');
    $(this).addClass('pasifLink');
  });
  
  $(".anaLinkler .link3").on("click", function(){
    $(this).siblings().removeClass('pasifLink2');
    $(this).addClass('pasifLink2');
  });

  
  $(".ac, .ac2").hover(function() {
    $(".kurumsal li").slideDown("fast");
  });
  $(".hoverLi, .kurumsalKapat, .icerik").hover(function() {
    $(".kurumsal li").slideUp("fast");
  });

  $(".ac3, .ac4").hover(function() {
    $(".projeler li").slideDown("fast");
  });
  $(".hoverLi, .projelerKapat, .icerik").hover(function() {
    $(".projeler li").slideUp("fast");
  });


  $(".altLinkAc").hover(function(){
    $(".kurumsalAltLink").show("fast");
  });
  $(".altLinkKapat").hover(function(){
    $(".kurumsalAltLink").hide("fast");
  });

  $(".altLinkAc2").hover(function(){
    $(".projelerAltLink").show("fast");
  });
  $(".altLinkKapat2").hover(function(){
    $(".projelerAltLink").hide("fast");
  });


	$(".haritaDugme").on("click",function(){
		$(".googleHarita").slideToggle("fast");
  });
	$(".formDugme").on("click",function(){
		$(".iletisimFormu").slideToggle("fast");
  });


  /*if($(window).width() > 768) {
      $(this).css("background","rgb(0,95,191,.5)").css("color","#fff");
    } else {
      $(this).css("background","rgb(249,249,249,.7)").css("color","#005fbf");
    }*/


  $(document).on("click", ".anaLinkler, .ac, .ac2, .ac3", function() {
    if($(".kurumsal li && .projeler li").is(":visible")==false) {
      $(".slaytLink").show();
    }
    if($(".kurumsal li && .projeler li").is(":hidden")==true) {
      $(".slaytLink").hide();
    }
  });


  $(".cizgiler").click(function() {
    $(".kurumsal li").hide();
    $(".projeler li").hide();
  });


  /*$(window).click(function(event) {
    if(!$(event.target).is(".cizgiler,.anaLinkler")) {
      $(".anaLinkler").css("display","none");
    } else {
      $(".anaLinkler").css("display","block");
    }
  });*/
  $(".projeResmi").click(function() {
    $(".resimArkaPlan").show();
  })
});

var slaytIndeks = 1;
showSlayt(slaytIndeks);
function artiEksiSlayt(n) {
  showSlayt(slaytIndeks += n);
  clearInterval(s);
}
function aktifSlayt(n) {
  showSlayt(slaytIndeks = n);
  clearInterval(s);
}
var s = setInterval(function() {
  	slaytIndeks++;
  	showSlayt(slaytIndeks);
  },5500);
function showSlayt(n) {
  var i;
  var slaytlar = document.getElementsByClassName("slaytKutusu");
  var aktifResim = document.querySelectorAll(".aktifResim img");
  if (n > slaytlar.length) {slaytIndeks = 1}
  if (n < 1) {slaytIndeks = slaytlar.length}
  for (i = 0; i < slaytlar.length; i++) {
      slaytlar[i].style.display = "none";
  }
  for (i = 0; i < aktifResim.length; i++) {
    aktifResim[i].className = aktifResim[i].className.replace(" aktif", "");
  }
  slaytlar[slaytIndeks-1].style.display = "block";
  aktifResim[slaytIndeks-1].className += " aktif";
}