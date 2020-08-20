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
					<?php echo '<a href="index.php">
									<img src="../images/logo/logo3.jpg" class="logoImg" style="width:30px; height:30px;">
								</a>';
					?>
					
                    <ul class="nav-links">
                        <li class="pages">
							<!-- Dropdown menu cu Produse -->
							<div class="dropdown-menu element">
								<button class="dropdown-btn"> Produse <i class="fas fa-angle-down"></i></button>
								
								<div id="produse" class="dropdown-pages">
									<div class="content">
										<div class="sidebar">
											<ul class="sidebar-links">
												<li class="types">
													<?php echo '<a href="#" class="bookTypes audiobooks">AUDIOBOOKS</a>'; ?>
													<?php echo '<a href="#" class="bookTypes culinare">CULINARE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes arta">ARTA, ARHITECTURA</a>'; ?>
													<?php echo '<a href="#" class="bookTypes enciclopedii">ENCICLOPEDII</a>'; ?>
													<?php echo '<a href="#" class="bookTypes reviste">REVISTE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes biografii">BIOGRAFII, MEMORII, JURNALE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes dictionare">LINGVISTICA, DICTIONARE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes limbiStraine">LIMBI STRAINE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes poezie">POEZIE, TEATRU, STUDII LITERARE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes fictiune">FICTIUNE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes benziDesenate">BENZI DESENATE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes atlase">GHIDURI SI HARTI TURISTICE, ATLASE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes istorie">ISTORIE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes religie">RELIGIE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes filosofie">FILOSOFIE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes psihologie">PSIHOLOGIE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes politica">STIINTE SOCIALE. POLITICA</a>'; ?>
													<?php echo '<a href="#" class="bookTypes marketing">MARKETING SI COMUNICARE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes business">BUSINESS SI ECONOMIE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes drept">DREPT</a>'; ?>
													<?php echo '<a href="#" class="bookTypes medicina">MEDICINA</a>'; ?>
													<?php echo '<a href="#" class="bookTypes matematici">STIINTE EXACTE. MATEMATICI</a>'; ?>
													<?php echo '<a href="#" class="bookTypes natura">NATURA SI MEDIU</a>'; ?>
													<?php echo '<a href="#" class="bookTypes tehnologie">TEHNICA SI TEHNOLOGIE</a>'; ?>
													<?php echo '<a href="#" class="bookTypes internet">COMPUTERE SI INTERNET</a>'; ?>
													<?php echo '<a href="#" class="bookTypes sanatate">SANATATE, DEZVOLTARE PERSONALA</a>'; ?>
													<?php echo '<a href="#" class="bookTypes sport">LIFESTYLE, SPORT, TIMP LIBER</a>'; ?>
													<?php echo '<a href="#" class="bookTypes ptCopii">PENTRU COPII, ADOLESCENTI</a>'; ?>
													<?php echo '<a href="#" class="bookTypes romania">ROMANIA</a>'; ?>
													<?php echo '<a href="#" class="bookTypes softEducational">SOFT EDUCATIONAL</a>'; ?>
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
									<?php echo '<a href="despre_noi.php" class="myPage">DESPRE NOI</a>'; ?>
									<?php echo '<a href="contact.php" class="myPage">CONTACT</a>'; ?>
								</div>
							</div>
                            
							<!-- Dropdown menu cu Logarea('Contul meu') -->
							<div class="dropdown-menu element">
								<?php
									if($_SESSION['userId'])
										echo '<button class="dropdown-btn profile"><i class="fas fa-user-alt"></i> Profilul meu <i class="fas fa-angle-down"></i></button>';
									else
										echo '<button class="dropdown-btn"><i class="fas fa-user-alt"></i> Contul meu <i class="fas fa-angle-down"></i></button>';
								?>
								<?php
									if(!$_SESSION['userId'])
										echo '<div class="dropdown-pages dropdown-cont">
												  <p class="contDesc">
													  Vivamus consectetur, turpis nisl rhoncus risus non molestie magna.
												  </p>';
									else
										echo '<div class="dropdown-pages dropdown-cont profile">';
								?>
									
									<div class="auth">
										<?php
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
										?>
									</div>
								</div>
							</div>
							
							<!-- Butoanele cu Cosul de cumparaturi si Sectiunea de ajutor -->
							<?php echo '<a href="cos_cumparaturi.php" class="nav-btn element" id="cosAjutor"><i class="fab fa-opencart"></i>Cosul tau</a>'; ?>
							<?php echo '<a href="help.php" class="nav-btn element" id="cosAjutor"><i class="far fa-question-circle"></i>Ajutor</a>'; ?>
                        </li>
                    </ul>
                </nav>
            </header>
			<main>

			</main>
			<footer>
				&#169 2020 Ganea Andreea-Maria. | All rights reserved.
			</footer>
		</div>
		
		<script src="../jQuery-JS/produse_booktypes.js"></script>
    </body>
</html>
	
