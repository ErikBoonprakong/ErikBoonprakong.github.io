//----- Solution to assignment 4 -----

//----- Module Fucntion -----

//---------------------------
function salesValues()
{
// Item codes
var prodNum = ["101", "102", "103", "104", "105",
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


prodNum = prompt("Enter product number, enter END to exit","END")
    while (prodNum != "END")
    {
        if (prodNum != null)
        {
            for (i = 0; i < prodNum; i++)
            {
                if (i == prodNum) {var savedi = i; break};
            }
        }
    
    };

days = prompt("Choose a day to enter sales for \n Enter 1 for Monday \n Enter 2 for Tuesday \n Enter 3 for Wednesday \n Enter 4 for Thursday \n Enter 5 for Friday \n Enter 6 for Saturday \n Enter 7 for Sunday \n Or END to exit" , "END")
    while (days != "END")
    {
        if (days != null)
        {
            for (j = 0; j - 1 < days; j++)
            {
                if (j == days) {var savedDay = j ; break};
            }
        }
    };

var q1 = parseInt(document.getElementById("savedDays").value)
var qMon
 
// Monday's quantity
if (q1 = 1) 
{
    qMon = prompt("Enter number of KG's sold on Monday", "0" )
}


}