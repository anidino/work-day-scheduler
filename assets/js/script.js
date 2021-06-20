//ACCESS HTML BODY SO WE CAN ADD AND MANIPULATE ELEMENTS. CONSOLE LOG TO GET INTO HABIT OF DOING SO 
var body = document.body;
console.log(body);

// CREATE H1/HEADER ELEMENT 
var h1El = document.createElement("h1");
// ADD TEXT CONTENT TO NEWLY CREATED H1 ELEMENT
h1El.textContent = "Work Day Scheduler";

//ADD STYLES TO THE h1El VAR USING THE SETATTRIBUTE PROPERTY 
h1El.setAttribute("style", "margin:auto; width: 100%; text-align:center; font-size:80px;");
h1El.setAttribute("id", "header");

//APPEND TO THE DOM USING APPENDCHILD METHOD
body.appendChild(h1El);

//ADD A BREAK BETWEEN LINES
var myBr = document.createElement("br");
h1El.appendChild(myBr);

// ADD AN H3 ELEMENT USING THE SAME METHOD ABOVE 
var h2El = document.createElement("h3");

//ADD SOME TEXT TO THE H3 ELEMENT
h2El.textContent = "A simple calender app for scheduling your work day";

//ADD STYLES TO h2El ELEMENT 
h2El.setAttribute("style", "margin:auto, width:100%, text-align:center, font-size:40px;");
h2El.setAttribute("id", "header2");


//APPEND h2El TO THE DOM 
body.appendChild(h2El);

// ADD hr ELEMENT TO CREATE A HORIZONTAL LINE THEN APPEND IT TO DOM
var myHr = document.createElement("hr");
h2El.appendChild(myHr);

// DISPLAY CURRENT DATE 
var currentDay = document.createElement("p");
// currentDay = moment().format("YYYY-MM-DD");
// LOOK INTO ADDING INTERVAL TO THIS BECAUSE THE SECONDS DON'T MOVE WELL 
currentDay.innerHTML = moment().format("MMM DD, YYYY - hh:mm:ss a");
document.body.appendChild(currentDay)
console.log(moment());

//everything working above 

//VARIABLE NOW IS CREATED USING MOMENT AND FORMATTED TO BE HOURLY. IT IS ALSO PARSED TO ENSURE A WHOLE NUMBER IS RETURNED. WE LOG TO THE CONSOLE 
var now = parseInt(moment().format('HH'));
console.log(now)

// CREATE A CONTAINER FOR ALL THE DIVS AND MAKE IT A FLEXBOX
var container = document.createElement("section");
container.innerHTML = ""
// container.output
//does the container need to be pushed somehow/appended (appending didnt' work just making notes.)

//CREATE A DIV FOR EACH TIME BLOCK THAT WILL BE MADE
var div9 = document.createElement("div");
var div10 = document.createElement("div");
var div11 = document.createElement("div");
var div12 = document.createElement("div");
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");
var div4 = document.createElement("div");
var div5 = document.createElement("div");

// GIVE AN ID TO EACH DIV 
div9.setAttribute("id", "text9AM");
div10.setAttribute("id", "text10AM");
div11.setAttribute("id", "text11PM");
div12.setAttribute("id", "text12PM");
div1.setAttribute("id", "text1PM");
div2.setAttribute("id", "text2PM");
div3.setAttribute("id", "text3PM");
div4.setAttribute("id", "text4PM");
div5.setAttribute("id", "text5PM");



// MAYBE RE-EVALUATE THIS PART TOMORROW. THE # IS LIKE A QUICK WAY TO GRAB HTML ELEMENTS I THINK? SO MAYBE NOT A GOOD USE HERE SINCE WE MADE OUR OWN IN JS
// MAKE A VARIABLE FOR EACH BLOCK OF TIME 
var $at9AM = $("#text9AM");
var $at10AM = $("#text10AM");
var $at11AM = $("#text11PM");
var $at12PM = $("#text12PM");
var $at1PM = $("#text1PM");
var $at2PM = $("text2PM");
var $at3PM = $("text3PM");
var $at4PM = $("text4PM");
var $at5PM = $("text5PM");


























// console.log(currentDay)
// currentDay.appendChild
// // p.textContent = currentDay;



// header.appendChild(currentDay);







