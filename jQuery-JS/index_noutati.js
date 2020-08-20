window.onload = function() 
{
	var MAX_WIDTH = screen.width;
	var WND_WIDTH = window.innerWidth;

	/* Noutati */
	var contentN = document.getElementById("contentAllId");
	var contentLstN = contentN.querySelectorAll(".prodDetails");

	/* Recomandari */
	var contentRec = document.getElementById("recAll");
	var contentLstRec = contentRec.querySelectorAll(".recProd");

	/* Noutati */
	var arrowLeftN = document.getElementById("arrowLeft");
	var arrowRightN = document.getElementById("arrowRight");

	/* Recomandari */
	var arrowL = document.getElementById("arrowL");
	var arrowR = document.getElementById("arrowR");

	var buttAdauga = document.getElementById("buttAdauga");

	/* Noutati */
	var MAX_BOOKS_NOUTATI = 9;
	var posMAX = MAX_BOOKS_NOUTATI - 1;
	var countN = 0;

	/* Recomandari */
	var MAX_BOOKS_REC = 1;
	var countRec = 0;

	//console.log(contentLstN);
	//console.log(contentLstRec);
				
	function show() 
	{
		//console.log("show");
		for(var i = 0; i < contentLstN.length; i++)
		{
			contentLstN[i].style.display = "inherit";
		}
	}

	// Hide rest of elements
	function hide(noutatiPg) 
	{
		//console.log("hide");
		if(noutatiPg)
		{
			//console.log("if(noutatiPg) in hide func === TRUE -> NOUTATI");
			if(contentLstN.length > MAX_BOOKS_NOUTATI)
			{
				//console.log("if(contentLstN.length > MAX_BOOKS_NOUTATI)");
				for(var i = MAX_BOOKS_NOUTATI; i < contentLstN.length; i++)
				{
					contentLstN[i].style.display = "none";
				}
			}
		}
		else
		{
			//console.log("if(noutatiPg) in hide func === FALSE -> RECOMANDARI");
			if(contentLstRec.length > MAX_BOOKS_REC)
			{
				for(var i = MAX_BOOKS_REC; i < contentLstRec.length; i++)
				{
					contentLstRec[i].style.display = "none";
				}
			}
		}
	}

	function setStyle(pos, isNone, lst) 
	{
		if (isNone)
			lst[pos].style.display = "none";
		else
			lst[pos].style.display = "inherit";
	}

	function setCount(right, noutatiPg) 
	{
		if(noutatiPg)
		{
			if (right)
				countN += 1;
			else
				countN -= 1;
		}
		else
		{
			if (right)
				countRec += 1;
			else
				countRec -= 1;
		}
	}

	function setVarsOnResize(index) 
	{
		//console.log("setVarsOnResize");
		MAX_BOOKS_NOUTATI = 9;
		posMAX = MAX_BOOKS_NOUTATI - 1;
		
		MAX_BOOKS_NOUTATI -= index;
		posMAX -= index;
		show();
		hide(true);
	}

	hide(true);
	hide(false);
	setNumBooks();

	// Function for left arrow in NOUTATI pages
	arrowLeftN.addEventListener("click", function(event) 
	{
		event.preventDefault();
		if ((MAX_BOOKS_NOUTATI - countN) === MAX_BOOKS_NOUTATI) return;
		else 
		{
			setStyle(posMAX + countN, true, contentLstN);
			
			setCount(false, true);
			setStyle(countN, false, contentLstN);
		}
		
	});

	// Function for right arrow in NOUTATI pages
	arrowRightN.addEventListener("click", function(event) 
	{
		event.preventDefault();
		if ((MAX_BOOKS_NOUTATI + countN) === contentLstN.length) return;
		else 
		{
			setStyle(countN, true, contentLstN);
			
			setCount(true, true);
			setStyle(posMAX + countN, false, contentLstN);
		}	
	});

	// Function for left arrow in RECOMANDARI pages
	arrowL.addEventListener("click", function(event) 
	{
		event.preventDefault();
		if ((MAX_BOOKS_REC - countRec) === MAX_BOOKS_REC) return;
		else 
		{
			setStyle(countRec, true, contentLstRec);
			
			setCount(false, false);
			setStyle(countRec, false, contentLstRec);
		}
		
	});

	// Function for right arrow in RECOMANDARI pages
	arrowR.addEventListener("click", function(event) 
	{
		event.preventDefault();
		if ((MAX_BOOKS_REC + countRec) === contentLstRec.length) return;
		else 
		{
			setStyle(countRec, true, contentLstRec);
			
			setCount(true, false);
			setStyle(countRec, false, contentLstRec);
		}	
	});


	// Gets number of items in NOUTĂȚI div based on window width
	function setNumBooks() 
	{
		//console.log("setNumBooks");
		var wndWidth = window.innerWidth;
		
		if (wndWidth >= "2800")
			setVarsOnResize(0);
		
		else if (wndWidth >= "2500" && wndWidth < "2800")
			setVarsOnResize(1);
		
		else if (wndWidth >= "2200" && wndWidth < "2500")
			setVarsOnResize(2);
		
		else if (wndWidth >= "1900" && wndWidth < "2200")
			setVarsOnResize(3);
		
		else if (wndWidth >= "1600" && wndWidth < "1900")
			setVarsOnResize(4);
		
		else if (wndWidth >= "1300" && wndWidth < "1600")
			setVarsOnResize(5);
		
		else if (wndWidth >= "1000" && wndWidth < "1300")
			setVarsOnResize(6);
		
		else if (wndWidth >= "750" && wndWidth < "1000")
			setVarsOnResize(7);
		
		else if (wndWidth < "750")
			setVarsOnResize(8);
	}

	window.onresize = function()
	{
		//console.log("wndOnResize");
		countN = 0;
		setNumBooks();
	}
};