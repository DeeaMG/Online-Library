$(document).ready(function() {
	$(".bookTypes").hover(function() {
		$(this).css("background-color", "#f4c6ff4d");
		$(this).css("color", "rgb(48, 47, 47)");
	}, function() {
		$(this).css("background-color", "inherit");
	});
});
			
$(document).ready(function() {
	$(".bookTypes").hover(function() {
		
		if ($(".audiobooks").is(":hover"))
		{
			$(".description").html("");
		}
		
		else if ($(".culinare").is(":hover"))
		{
			$(".description").html("");
		}
		
		else if ($(".arta").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Teoria artei</a>" +
										"<a href='#' class='subtype'>Istoria artei</a>" +
										"<a href='#' class='subtype'>Pictura, grafica, alte forme artistice</a>" +
										"<a href='#' class='subtype'>Fotografie</a>" +
										"<a href='#' class='subtype'>Arta comerciala si industriala</a>" +
										"<a href='#' class='subtype'>Graphic design</a>" +
										"<a href='#' class='subtype'>Arhitectura</a>" +
										"<a href='#' class='subtype'>Teatru</a>" +
										"<a href='#' class='subtype'>Film, TV, radio</a>" +
										"<a href='#' class='subtype'>Dans, performing arts</a>" +
										"<a href='#' class='subtype'>Muzica</a>" +
									"</div>");
		}
		
		else if ($(".enciclopedii").is(":hover"))
		{
			$(".description").html("");
		}
		
		else if ($(".reviste").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Arta</a>" +
										"<a href='#' class='subtype'>Design</a>" +
										"<a href='#' class='subtype'>Arhitectura</a>" +
										"<a href='#' class='subtype'>Film, TV, radio</a>" +
										"<a href='#' class='subtype'>Literatura</a>" +
										"<a href='#' class='subtype'>Politica si diplomatie</a>" +
										"<a href='#' class='subtype'>Teatru si dans</a>" +
										"<a href='#' class='subtype'>Fotografie</a>" +
										"<a href='#' class='subtype'>Muzica</a>" +
										"<a href='#' class='subtype'>Cultura urbana si traditionala</a>" +
										"<a href='#' class='subtype'>Istorie</a>" +
										"<a href='#' class='subtype'>Culinare</a>" +
									"</div>");
		}
		
		else if ($(".biografii").is(":hover"))
		{
			$(".description").html("");
		}
		
		else if ($(".dictionare").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Dictionare</a>" +
										"<a href='#' class='subtype'>Gramatica</a>" +
										"<a href='#' class='subtype'>Creative writing</a>" +
										"<a href='#' class='subtype'>Istoria limbajului</a>" +
										"<a href='#' class='subtype'>Lingvistica</a>" +
										"<a href='#' class='subtype'>Biblioteconomie</a>" +
									"</div>");
		}
		
		else if ($(".limbiStraine").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Invatarea limbilor straine</a>" +
										"<a href='#' class='subtype'>Dictionare</a>" +
									"</div>");
		}
		
		else if ($(".poezie").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Poezie</a>" +
										"<a href='#' class='subtype'>Piese de teatru, scenarii</a>" +
										"<a href='#' class='subtype'>Eseistica</a>" +
										"<a href='#' class='subtype'>Antologii</a>" +
										"<a href='#' class='subtype'>Istorie si critica</a>" +
									"</div>");
		}
		
		else if ($(".fictiune").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Clasici</a>" +
										"<a href='#' class='subtype'>Moderni, contemporani</a>" +
										"<a href='#' class='subtype'>Crime, mister</a>" +
										"<a href='#' class='subtype'>Thriller, horror</a>" +
										"<a href='#' class='subtype'>Young adult</a>" +
										"<a href='#' class='subtype'>Aventura</a>" +
										"<a href='#' class='subtype'>SF</a>" +
										"<a href='#' class='subtype'>Fantasy</a>" +
										"<a href='#' class='subtype'>Fictiune erotica</a>" +
										"<a href='#' class='subtype'>Fictiune mitologica si istorica</a>" +
										"<a href='#' class='subtype'>Romance</a>" +
										"<a href='#' class='subtype'>Saga</a>" +
										"<a href='#' class='subtype'>Proza scurta, altele</a>" +
									"</div>");
		}
		
		else if ($(".benziDesenate").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Romane ilustrate</a>" +
										"<a href='#' class='subtype'>Comics & Manga</a>" +
										"<a href='#' class='subtype'>Manga</a>" +
									"</div>");
		}
		
		else if ($(".atlase").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Anuare, Who`s Who</a>" +
										"<a href='#' class='subtype'>Atlase, harti, referinte geografice</a>" +
										"<a href='#' class='subtype'>Turism si calatorii</a>" +
									"</div>");
		}
		
		else if ($(".istorie").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Istorie generala</a>" +
										"<a href='#' class='subtype'>Arheologie</a>" +
										"<a href='#' class='subtype'>Istoria Europei</a>" +
										"<a href='#' class='subtype'>Istoria romanilor</a>" +
										"<a href='#' class='subtype'>Istorie militara, aparare</a>" +
										"<a href='#' class='subtype'>Muzeologie</a>" +
										"<a href='#' class='subtype'>Relatii internationale</a>" +
										"<a href='#' class='subtype'>Istorie universala</a>" +
										"<a href='#' class='subtype'>Istorie economica</a>" +
										"<a href='#' class='subtype'>Istoria mentalitatilor</a>" +
										"<a href='#' class='subtype'>Istorii secrete</a>" +
									"</div>");
		}
		
		else if ($(".religie").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Generalitati, istoria religiilor</a>" +
										"<a href='#' class='subtype'>Crestinism</a>" +
										"<a href='#' class='subtype'>Buddhism</a>" +
										"<a href='#' class='subtype'>Hinduism</a>" +
										"<a href='#' class='subtype'>Islam</a>" +
										"<a href='#' class='subtype'>Iudaism</a>" +
										"<a href='#' class='subtype'>Alte religii si credinte</a>" +
									"</div>");
		}
		
		else if ($(".filosofie").is(":hover"))
		{
			$(".description").html(" <div class='typesB'>" +
										"<a href='#' class='subtype'>Istoria filosofiei occidentale</a>" +
										"<a href='#' class='subtype'>Metafizica si ontologie</a>" +
										"<a href='#' class='subtype'>Epistemologie, teoria cunoasterii</a>" +
										"<a href='#' class='subtype'>Logica</a>" +
										"<a href='#' class='subtype'>Filosofia mintii</a>" +
										"<a href='#' class='subtype'>Filosofia limbajului</a>" +
										"<a href='#' class='subtype'>Estetica</a>" +
										"<a href='#' class='subtype'>Semiotica</a>" +
										"<a href='#' class='subtype'>Etica si morala</a>" +
										"<a href='#' class='subtype'>Filosofia stiintei</a>" +
										"<a href='#' class='subtype'>Filosofie social-politica</a>" +
										"<a href='#' class='subtype'>Filosofie non-occidentala</a>" +
										"<a href='#' class='subtype'>Filosofie populara</a>" +
									"</div>");
		}
		
		else if ($(".psihologie").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Teorie generala, scoli</a>" +
										"<a href='#' class='subtype'>Metodologie, testare</a>" +
										"<a href='#' class='subtype'>Psihologia copilului si dezvoltarii</a>" +
										"<a href='#' class='subtype'>Psihologia varstelor si a sexelor</a>" +
										"<a href='#' class='subtype'>Psihologia familiei</a>" +	
										"<a href='#' class='subtype'>Psihologia sociala si de grup</a>" +
										"<a href='#' class='subtype'>Psihologia ocupationala</a>" +
										"<a href='#' class='subtype'>Psihologia criminalistica si legala</a>" +
										"<a href='#' class='subtype'>Psihologia experimentala</a>" +
										"<a href='#' class='subtype'>Neuropsihologie, biopsihologie</a>" +	
										"<a href='#' class='subtype'>Psihologia emotiilor</a>" +
										"<a href='#' class='subtype'>Psihologia cognitiva</a>" +
										"<a href='#' class='subtype'>Eu, ego, identitate, personalitate</a>" +
									"</div>");
		}
		
		else if ($(".politica").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Studii culturale</a>" +
										"<a href='#' class='subtype'>Studii interdisciplinare</a>" +
										"<a href='#' class='subtype'>Sociologie, antropologie</a>" +
										"<a href='#' class='subtype'>Criminologie</a>" +
										"<a href='#' class='subtype'>Servicii sociale</a>" +
										"<a href='#' class='subtype'>Educatie</a>" +
										"<a href='#' class='subtype'>Politologie si guvernare</a>" +
										"<a href='#' class='subtype'>Relatii internationale</a>" +
										"<a href='#' class='subtype'>Doctrine si partide politice</a>" +
										"<a href='#' class='subtype'>Aparare nationala</a>" +
									"</div>");
		}
		
		else if ($(".marketing").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Publicitate si media</a>" +
										"<a href='#' class='subtype'>Strategie</a>" +
										"<a href='#' class='subtype'>Studiul pietei</a>" +
										"<a href='#' class='subtype'>Relatii publice</a>" +
										"<a href='#' class='subtype'>Servicii client</a>" +
										"<a href='#' class='subtype'>Creative writing</a>" +
										"<a href='#' class='subtype'>Industria comunicarii</a>" +
									"</div>");
		}
		
		else if ($(".business").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Economie</a>" +
										"<a href='#' class='subtype'>Finante si contabilitate</a>" +
										"<a href='#' class='subtype'>E-commerce</a>" +
										"<a href='#' class='subtype'>Business</a>" +
										"<a href='#' class='subtype'>Antreprenoriat</a>" +
										"<a href='#' class='subtype'>Tehnici de management</a>" +
										"<a href='#' class='subtype'>Marketing si vanzari</a>" +
										"<a href='#' class='subtype'>Birotica, ergonomie</a>" +
									"</div>");
		}
		
		else if ($(".drept").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Drept international</a>" +
										"<a href='#' class='subtype'>Teorie generala, jurisprudenta</a>" +
										"<a href='#' class='subtype'>Drept civil</a>" +
										"<a href='#' class='subtype'>Drept comercial</a>" +
										"<a href='#' class='subtype'>Drept constitutional</a>" +
										"<a href='#' class='subtype'>Drept penal</a>" +
										"<a href='#' class='subtype'>Legislatia muncii</a>" +
										"<a href='#' class='subtype'>Mass-media, calomnie</a>" +
										"<a href='#' class='subtype'>Dreptul mediului, transport</a>" +
										"<a href='#' class='subtype'>Drept corporatist</a>" +
										"<a href='#' class='subtype'>Dreptul familiei</a>" +
										"<a href='#' class='subtype'>Drept financiar</a>" +
										"<a href='#' class='subtype'>IT si comunicatii</a>" +
										"<a href='#' class='subtype'>Proprietate intelectuala</a>" +
										"<a href='#' class='subtype'>Drept social</a>" +
										"<a href='#' class='subtype'>Impozite si taxe</a>" +
										"<a href='#' class='subtype'>Testament, succesiune</a>" +
									"</div>");
		}
		
		else if ($(".medicina").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Aspecte generale</a>" +
										"<a href='#' class='subtype'>Preclinic: anatomie, fiziologie</a>" +
										"<a href='#' class='subtype'>Medicina clinica si interna</a>" +
										"<a href='#' class='subtype'>Stomatologie</a>" +
										"<a href='#' class='subtype'>Farmacologie</a>" +
										"<a href='#' class='subtype'>Psihiatrie, psihologie clinica, terapii</a>" +
										"<a href='#' class='subtype'>Medicina sportiva</a>" +
										"<a href='#' class='subtype'>Alte forme de medicina</a>" +
										"<a href='#' class='subtype'>Chirurgie</a>" +
										"<a href='#' class='subtype'>Ingrijire si asistenta</a>" +
										"<a href='#' class='subtype'>Ghiduri si referinte</a>" +
										"<a href='#' class='subtype'>Medicina complementara</a>" +
										"<a href='#' class='subtype'>Medicina veterinara</a>" +
									"</div>");
		}
		
		else if ($(".matematici").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Matematica</a>" +
										"<a href='#' class='subtype'>Istoria stiintei si generalitati</a>" +
										"<a href='#' class='subtype'>Astronomie, spatiu, timp</a>" +
										"<a href='#' class='subtype'>Fizica</a>" +
										"<a href='#' class='subtype'>Chimie</a>" +
										"<a href='#' class='subtype'>Biologie</a>" +
									"</div>");
		}
		
		else if ($(".natura").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Stiintele Pamantului</a>" +
										"<a href='#' class='subtype'>Geografie</a>" +
										"<a href='#' class='subtype'>Mediu si ecologie</a>" +
										"<a href='#' class='subtype'>Planificare regionala si urbana</a>" +
									"</div>");
		}
		
		else if ($(".tehnologie").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Tehnologie: generalitati</a>" +
										"<a href='#' class='subtype'>Mecanica si stiinta materialelor</a>" +
										"<a href='#' class='subtype'>Energetica</a>" +
										"<a href='#' class='subtype'>Electronica si comunicatii</a>" +
										"<a href='#' class='subtype'>Constructii</a>" +
										"<a href='#' class='subtype'>Transporturi</a>" +
										"<a href='#' class='subtype'>Alte tehnologii</a>" +
										"<a href='#' class='subtype'>Agricultura</a>" +
									"</div>");
		}
		
		else if ($(".internet").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Lifestyle digital</a>" +
										"<a href='#' class='subtype'>Aplicatii de business, ERP</a>" +
										"<a href='#' class='subtype'>Grafica</a>" +
										"<a href='#' class='subtype'>Hardware</a>" +
										"<a href='#' class='subtype'>Sisteme de operare</a>" +
										"<a href='#' class='subtype'>Programare, dezvoltare</a>" +
										"<a href='#' class='subtype'>Baze de date</a>" +
										"<a href='#' class='subtype'>Certificari</a>" +
										"<a href='#' class='subtype'>Securitate</a>" +
										"<a href='#' class='subtype'>Retele si comunicatii</a>" +
										"<a href='#' class='subtype'>Inteligenta artificiala</a>" +
										"<a href='#' class='subtype'>Algoritmica, stiinta computerelor</a>" +
									"</div>");
		}
		
		else if ($(".sanatate").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Fitness si dieta</a>" +
										"<a href='#' class='subtype'>Ma las de fumat</a>" +
										"<a href='#' class='subtype'>Parenting</a>" +
										"<a href='#' class='subtype'>Medicina naturista, ingrijire</a>" +
										"<a href='#' class='subtype'>Familie, sanatate</a>" +
										"<a href='#' class='subtype'>Dezvoltare personala</a>" +
										"<a href='#' class='subtype'>Feng Shui</a>" +
										"<a href='#' class='subtype'>Fenomene paranormale</a>" +
										"<a href='#' class='subtype'>Interpretarea viselor</a>" +
										"<a href='#' class='subtype'>Terapii complementare</a>" +
										"<a href='#' class='subtype'>Astrologie</a>" +
										"<a href='#' class='subtype'>Numerologie</a>" +
										"<a href='#' class='subtype'>Cartomantie, alte preziceri</a>" +
										"<a href='#' class='subtype'>Minte, corp, spirit</a>" +
									"</div>");
		}
		
		else if ($(".sport").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Carti de colorat pentru adulti</a>" +
										"<a href='#' class='subtype'>Antichitati, colectii</a>" +
										"<a href='#' class='subtype'>Hobby, jocuri</a>" +
										"<a href='#' class='subtype'>Obiecte decorative</a>" +
										"<a href='#' class='subtype'>Navigatie</a>" +
										"<a href='#' class='subtype'>Motociclism</a>" +
										"<a href='#' class='subtype'>Auto, transport, deplasare</a>" +
										"<a href='#' class='subtype'>Umor</a>" +
										"<a href='#' class='subtype'>Lifestyle, fashion</a>" +
										"<a href='#' class='subtype'>Casa, gradina, familie</a>" +
										"<a href='#' class='subtype'>Lumea naturii, animale</a>" +
										"<a href='#' class='subtype'>Sport si recreere</a>" +
										"<a href='#' class='subtype'>Calatorii</a>" +
									"</div>");
		}
		
		else if ($(".ptCopii").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Dezvoltare personala adolescenti</a>" +
										"<a href='#' class='subtype'>Inteligenta emotionala copii</a>" +
										"<a href='#' class='subtype'>Carti de colorat pentru copii</a>" +
										"<a href='#' class='subtype'>Carti ilustrate, interactive</a>" +
										"<a href='#' class='subtype'>Poezii, antologii</a>" +
										"<a href='#' class='subtype'>Fictiuni, povestioare</a>" +
										"<a href='#' class='subtype'>Hobby-uri</a>" +
										"<a href='#' class='subtype'>Materiale educationale</a>" +
										"<a href='#' class='subtype'>Enciclopedii, dictionare, atlase</a>" +
										"<a href='#' class='subtype'>Problemele tinerilor</a>" +
									"</div>");
		}
		
		else if ($(".romania").is(":hover"))
		{
			$(".description").html("");
		}
		
		else if ($(".softEducational").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='#' class='subtype'>Primar</a>" +
										"<a href='#' class='subtype'>Gimnazial</a>" +
										"<a href='#' class='subtype'>Liceal</a>" +
										"<a href='#' class='subtype'>Pachete educationale</a>" +
									"</div>");
		}
		
	}, function() {});
});