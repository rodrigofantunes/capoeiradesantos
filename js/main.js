(function($) {

	"use strict";	

  	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		if(id === undefined) return;
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');		
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});


	$("a.homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		logoMaior();
		subtitulo("");
		return false;
	});

	$(".main-menu a.institucionalbtn").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .about-section").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});

	$(".main-menu a.educacionalbtn").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .gallery-section").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});

	$(".main-menu a.publicacoesbtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});

	$(".main-menu a.midiasbtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .midiasbtn").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});
	
	$(".main-menu a.parceirosbtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});
	
	$(".main-menu a.contatobtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});
		
	$("a.ecasabtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .ecasabtn").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});	
		
		
	$("a.missaobtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .missaobtn").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});	
	
	$("a.servicosbtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .servicosbtn").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});	
	
	$("a.metodologiabtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .metodologiabtn").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});		
		
	$("a.mestre").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .mestre").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});	

	$("a.ondebtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .ondebtn").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});	
		
	$("a.projetosbtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .projetosbtn").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});		
		
	$("a.livrosbtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .livrosbtn").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});	
	
	$("a.artigobtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .artigobtn").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});		
		
	$("a.parceirosbtn").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .parceirosbtn").slideDown('slow');
		logoMenor();
		subtitulo($(this).text());
		return false;
	});	
		
		
	$('.toggle-menu').click(function(){
		
        $('.show-menu').stop(true,true).slideToggle();
		var color = $(".show-menu").is(":visible");
		if(color) {$(this).css({"background-color": "rgba(11, 103, 61, 0.72)"});}
		else {$(this).css({"background-color": "transparent"});}
        return false;
    });

    $('.show-menu a').click(function() {
    	$('.show-menu').fadeOut('slow');
    });

	$('.sub-menuInst').click(function() {
    	$('.subInst').stop(true,true).slideToggle();
    });
	
	$('.sub-menuEduc').click(function() {
    	$('.subEduc').stop(true,true).slideToggle();
    });	
	$('.sub-menuPub').click(function() {
    	$('.subPub').stop(true,true).slideToggle();
    });

})(jQuery);

function logoMenor(){
	$(".logo-top-margin").animate({marginTop:'-30',marginLeft:'0',marginBottom:'-20'}, "slow");
	$(".logo-top-margin img").animate({width:'70',height:'70'}, "slow");
	var tela = $(window).outerWidth();
	if(tela < 994){
		$(".logo-top-margin img").hide();
		$(".logo-titulo").css({"margin-top":"0px"});
	}
}

function logoMaior(){
	$(".logo-top-margin").animate({marginLeft:'36%'}, "slow");
	$(".logo-top-margin").animate({marginTop:'-15px'}, "slow");
	$(".logo-top-margin").animate({marginBottom:'-45'}, "slow");
	$(".logo-top-margin img").animate({width:'300', height:'300'}, "slow");
	$(".logo-top-margin img").show();
}

function subtitulo(texto){
	if(texto === "") {
		$("#logo-titulo").hide(); 
		$("#titulomob").html("Escola de Capoeira de Santos");
		return;
	}
	$("#subtitulo").text(texto);
	$("#titulomob").html(texto);
	$("#logo-titulo").fadeIn("slow");
}