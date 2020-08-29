function getPageName(url)
{
	var index = url.lastIndexOf("/") + 1;
    var filename = url.substr(index);
	return filename;
}

var url = window.location.href;
var pageName = getPageName(url);
console.log(pageName, url);





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
										"<a href='books_subtypes/arta_arhitectura/teoria_artei.php' class='subtype'>Teoria artei</a>" +
										"<a href='books_subtypes/arta_arhitectura/istoria_artei.php' class='subtype'>Istoria artei</a>" +
										"<a href='books_subtypes/arta_arhitectura/pictura_grafica.php' class='subtype'>Pictura, grafica, alte forme artistice</a>" +
										"<a href='books_subtypes/arta_arhitectura/fotografie.php' class='subtype'>Fotografie</a>" +
										"<a href='books_subtypes/arta_arhitectura/arta_comerciala.php' class='subtype'>Arta comerciala si industriala</a>" +
										"<a href='books_subtypes/arta_arhitectura/graphic_design.php' class='subtype'>Graphic design</a>" +
										"<a href='books_subtypes/arta_arhitectura/arhitectura.php' class='subtype'>Arhitectura</a>" +
										"<a href='books_subtypes/arta_arhitectura/teatru.php' class='subtype'>Teatru</a>" +
										"<a href='books_subtypes/arta_arhitectura/film_tv_radio.php' class='subtype'>Film, TV, radio</a>" +
										"<a href='books_subtypes/arta_arhitectura/dans_performing_arts.php' class='subtype'>Dans, performing arts</a>" +
										"<a href='books_subtypes/arta_arhitectura/muzica.php' class='subtype'>Muzica</a>" +
									"</div>");
		}
		
		else if ($(".enciclopedii").is(":hover"))
		{
			$(".description").html("");
		}
		
		else if ($(".reviste").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/reviste/arta.php' class='subtype'>Arta</a>" +
										"<a href='books_subtypes/reviste/design.php' class='subtype'>Design</a>" +
										"<a href='books_subtypes/reviste/arhitectura.php' class='subtype'>Arhitectura</a>" +
										"<a href='books_subtypes/reviste/film_tv_radio.php' class='subtype'>Film, TV, radio</a>" +
										"<a href='books_subtypes/reviste/literatura.php' class='subtype'>Literatura</a>" +
										"<a href='books_subtypes/reviste/politica_diplomatie.php' class='subtype'>Politica si diplomatie</a>" +
										"<a href='books_subtypes/reviste/teatru_dans.php' class='subtype'>Teatru si dans</a>" +
										"<a href='books_subtypes/reviste/fotografie.php' class='subtype'>Fotografie</a>" +
										"<a href='books_subtypes/reviste/muzica.php' class='subtype'>Muzica</a>" +
										"<a href='books_subtypes/reviste/cultura_urbana_traditionala.php' class='subtype'>Cultura urbana si traditionala</a>" +
										"<a href='books_subtypes/reviste/istorie.php' class='subtype'>Istorie</a>" +
										"<a href='books_subtypes/reviste/culinare.php' class='subtype'>Culinare</a>" +
									"</div>");
		}
		
		else if ($(".biografii").is(":hover"))
		{
			$(".description").html("");
		}
		
		else if ($(".dictionare").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/lingvistica_dictionare/dictionare.php' class='subtype'>Dictionare</a>" +
										"<a href='books_subtypes/lingvistica_dictionare/gramatica.php' class='subtype'>Gramatica</a>" +
										"<a href='books_subtypes/lingvistica_dictionare/creative_writing.php' class='subtype'>Creative writing</a>" +
										"<a href='books_subtypes/lingvistica_dictionare/istoria_limbajului.php' class='subtype'>Istoria limbajului</a>" +
										"<a href='books_subtypes/lingvistica_dictionare/lingvistica.php' class='subtype'>Lingvistica</a>" +
										"<a href='books_subtypes/lingvistica_dictionare/biblioteconomie.php' class='subtype'>Biblioteconomie</a>" +
									"</div>");
		}
		
		else if ($(".limbiStraine").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/limbi_straine/invatarea_limbilor_straine.php' class='subtype'>Invatarea limbilor straine</a>" +
										"<a href='books_subtypes/limbi_straine/dictionare.php' class='subtype'>Dictionare</a>" +
									"</div>");
		}
		
		else if ($(".poezie").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/poezie_teatru_studii_literare/poezie.php' class='subtype'>Poezie</a>" +
										"<a href='books_subtypes/poezie_teatru_studii_literare/piese_teatru_scenarii.php' class='subtype'>Piese de teatru, scenarii</a>" +
										"<a href='books_subtypes/poezie_teatru_studii_literare/eseistica.php' class='subtype'>Eseistica</a>" +
										"<a href='books_subtypes/poezie_teatru_studii_literare/antologii.php' class='subtype'>Antologii</a>" +
										"<a href='books_subtypes/poezie_teatru_studii_literare/istorie_critica.php' class='subtype'>Istorie si critica</a>" +
									"</div>");
		}
		
		else if ($(".fictiune").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/fictiune/clasici.php' class='subtype'>Clasici</a>" +
										"<a href='books_subtypes/fictiune/moderni_contemporani.php' class='subtype'>Moderni, contemporani</a>" +
										"<a href='books_subtypes/fictiune/crime_mister.php' class='subtype'>Crime, mister</a>" +
										"<a href='books_subtypes/fictiune/thriller_horror.php' class='subtype'>Thriller, horror</a>" +
										"<a href='books_subtypes/fictiune/young_adult.php' class='subtype'>Young adult</a>" +
										"<a href='books_subtypes/fictiune/aventura.php' class='subtype'>Aventura</a>" +
										"<a href='books_subtypes/fictiune/sf.php' class='subtype'>SF</a>" +
										"<a href='books_subtypes/fictiune/fantasy.php' class='subtype'>Fantasy</a>" +
										"<a href='books_subtypes/fictiune/fictiune_erotica.php' class='subtype'>Fictiune erotica</a>" +
										"<a href='books_subtypes/fictiune/fictiune_mitologica_istorica.php' class='subtype'>Fictiune mitologica si istorica</a>" +
										"<a href='books_subtypes/fictiune/romance.php' class='subtype'>Romance</a>" +
										"<a href='books_subtypes/fictiune/saga.php' class='subtype'>Saga</a>" +
										"<a href='books_subtypes/fictiune/proza_scurta.php' class='subtype'>Proza scurta, altele</a>" +
									"</div>");
		}
		
		else if ($(".benziDesenate").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/benzi_desenate/romane_ilustrate.php' class='subtype'>Romane ilustrate</a>" +
										"<a href='books_subtypes/benzi_desenate/comics_manga.php' class='subtype'>Comics & Manga</a>" +
										"<a href='books_subtypes/benzi_desenate/manga.php' class='subtype'>Manga</a>" +
									"</div>");
		}
		
		else if ($(".atlase").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/ghiduri_atlase/anuare.php' class='subtype'>Anuare, Who`s Who</a>" +
										"<a href='books_subtypes/ghiduri_atlase/atlase_harti_referinte_geo.php' class='subtype'>Atlase, harti, referinte geografice</a>" +
										"<a href='books_subtypes/ghiduri_atlase/turism_calatorii.php' class='subtype'>Turism si calatorii</a>" +
									"</div>");
		}
		
		else if ($(".istorie").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/istorie/istorie_generala.php' class='subtype'>Istorie generala</a>" +
										"<a href='books_subtypes/istorie/arheologie.php' class='subtype'>Arheologie</a>" +
										"<a href='books_subtypes/istorie/istoria_europei.php' class='subtype'>Istoria Europei</a>" +
										"<a href='books_subtypes/istorie/istoria_romanilor.php' class='subtype'>Istoria romanilor</a>" +
										"<a href='books_subtypes/istorie/istorie_militara_aparare.php' class='subtype'>Istorie militara, aparare</a>" +
										"<a href='books_subtypes/istorie/muzeologie.php' class='subtype'>Muzeologie</a>" +
										"<a href='books_subtypes/istorie/relatii_internationale.php' class='subtype'>Relatii internationale</a>" +
										"<a href='books_subtypes/istorie/istorie_universala.php' class='subtype'>Istorie universala</a>" +
										"<a href='books_subtypes/istorie/istorie_economica.php' class='subtype'>Istorie economica</a>" +
										"<a href='books_subtypes/istorie/istoria_mentalitatilor.php' class='subtype'>Istoria mentalitatilor</a>" +
										"<a href='books_subtypes/istorie/istorii_secrete.php' class='subtype'>Istorii secrete</a>" +
									"</div>");
		}
		
		else if ($(".religie").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/religie/generalitati_istoria_religiilor.php' class='subtype'>Generalitati, istoria religiilor</a>" +
										"<a href='books_subtypes/religie/crestinism.php' class='subtype'>Crestinism</a>" +
										"<a href='books_subtypes/religie/buddhism.php' class='subtype'>Buddhism</a>" +
										"<a href='books_subtypes/religie/hinduism.php' class='subtype'>Hinduism</a>" +
										"<a href='books_subtypes/religie/islam.php' class='subtype'>Islam</a>" +
										"<a href='books_subtypes/religie/iudaism.php' class='subtype'>Iudaism</a>" +
										"<a href='books_subtypes/religie/alte_religii_credinte.php' class='subtype'>Alte religii si credinte</a>" +
									"</div>");
		}
		
		else if ($(".filosofie").is(":hover"))
		{
			$(".description").html(" <div class='typesB'>" +
										"<a href='books_subtypes/filosofie/istoria_filosofiei_occidentale.php' class='subtype'>Istoria filosofiei occidentale</a>" +
										"<a href='books_subtypes/filosofie/metafizica_ontologie.php' class='subtype'>Metafizica si ontologie</a>" +
										"<a href='books_subtypes/filosofie/epistemologie_teoria_coasterii.php' class='subtype'>Epistemologie, teoria cunoasterii</a>" +
										"<a href='books_subtypes/filosofie/logica.php' class='subtype'>Logica</a>" +
										"<a href='books_subtypes/filosofie/filosofia_mintii.php' class='subtype'>Filosofia mintii</a>" +
										"<a href='books_subtypes/filosofie/filosofia_limbajului.php' class='subtype'>Filosofia limbajului</a>" +
										"<a href='books_subtypes/filosofie/estetica.php' class='subtype'>Estetica</a>" +
										"<a href='books_subtypes/filosofie/semiotica.php' class='subtype'>Semiotica</a>" +
										"<a href='books_subtypes/filosofie/etica_morala.php' class='subtype'>Etica si morala</a>" +
										"<a href='books_subtypes/filosofie/filosofia_stiintei.php' class='subtype'>Filosofia stiintei</a>" +
										"<a href='books_subtypes/filosofie/filosofie_social-politica.php' class='subtype'>Filosofie social-politica</a>" +
										"<a href='books_subtypes/filosofie/filosofie_non-occidentala.php' class='subtype'>Filosofie non-occidentala</a>" +
										"<a href='books_subtypes/filosofie/filosofie_populara.php' class='subtype'>Filosofie populara</a>" +
									"</div>");
		}
		
		else if ($(".psihologie").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/psihologie/teorie_generala_scoli.php' class='subtype'>Teorie generala, scoli</a>" +
										"<a href='books_subtypes/psihologie/metodologie_testare.php' class='subtype'>Metodologie, testare</a>" +
										"<a href='books_subtypes/psihologie/psihologia_copilului_dezvoltarii.php' class='subtype'>Psihologia copilului si dezvoltarii</a>" +
										"<a href='books_subtypes/psihologie/psihologia_varstelor_sexelor.php' class='subtype'>Psihologia varstelor si a sexelor</a>" +
										"<a href='books_subtypes/psihologie/psihologia_familiei.php' class='subtype'>Psihologia familiei</a>" +	
										"<a href='books_subtypes/psihologie/psihologia_sociala_grup.php' class='subtype'>Psihologia sociala si de grup</a>" +
										"<a href='books_subtypes/psihologie/psihologia_ocupationala.php' class='subtype'>Psihologia ocupationala</a>" +
										"<a href='books_subtypes/psihologie/psihologia_criminalistica_legala.php' class='subtype'>Psihologia criminalistica si legala</a>" +
										"<a href='books_subtypes/psihologie/psihologia_experimentala.php' class='subtype'>Psihologia experimentala</a>" +
										"<a href='books_subtypes/psihologie/neuropsihologie_biopsihologie.php' class='subtype'>Neuropsihologie, biopsihologie</a>" +	
										"<a href='books_subtypes/psihologie/psihologia_emotiilor.php' class='subtype'>Psihologia emotiilor</a>" +
										"<a href='books_subtypes/psihologie/psihologia_cognitiva.php' class='subtype'>Psihologia cognitiva</a>" +
										"<a href='books_subtypes/psihologie/eu_ego_identitate_personalitate.php' class='subtype'>Eu, ego, identitate, personalitate</a>" +
									"</div>");
		}
		
		else if ($(".politica").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/stiinte_sociale_politica/studii_culturale.php' class='subtype'>Studii culturale</a>" +
										"<a href='books_subtypes/stiinte_sociale_politica/studii_interdisciplinare.php' class='subtype'>Studii interdisciplinare</a>" +
										"<a href='books_subtypes/stiinte_sociale_politica/sociologie_antropologie.php' class='subtype'>Sociologie, antropologie</a>" +
										"<a href='books_subtypes/stiinte_sociale_politica/criminologie.php' class='subtype'>Criminologie</a>" +
										"<a href='books_subtypes/stiinte_sociale_politica/servicii_sociale.php' class='subtype'>Servicii sociale</a>" +
										"<a href='books_subtypes/stiinte_sociale_politica/educatie.php' class='subtype'>Educatie</a>" +
										"<a href='books_subtypes/stiinte_sociale_politica/politologie_guvernare.php' class='subtype'>Politologie si guvernare</a>" +
										"<a href='books_subtypes/stiinte_sociale_politica/relatii_internationale.php' class='subtype'>Relatii internationale</a>" +
										"<a href='books_subtypes/stiinte_sociale_politica/doctrine_partide_politice.php' class='subtype'>Doctrine si partide politice</a>" +
										"<a href='books_subtypes/stiinte_sociale_politica/aparare_nationala.php' class='subtype'>Aparare nationala</a>" +
									"</div>");
		}
		
		else if ($(".marketing").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/marketing_comunicare/publicitate_media.php' class='subtype'>Publicitate si media</a>" +
										"<a href='books_subtypes/marketing_comunicare/strategie.php' class='subtype'>Strategie</a>" +
										"<a href='books_subtypes/marketing_comunicare/studiul_pietei.php' class='subtype'>Studiul pietei</a>" +
										"<a href='books_subtypes/marketing_comunicare/relatii_publice.php' class='subtype'>Relatii publice</a>" +
										"<a href='books_subtypes/marketing_comunicare/servicii_client.php' class='subtype'>Servicii client</a>" +
										"<a href='books_subtypes/marketing_comunicare/creative_writing.php' class='subtype'>Creative writing</a>" +
										"<a href='books_subtypes/marketing_comunicare/industria_comunicarii.php' class='subtype'>Industria comunicarii</a>" +
									"</div>");
		}
		
		else if ($(".business").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/business_economie/economie.php' class='subtype'>Economie</a>" +
										"<a href='books_subtypes/business_economie/finante_contabilitate.php' class='subtype'>Finante si contabilitate</a>" +
										"<a href='books_subtypes/business_economie/e-commerce.php' class='subtype'>E-commerce</a>" +
										"<a href='books_subtypes/business_economie/business.php' class='subtype'>Business</a>" +
										"<a href='books_subtypes/business_economie/antreprenoriat.php' class='subtype'>Antreprenoriat</a>" +
										"<a href='books_subtypes/business_economie/tehnici_management.php' class='subtype'>Tehnici de management</a>" +
										"<a href='books_subtypes/business_economie/marketing_vanzari.php' class='subtype'>Marketing si vanzari</a>" +
										"<a href='books_subtypes/business_economie/birotica_ergonomie.php' class='subtype'>Birotica, ergonomie</a>" +
									"</div>");
		}
		
		else if ($(".drept").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/drept/drept_international.php' class='subtype'>Drept international</a>" +
										"<a href='books_subtypes/drept/teorie_generala_jurisprudenta.php' class='subtype'>Teorie generala, jurisprudenta</a>" +
										"<a href='books_subtypes/drept/drept_civil.php' class='subtype'>Drept civil</a>" +
										"<a href='books_subtypes/drept/drept_comercial.php' class='subtype'>Drept comercial</a>" +
										"<a href='books_subtypes/drept/drept_constitutional.php' class='subtype'>Drept constitutional</a>" +
										"<a href='books_subtypes/drept/drept_penal.php' class='subtype'>Drept penal</a>" +
										"<a href='books_subtypes/drept/legislatia_muncii.php' class='subtype'>Legislatia muncii</a>" +
										"<a href='books_subtypes/drept/mass-media_calomnie.php' class='subtype'>Mass-media, calomnie</a>" +
										"<a href='books_subtypes/drept/dreptul_mediului_transport.php' class='subtype'>Dreptul mediului, transport</a>" +
										"<a href='books_subtypes/drept/drept_corporatist.php' class='subtype'>Drept corporatist</a>" +
										"<a href='books_subtypes/drept/dreptul_familiei.php' class='subtype'>Dreptul familiei</a>" +
										"<a href='books_subtypes/drept/drept_financiar.php' class='subtype'>Drept financiar</a>" +
										"<a href='books_subtypes/drept/it_comunicatii.php' class='subtype'>IT si comunicatii</a>" +
										"<a href='books_subtypes/drept/proprietate_intelectuala.php' class='subtype'>Proprietate intelectuala</a>" +
										"<a href='books_subtypes/drept/drept_social.php' class='subtype'>Drept social</a>" +
										"<a href='books_subtypes/drept/impozite_taxe.php' class='subtype'>Impozite si taxe</a>" +
										"<a href='books_subtypes/drept/testament_succesiune.php' class='subtype'>Testament, succesiune</a>" +
									"</div>");
		}
		
		else if ($(".medicina").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/medicina/aspecte_generale.php' class='subtype'>Aspecte generale</a>" +
										"<a href='books_subtypes/medicina/preclinic_anatomie_fiziologie.php' class='subtype'>Preclinic: anatomie, fiziologie</a>" +
										"<a href='books_subtypes/medicina/medicina_clinica_interna.php' class='subtype'>Medicina clinica si interna</a>" +
										"<a href='books_subtypes/medicina/stomatologie.php' class='subtype'>Stomatologie</a>" +
										"<a href='books_subtypes/medicina/farmacologie.php' class='subtype'>Farmacologie</a>" +
										"<a href='books_subtypes/medicina/psihiatrie_psihologie_clinica_terapii.php' class='subtype'>Psihiatrie, psihologie clinica, terapii</a>" +
										"<a href='books_subtypes/medicina/medicina_sportiva.php' class='subtype'>Medicina sportiva</a>" +
										"<a href='books_subtypes/medicina/alte_forme_medicina.php' class='subtype'>Alte forme de medicina</a>" +
										"<a href='books_subtypes/medicina/chirurgie.php' class='subtype'>Chirurgie</a>" +
										"<a href='books_subtypes/medicina/ingrijire_asistenta.php' class='subtype'>Ingrijire si asistenta</a>" +
										"<a href='books_subtypes/medicina/ghiduri_referinte.php' class='subtype'>Ghiduri si referinte</a>" +
										"<a href='books_subtypes/medicina/medicina_complementara.php' class='subtype'>Medicina complementara</a>" +
										"<a href='books_subtypes/medicina/medicina_veterinara.php' class='subtype'>Medicina veterinara</a>" +
									"</div>");
		}
		
		else if ($(".matematici").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/stiinte_exacte_matematici/matematica.php' class='subtype'>Matematica</a>" +
										"<a href='books_subtypes/stiinte_exacte_matematici/istoria_stiitei_generalitati.php' class='subtype'>Istoria stiintei si generalitati</a>" +
										"<a href='books_subtypes/stiinte_exacte_matematici/astronomie_spatiu_timp.php' class='subtype'>Astronomie, spatiu, timp</a>" +
										"<a href='books_subtypes/stiinte_exacte_matematici/fizica.php' class='subtype'>Fizica</a>" +
										"<a href='books_subtypes/stiinte_exacte_matematici/chimie.php' class='subtype'>Chimie</a>" +
										"<a href='books_subtypes/stiinte_exacte_matematici/biologie.php' class='subtype'>Biologie</a>" +
									"</div>");
		}
		
		else if ($(".natura").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/natura_mediu/stiintele_pamantului.php' class='subtype'>Stiintele Pamantului</a>" +
										"<a href='books_subtypes/natura_mediu/geografie.php' class='subtype'>Geografie</a>" +
										"<a href='books_subtypes/natura_mediu/mediu_ecologie.php' class='subtype'>Mediu si ecologie</a>" +
										"<a href='books_subtypes/natura_mediu/planificare_regionala_rubana.php' class='subtype'>Planificare regionala si urbana</a>" +
									"</div>");
		}
		
		else if ($(".tehnologie").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/tehnica_tehnologie/tehnologie_generalitati.php' class='subtype'>Tehnologie: generalitati</a>" +
										"<a href='books_subtypes/tehnica_tehnologie/mecanica_stiinta_materialelor.php' class='subtype'>Mecanica si stiinta materialelor</a>" +
										"<a href='books_subtypes/tehnica_tehnologie/energetica.php' class='subtype'>Energetica</a>" +
										"<a href='books_subtypes/tehnica_tehnologie/electronica_comunicatii.php' class='subtype'>Electronica si comunicatii</a>" +
										"<a href='books_subtypes/tehnica_tehnologie/constructii.php' class='subtype'>Constructii</a>" +
										"<a href='books_subtypes/tehnica_tehnologie/transporturi.php' class='subtype'>Transporturi</a>" +
										"<a href='books_subtypes/tehnica_tehnologie/alte_tehnologii.php' class='subtype'>Alte tehnologii</a>" +
										"<a href='books_subtypes/tehnica_tehnologie/agricultura.php' class='subtype'>Agricultura</a>" +
									"</div>");
		}
		
		else if ($(".internet").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/computere_internet/lifestyle_digital.php' class='subtype'>Lifestyle digital</a>" +
										"<a href='books_subtypes/computere_internet/app_business_erp.php' class='subtype'>Aplicatii de business, ERP</a>" +
										"<a href='books_subtypes/computere_internet/grafica.php' class='subtype'>Grafica</a>" +
										"<a href='books_subtypes/computere_internet/hardware.php' class='subtype'>Hardware</a>" +
										"<a href='books_subtypes/computere_internet/sisteme_operare.php' class='subtype'>Sisteme de operare</a>" +
										"<a href='books_subtypes/computere_internet/programare_dezvoltare.php' class='subtype'>Programare, dezvoltare</a>" +
										"<a href='books_subtypes/computere_internet/baze_date.php' class='subtype'>Baze de date</a>" +
										"<a href='books_subtypes/computere_internet/certificari.php' class='subtype'>Certificari</a>" +
										"<a href='books_subtypes/computere_internet/securitate.php' class='subtype'>Securitate</a>" +
										"<a href='books_subtypes/computere_internet/retele_comunicatii.php' class='subtype'>Retele si comunicatii</a>" +
										"<a href='books_subtypes/computere_internet/AI.php' class='subtype'>Inteligenta artificiala</a>" +
										"<a href='books_subtypes/computere_internet/algoritmica.php' class='subtype'>Algoritmica, stiinta computerelor</a>" +
									"</div>");
		}
		
		else if ($(".sanatate").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/fitness_dieta.php' class='subtype'>Fitness si dieta</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/ma_las_de_fumat.php' class='subtype'>Ma las de fumat</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/parenting.php' class='subtype'>Parenting</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/medicina_naturista_ingrijire.php' class='subtype'>Medicina naturista, ingrijire</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/familie_sanatate.php' class='subtype'>Familie, sanatate</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/dezvoltare_personala.php' class='subtype'>Dezvoltare personala</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/feng_shui.php' class='subtype'>Feng Shui</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/fenomene_paranormale.php' class='subtype'>Fenomene paranormale</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/interpretarea_viselor.php' class='subtype'>Interpretarea viselor</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/terapii_complementare.php' class='subtype'>Terapii complementare</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/astrologie.php' class='subtype'>Astrologie</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/numerologie.php' class='subtype'>Numerologie</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/cartomantie_preziceri.php' class='subtype'>Cartomantie, alte preziceri</a>" +
										"<a href='books_subtypes/sanatate_dezvoltare_personala/minte_corp_spirit.php' class='subtype'>Minte, corp, spirit</a>" +
									"</div>");
		}
		
		else if ($(".sport").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/lifestyle_sport/carti_colorat_adulti.php' class='subtype'>Carti de colorat pentru adulti</a>" +
										"<a href='books_subtypes/lifestyle_sport/antichitati_colectii.php' class='subtype'>Antichitati, colectii</a>" +
										"<a href='books_subtypes/lifestyle_sport/hobby_jocuri.php' class='subtype'>Hobby, jocuri</a>" +
										"<a href='books_subtypes/lifestyle_sport/obiecte_decorative.php' class='subtype'>Obiecte decorative</a>" +
										"<a href='books_subtypes/lifestyle_sport/navigatie.php' class='subtype'>Navigatie</a>" +
										"<a href='books_subtypes/lifestyle_sport/motociclism.php' class='subtype'>Motociclism</a>" +
										"<a href='books_subtypes/lifestyle_sport/auto_transport_deplasare.php' class='subtype'>Auto, transport, deplasare</a>" +
										"<a href='books_subtypes/lifestyle_sport/umor.php' class='subtype'>Umor</a>" +
										"<a href='books_subtypes/lifestyle_sport/lifestyle_fashion.php' class='subtype'>Lifestyle, fashion</a>" +
										"<a href='books_subtypes/lifestyle_sport/casa_gradina_familie.php' class='subtype'>Casa, gradina, familie</a>" +
										"<a href='books_subtypes/lifestyle_sport/lumea_naturii_animale.php' class='subtype'>Lumea naturii, animale</a>" +
										"<a href='books_subtypes/lifestyle_sport/sport_recreere.php' class='subtype'>Sport si recreere</a>" +
										"<a href='books_subtypes/lifestyle_sport/calatorii.php' class='subtype'>Calatorii</a>" +
									"</div>");
		}
		
		else if ($(".ptCopii").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/pentru_copii_adolescenti/dezvoltare_personala_adolescenti.php' class='subtype'>Dezvoltare personala adolescenti</a>" +
										"<a href='books_subtypes/pentru_copii_adolescenti/inteligenta_emotionala_copii.php' class='subtype'>Inteligenta emotionala copii</a>" +
										"<a href='books_subtypes/pentru_copii_adolescenti/carti_colorat_copii.php' class='subtype'>Carti de colorat pentru copii</a>" +
										"<a href='books_subtypes/pentru_copii_adolescenti/carti_ilustrate_interactive.php' class='subtype'>Carti ilustrate, interactive</a>" +
										"<a href='books_subtypes/pentru_copii_adolescenti/poezii_antologii.php' class='subtype'>Poezii, antologii</a>" +
										"<a href='books_subtypes/pentru_copii_adolescenti/fictiuni_povestioare.php' class='subtype'>Fictiuni, povestioare</a>" +
										"<a href='books_subtypes/pentru_copii_adolescenti/hobby-uri.php' class='subtype'>Hobby-uri</a>" +
										"<a href='books_subtypes/pentru_copii_adolescenti/materiale_educationale.php' class='subtype'>Materiale educationale</a>" +
										"<a href='books_subtypes/pentru_copii_adolescenti/enciclopedii_dictionare_atlase.php' class='subtype'>Enciclopedii, dictionare, atlase</a>" +
										"<a href='books_subtypes/pentru_copii_adolescenti/problemele_tinerilor.php' class='subtype'>Problemele tinerilor</a>" +
									"</div>");
		}
		
		else if ($(".romania").is(":hover"))
		{
			$(".description").html("");
		}
		
		else if ($(".softEducational").is(":hover"))
		{
			$(".description").html( "<div class='typesB'>" +
										"<a href='books_subtypes/primar.php' class='subtype'>Primar</a>" +
										"<a href='books_subtypes/gimnazial.php' class='subtype'>Gimnazial</a>" +
										"<a href='books_subtypes/liceal.php' class='subtype'>Liceal</a>" +
										"<a href='books_subtypes/pachete_educationale.php' class='subtype'>Pachete educationale</a>" +
									"</div>");
		}
		
	}, function() {});
});