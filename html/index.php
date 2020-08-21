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
		<link rel="stylesheet" href="../css/index.css">
		<link rel="shortcut icon" href="../images/favicon.ico">
		<!-- Font Awesome Icons -->
		<script src="https://kit.fontawesome.com/6f6bccd148.js" crossorigin="anonymous"></script>
		<!-- Jquery -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<!-- Load React API -->
		<script src= "https://unpkg.com/react@16/umd/react.production.min.js"></script>
		<!-- Load React DOM-->
		<script src= "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
		<!-- Load Babel Compiler -->
		<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
		<!-- Google Fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Quicksand&family=Raleway&family=Zilla+Slab&display=swap" rel="stylesheet">
		<!--<script src="../jQuery-JS/recomandari_react_V1.js" type="text/jsx"></script>-->
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
														echo '<a href="#" class="bookTypes audiobooks">AUDIOBOOKS</a>';
														echo '<a href="#" class="bookTypes culinare">CULINARE</a>';
														echo '<a href="#" class="bookTypes arta">ARTA, ARHITECTURA</a>';
														echo '<a href="#" class="bookTypes enciclopedii">ENCICLOPEDII</a>';
														echo '<a href="#" class="bookTypes reviste">REVISTE</a>';
														echo '<a href="#" class="bookTypes biografii">BIOGRAFII, MEMORII, JURNALE</a>';
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
														echo '<a href="#" class="bookTypes romania">ROMANIA</a>';
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
									echo '</div>';
								?>
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
			<main id="main">
				<div class="container noutati">
					<div class="all">
						<div class="sideAll">
							<h1>Noutățile lunii iunie</h1>
						</div>
						
						<a href="#" class="noutatiArrow" id="arrowLeft"><i class="fas fa-chevron-left"></i></a>
						
						<div class="contentAll" id="contentAllId">
						<?php
							$mysqli = new mysqli("sql300.unaux.com","unaux_25850284","w1lw95u73","unaux_25850284_products");
							
							// Check connection
							if ($mysqli -> connect_errno) {
								echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
								exit();
							}
							
							$result = $mysqli->query("SELECT bookName, bookAuthor, price, discount, imageURL FROM noutati");
							$price0 = '';
							$price1 = '';
							
							function setPrice($pr) 
							{
								$dotPos = strpos($pr, '.');
								
								if (!$dotPos)
								{
									$price0 = $pr;
									$price1 = '.00';
								}
								else 
								{
									$price0 = substr($pr, 0, $dotPos);
									$price1 = substr($pr, $dotPos);
								}
								
								return array($price0, $price1);
							}
							
							while (list($bName, $bAuthor, $price, $discount, $imgUrl) = $result->fetch_array(MYSQLI_BOTH))
							{
								$prArr = setPrice($price);
								$price0 = $prArr[0];
								$price1 = $prArr[1];
								
								if ($discount > 0)
								{
									echo '<div class="prodDetails">';
								}
								else
								{
									echo '<div class="prodDetails">';

								}
								
								echo '	<div class="productDisplay">';
								echo '		<a href="#" class="book"><img class="noutatiImg" src="'.$imgUrl.'" alt="Photo not found"></a>';
								echo '		<h4 class="noutBookName">'.$bName.'</h4>';
								echo '		<h3 class="noutBookAuthor">'.$bAuthor.'</h3>';
										
								echo '		<div class="pretProd">';
								echo '			<button class="buttAdauga"><i class="fab fa-opencart"></i>Adaugă în coș</button>';
								echo '			<h6 class="noutBookPrice">'.$price0.'<a><sup>'.$price1.'</sup></a>lei</h6>';
								echo '		</div>';
								echo '	</div>';
									
								if ($discount > 0)
								{
									echo '	<div class="trDiscount"></div>';
									echo '	<div class="prodDiscount"> '.$discount.'% </div>';
								}
								
								echo '</div>';
							}
							
							$mysqli->close();
						?>
						</div>
						
						<a href="#" class="noutatiArrow" id="arrowRight"><i class="fas fa-chevron-right"></i></a>
						
					</div> 
				</div>
				
				<div class="linesBookStyle"></div>
				
				<div class="container recomandari" id="recContainer">
					<div class="all" id="recAll">
						<a href="#" class="recArrow arrLeft" id="arrowL"><i class="fas fa-chevron-left"></i></a>
						
						<?php
							$mysqli = new mysqli("sql300.unaux.com","unaux_25850284","w1lw95u73","unaux_25850284_products");
							
							// Check connection
							if ($mysqli -> connect_errno) {
								echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
								exit();
							}
							
							$result = $mysqli->query("SELECT bookName, bookAuthor, description, imageURL FROM recomandari");
							
							function setDesc($desc)
							{
								if (strlen($desc) >= 500)
								{
									$desc = substr($desc, 0, 500) . "...";
								}
								return $desc;
							}
							
							while (list($bName, $bAuthor, $description, $imgUrl) = $result->fetch_array(MYSQLI_BOTH))
							{
								echo '<div class="recProd">';
								echo '    <img src="'.$imgUrl.'" class="recBook" alt="Photo not found"/>';
									
								echo '    <div class="descriptionBook">';
								echo '        <h1 class="recBookTitle">'.$bName.'</h1>';
								echo '        <h2 class="recBookAuthor">'.$bAuthor.'</h2>';
								echo '        <p class="recBookDesc">'.setDesc($description).'</p>';
								echo '        <button class="recDetButt">DETALII</button>';
								echo '    </div>';
								echo '</div>';
							}
							
							$mysqli->close();
						?>
						
						<a href="#" class="recArrow arrRight" id="arrowR"><i class="fas fa-chevron-right"></i></a>
					</div>
				</div>
				
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
			</main>
			<footer>
				&#169 2020 Ganea Andreea-Maria. | All rights reserved.
			</footer>
		</div>
		
		<script src="../jQuery-JS/produse_booktypes.js"></script>
		<script src="../jQuery-JS/index_noutati.js"></script>
	<!--<script src="../jQuery-JS/index_buttAdauga.js"></script>
		<script src="../jQuery-JS/index-recomandari.js"></script>-->
    </body>
</html>
	
