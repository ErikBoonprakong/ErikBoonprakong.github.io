//----- Solution to assignment 4 -----

//----- Module Fucntion -----

//---------------------------
function salesValues()
{
// Item codes
    var pNum = ["101", "102", "103", "104", "105",
                "201", "202", "203", "204", "205",
                "301", "302", "303",
                "401", "402", "403"];

// Item names
    var prodName = ["Victoria Sponge", "Custard Tart", "Black Forest Gateu", "Big One Sundae", "Christmas Pudding",
                "Chicken Pie", "Steak and Ale Pie", "Quorn Pie", "Veg and Potato Pie", "Fish Pie",
                "Pain Au Chocolat", "Iced Doughnut", "Stuffed Doughnut",
                "Sourdough Loaf", "White Loaf", "Wholemeal Loaf"];

// Number of KG's sold of each item            
    var prodQuan = [0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 0,
                    0, 0, 0]

// Price per kilo of each item                
    var prodPrice = [14.99, 11.99, 19.99, 15, 24.99,
                8.99, 11.99, 5.99, 24.99, 24.99,
                15, 11.99, 13.99,
                5.99, 4.50, 8.99];

    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var pqty = 0;
    var prodFound = false;
    var savedj = 0;

    while (prodNum != "END")
    {
        var prodNum = prompt ("Product Code Ranges: \n 101-105, 201-205, 301-303, 401-403\n\n Enter a product code ('END' to end):", "END");
        console.log("Product number: " + prodNum);
        
        if (prodNum == null){prodNum = "END"}; // if 'cancel' is clicked
        if (prodNum == "END"){break;};

        for (var j = 0; j < pNum.length ; j++)
        {
            if (prodNum == pNum[j])
            {
                prodFound = true;
                savedj = j;
                break;
            }   
        }
            if (prodFound == false) //if invalid product number is entered
                {
                   alert("Please enter a valid product number"); continue;
                }
                else {prodFound = false};
    
        console.log(prodName[j]);
        
        var pname = prodName[j];

        var promtMsg = "please enter quantity of " + prodName[j] + " sold on ";
        for (i = 0; i < days.length; i++)
        {   
            //if(prompt (promtMsg + days[i] , "0") == null){return};
            var qtyNotValid = true;
            while (qtyNotValid)
            {
                var pqty = prompt (promtMsg + days[i], "0")
                if (pqty == null) {return}; //exit if 'cancel' is clicked
                pqty = parseFloat(pqty);  
                //pqty = parseFloat(prompt (promtMsg + days[i] , "0"));
                //console.log(pqty)
                //console.log(prompt)
                if (isNaN(pqty)) //If quantity entered is invalid
                {
                    alert("Invalid quantity"); qtyNotValid = true; continue //try entering a new value if value entered is invalid
                }
                else
                {
                    qtyNotValid = false;
                    console.log(promtMsg + " " + prodQuan);
                    console.log(days[i] + prodQuan); 
                    prodQuan[savedj] += pqty;
                    console.log(prodQuan[savedj]);
                }
            }
            
            
        }
        

        var resultWindow = document.getElementById("overlayScreen");
        var totalValue = 0.00;
        
        console.log("Getting columns...");
        var hdr = document.getElementById("Hdr");
        var c1 = document.getElementById("Col1");
        var c2 = document.getElementById("Col2");
        var c3 = document.getElementById("Col3");
        var c4 = document.getElementById("Col4");
        //	var ftr = document.getElementById("Ftr"); 

        // Put the headings on the columns
	    console.log("Setting Headings...");
	    var C1Contents = "<h3>Product <br> Code</h3>";
	    var C2Contents = "<h3>Product <br> Name</h3>";
	    var C3Contents = "<h3>Quantity Sold <br> (Kg)</h3>";
        var C4Contents = "<h3>Value of Sales <br> (&pound)</h3>";
        
        // switch statement to calculate value of product sold
        for (j = 0; j < pNum.length; j++)
        {
            if (prodQuan[savedj] != 0)
            {
                switch (prodNum)
                {
                    case "101":
                        productPrice = 8.99;
                        break;
                    case "102":
                        productPrice = 11.99;
                        break;
                    case "103":
                        productPrice = 5.99;
                        break;
                    case "104":
                        productPrice = 24.99;
                        break;
                    case "105":
                        productPrice = 24.99;
                        break;
                    case "201":
                        productPrice = 15.00;
                        break;
                    case "202":
                        productPrice = 11.99;
                        break;
                    case "203":
                        productPrice = 13.99;
                        break;
                    case "301":
                        productPrice = 5.99;
                        break;
                    case "302":
                        productPrice = 4.50;
                        break;
                    case "303":
                        productPrice = 8.99;
                        break;
                    case "401":
                        productPrice = 8.99;
                        break;
                    case "402":
                        productPrice = 8.99;
                        break;
                    case "403":
                        productPrice = 8.99;
                }
                
                sValue = prodQuan[j] * productPrice;
                totalValue += sValue;
                sValue = sValue.toFixed(2);
                console.log (pNum[j], prodName[j], prodQuan[j], sValue);

                C1Contents += "<br>" + pNum[j];
                C2Contents += "<br>" + prodName[j];
                C3Contents += "<br>" + prodQuan[j];
                C4Contents += "<br>" + sValue;
            }  
        }

        C3Contents += "<br><h3>Total</h3>";
        totalValue = totalValue.toFixed(2);
        C4Contents += "<br><br>" + totalValue;

        hdr.innerHTML=("<h3>Value of Sales for Last Week <br>(Click on Table to Delete it)</h3>");
	    c1.innerHTML = C1Contents;
	    c2.innerHTML = C2Contents;
	    c3.innerHTML = C3Contents;
	    c4.innerHTML = C4Contents;
	    resultWindow.style.visibility = "visible";
	
// Scroll to top of window to display table
	    window.scrollTo(0,0);
	    resultWindow.onclick = function(){resultWindow.style.visibility = "hidden"};
    }
}