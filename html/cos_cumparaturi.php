<?php
session_start();
?>

<! DOCTYPE HTML>
<html lang="en">
	<head>
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta charset="UTF-8">
		<title> SomethingTest.com </title>
		<link rel="stylesheet" href="../css/cos_cumparaturi.css">
		<link rel="shortcut icon" href="../images/favicon.ico">
		<script src="https://kit.fontawesome.com/6f6bccd148.js" crossorigin="anonymous"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<!-- Load React API -->
		<script src= "https://unpkg.com/react@16/umd/react.production.min.js"></script>
		<!-- Load React DOM-->
		<script src= "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
		<!-- Load Babel Compiler -->
		<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
	</head>
	<body>
		<div class="page">
			<header>
                <nav>
				<!-- Page logo -->
					<?php 
						echo '<a href="index.php">
							      <img src="../images/logo/logo3.jpg" class="logoImg" style="width:30px; height:30px;">
							  </a>';
					?>
					
                    <ul class="nav-links">
                        <li class="pages">
							<!-- Dropdown menu cu Produse -->
							<div class="dropdown-menu element">
								<button class="dropdown-btn"> Produse <i class="fas fa-angle-down"></i></button>
								
								<div id="produse" class="dropdown-pages">
									<div class="trProd"></div>
									<div class="content">
										<div class="sidebar">
											<ul class="sidebar-links">
												<li class="types">
													<?php 
														echo '<a href="books_subtypes/audiobooks.php" class="bookTypes audiobooks">AUDIOBOOKS</a>';
														echo '<a href="books_subtypes/culinare.php" class="bookTypes culinare">CULINARE</a>';
														echo '<a href="#" class="bookTypes arta">ARTA, ARHITECTURA</a>';
														echo '<a href="books_subtypes/enciclopedii.php" class="bookTypes enciclopedii">ENCICLOPEDII</a>';
														echo '<a href="#" class="bookTypes reviste">REVISTE</a>';
														echo '<a href="books_subtypes/biografii_memorii_jurnale.php" class="bookTypes biografii">BIOGRAFII, MEMORII, JURNALE</a>';
														echo '<a href="#" class="bookTypes dictionare">LINGVISTICA, DICTIONARE</a>';
														echo '<a href="#" class="bookTypes limbiStraine">LIMBI STRAINE</a>';
														echo '<a href="#" class="bookTypes poezie">POEZIE, TEATRU, STUDII LITERARE</a>';
														echo '<a href="#" class="bookTypes fictiune">FICTIUNE</a>';
														echo '<a href="#" class="bookTypes benziDesenate">BENZI DESENATE</a>';
														echo '<a href="#" class="bookTypes atlase">GHIDURI SI HARTI TURISTICE, ATLASE</a>';
														echo '<a href="#" class="bookTypes istorie">ISTORIE</a>';
														echo '<a href="#" class="bookTypes religie">RELIGIE</a>';
														echo '<a href="#" class="bookTypes filosofie">FILOSOFIE</a>';
														echo '<a href="#" class="bookTypes psihologie">PSIHOLOGIE</a>';
														echo '<a href="#" class="bookTypes politica">STIINTE SOCIALE. POLITICA</a>';
														echo '<a href="#" class="bookTypes marketing">MARKETING SI COMUNICARE</a>';
														echo '<a href="#" class="bookTypes business">BUSINESS SI ECONOMIE</a>';
														echo '<a href="#" class="bookTypes drept">DREPT</a>';
														echo '<a href="#" class="bookTypes medicina">MEDICINA</a>';
														echo '<a href="#" class="bookTypes matematici">STIINTE EXACTE. MATEMATICI</a>';
														echo '<a href="#" class="bookTypes natura">NATURA SI MEDIU</a>';
														echo '<a href="#" class="bookTypes tehnologie">TEHNICA SI TEHNOLOGIE</a>';
														echo '<a href="#" class="bookTypes internet">COMPUTERE SI INTERNET</a>';
														echo '<a href="#" class="bookTypes sanatate">SANATATE, DEZVOLTARE PERSONALA</a>';
														echo '<a href="#" class="bookTypes sport">LIFESTYLE, SPORT, TIMP LIBER</a>';
														echo '<a href="#" class="bookTypes ptCopii">PENTRU COPII, ADOLESCENTI</a>';
														echo '<a href="books_subtypes/romania.php" class="bookTypes romania">ROMANIA</a>';
														echo '<a href="#" class="bookTypes softEducational">SOFT EDUCATIONAL</a>'; 
													?>
												</li>
											</ul>
										</div>

										<div class="description"></div>
									</div>
								</div>
							</div>
							
							<!-- Dropdown menu cu Celelalte doua pagini -->
							<div class="dropdown-menu element">
								<button class="dropdown-btn"> MyPage <i class="fas fa-angle-down"></i></button>
								<div class="dropdown-pages">
									<div class="trMyPage"></div>
									<?php 
										echo '<a href="despre_noi.php" class="myPage">DESPRE NOI</a>';
										echo '<a href="contact.php" class="myPage">CONTACT</a>'; 
									?>
								</div>
							</div>
                            
							<!-- Dropdown menu cu Logarea('Contul meu') -->
                            <div class="dropdown-menu element">
								<?php
									if($_SESSION['userId'])
										echo '<button class="dropdown-btn"><i class="fas fa-user-alt"></i> Profilul meu <i class="fas fa-angle-down"></i></button>';
									else
										echo '<button class="dropdown-btn"><i class="fas fa-user-alt"></i> Contul meu <i class="fas fa-angle-down"></i></button>';
								
									if(!$_SESSION['userId'])
										echo '<div class="dropdown-pages dropdown-cont">
												  <div class="trCont"></div>';
									else
									{
										echo '<div class="dropdown-pages dropdown-cont profile">';
										echo '<div class="trProfile"></div>';
									}
								
									
									echo '<div class="auth">';
									
									if(isset($_SESSION['userId']))
										echo '<form action="../php_includes/logout.php" method="POST" class="formLog">
												  <a href="profilul_meu.php" class="auth-btn myPage">CONTUL MEU</a>
												  <option disabled="disabled"></option>
												  <input type="submit" class="auth-btn myPage profileBtts" value="LOG OUT">
											  </form>';
									else
									{
										echo '<a href="log_in.php" class="auth-btn myPage">AUTENTIFICARE</a>';
										echo '<a href="sign_up.php" class="auth-btn myPage">INREGISTRARE</a>';
									}
									
									echo '</div>';
								?>
								
								</div>
							</div>
							
							<!-- Butoanele cu Cosul de cumparaturi si Sectiunea de ajutor -->
							<?php 
								echo '<a href="cos_cumparaturi.php" class="nav-btn element" id="cosAjutor"><i class="fab fa-opencart"></i>Cosul tau</a>';
								echo '<a href="help.php" class="nav-btn element" id="cosAjutor"><i class="far fa-question-circle"></i>Ajutor</a>'; 
							?>
                        </li>
                    </ul>
                </nav>
            </header>
			<main>
			
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend tristique elit, ut ultrices mauris luctus eget. 
				Etiam non odio vitae purus condimentum mollis. Nullam vitae dui viverra, blandit ligula ut, ornare velit. 
				Phasellus ornare commodo sapien at luctus. Nullam dignissim libero urna, nec molestie nisl aliquet ac. 
				Suspendisse potenti. Nunc vel consectetur ante. Phasellus posuere auctor ipsum. Pellentesque libero lacus, 
				pellentesque sit amet elementum a, tristique luctus massa. Sed ut enim condimentum, vestibulum erat vitae, 
				gravida libero. Vivamus eget massa et orci porta volutpat sed et justo. Vestibulum nec eros quam. 
				Etiam tincidunt diam eget orci convallis, sit amet malesuada ante malesuada. Etiam sit amet mauris 
				aliquet lacus egestas fermentum nec ac massa. Cras ullamcorper leo at consequat sagittis.
			</p>
			</br>
			</br>
			</br>
			
			<p>
				Fusce at ante sit amet augue aliquam egestas sollicitudin ac odio. 
				Quisque eget mi sit amet metus mattis condimentum. 
				Fusce fermentum nisi cursus, rutrum massa a, aliquet mauris. 
				Nam vitae justo vel elit pellentesque feugiat eu ultricies urna. 
				Aenean a placerat orci. Phasellus ac eleifend dui, rutrum ultrices mi. 
				Aenean pretium volutpat bibendum. Etiam consequat volutpat laoreet. 
				Vestibulum eu magna at nisi interdum pulvinar. Ut sagittis dolor eget velit iaculis, 
				sit amet pellentesque erat viverra. Mauris non odio ex. Cras consequat quam ac neque vulputate, 
				non porta odio sagittis. Phasellus id scelerisque ligula.
			</p>
			</br>
			</br>
			</br>
			
			<p>
				Ut dignissim dictum eros eget dignissim. In bibendum non urna quis mollis. 
				Aenean tempor facilisis erat tempor ultricies. Pellentesque quis malesuada purus. 
				Quisque a ipsum est. Praesent sit amet tempor est. Curabitur molestie 
				elementum augue et placerat. Maecenas scelerisque, leo at facilisis porta, 
				nisi felis suscipit orci, ac pellentesque purus nibh iaculis nulla. 
				Donec malesuada in ex vel laoreet. Maecenas ut turpis eget tortor 
				tristique accumsan non ac lacus. Phasellus felis mauris, pulvinar 
				a mattis sit amet, tempor eget justo. Pellentesque a rutrum elit.
			</p>
			</br>
			</br>
			</br>
			
			<p>
				Sed neque libero, aliquam at faucibus ultrices, tincidunt sed lorem. 
				Proin imperdiet dolor sed nibh pulvinar ornare. Praesent tincidunt nisl 
				nec ligula convallis semper. Nulla sit amet scelerisque metus, sit amet accumsan nisl. 
				Mauris pretium massa at nisl hendrerit, quis imperdiet turpis egestas. 
				Curabitur est massa, congue eu leo et, tempor imperdiet urna. 
				Proin ultrices auctor dapibus. Etiam nunc mi, rhoncus id odio ac, laoreet cursus quam.
			</p>
			</br>
			</br>
			</br>
			
			<p>
				Suspendisse semper lectus eget odio vulputate bibendum. Quisque maximus, 
				lorem eget ultrices iaculis, quam metus fringilla eros, sit amet posuere dolor leo ut felis. 
				Phasellus magna magna, volutpat eu hendrerit nec, bibendum eget magna. 
				Suspendisse egestas tempor elit a pellentesque. Quisque pellentesque ipsum ac tincidunt dignissim. 
				Nulla maximus tellus nec imperdiet malesuada. Cras tristique et arcu sit amet auctor. 
				Sed maximus erat sit amet massa facilisis, in mattis lorem auctor.
			</p>
			</br>
			</br>
			</br>
			</main>
			<footer>
				&#169 2020 Ganea Andreea-Maria. | All rights reserved.
			</footer>
		</div>
		
		<script src="../jQuery-JS/produse_booktypes.js"></script>
    </body>
</html>
	
