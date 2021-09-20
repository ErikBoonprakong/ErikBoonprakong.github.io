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
        var prodNum = prompt ("Product Code Ranges: \n 101-105, 201-203, 301-303, 401-403\n\n Enter a product code ('END' to end):", "END");
        console.log("Product number: " + prodNum);
        if (prodNum == "END"){break;}

        for (var j = 0; j < pNum.length ; j++)
        {
            if (prodNum == pNum[j])
            {
                prodFound = true;
                savedj = j;
                break;
            }   
        }
            if (prodFound == false){continue;}
                else {prodFound = false};
    
        console.log(prodName[j])
        
        var pname = prodName[j]
       

        var promtMsg = "please enter quantity of " + prodName[j] + "sold on ";
        for (i = 0; i < days.length; i++)
        {    
            pqty = parseFloat(prompt (promtMsg + days[i] , "0"));
            if (isNaN(pqty))
            {
                pqty = 0
            }
            console.log(promtMsg + " " + prodQuan);
            console.log(days[i] + prodQuan); 
            prodQuan[savedj] += pqty;
            console.log(prodQuan[savedj]);
        
        
        }
    }  

    let sales = 
        [
            {Number: + pNum[j], Name: + prodName[j], sold: + prodQuan[j]}
        ]

    let table = document.querySelector("#java");
    let data = Object.keys(sales[0]);
    //generateTableHead(table, data);

    function generateTableHead (table, sales)
    {  
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data)
        {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
        }
    }
    

    function generateTable (table, sales)
    {
        for (let element of sales)
        {
            let row = table.insertRow();
            for (key in element)
            {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }
    generateTableHead (table, sales);
    generateTable (table, sales);
}