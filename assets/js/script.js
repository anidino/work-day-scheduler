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
currentDay.innerHTML = moment().format("MMM DD, YYYY - hh:mm a");
document.body.appendChild(currentDay) // had tried to appendChild here without the document part with no luck 
console.log(moment());

//everything working above 

//VARIABLE NOW IS CREATED USING MOMENT AND FORMATTED TO BE HOURLY. IT IS ALSO PARSED TO ENSURE A WHOLE NUMBER IS RETURNED. WE LOG TO THE CONSOLE 
var now = parseInt(moment().format('HH:MM'));
console.log(now)

// CREATE A CONTAINER FOR ALL THE DIVS, APPEND TO THE BODY, THEN MAKE IT A FLEXBOX IN CSS FILE
var container = document.createElement("div");
container.setAttribute("id", "dateContainer");
container.innerHTML = ""
body.appendChild(container);


// ADD hr ELEMENT TO CREATE A HORIZONTAL LINE THEN APPEND IT TO DOM
var myBefore9hr = document.createElement("hr");
container.appendChild(myBefore9hr);

//CREATE A DIV FOR EACH TIME BLOCK THAT WILL BE MADE
var div9 = document.createElement("div");
div9.setAttribute("id", "text9AM");
div9.setAttribute("class", "hourDivs")
div9.textContent = "9AM";
container.appendChild(div9);

// add input / form below for each div before the hr tag
var event9 = document.createElement("input");
event9.type = "text";
// textfield.value = "";
event9.id = "event9id"
event9.className = "dayEvents";
div9.appendChild(event9);

// ADD hr ELEMENT TO CREATE A HORIZONTAL LINE THEN APPEND IT TO DOM
var myHr9 = document.createElement("hr");
div9.appendChild(myHr9);




var div10 = document.createElement("div");
div10.setAttribute("id", "text10AM");
div10.setAttribute("class", "hourDivs");
div10.textContent = "10AM";
container.appendChild(div10);

// add input / form below for each div before the hr tag

// ADD hr ELEMENT TO CREATE A HORIZONTAL LINE THEN APPEND IT TO DOM
var myHr10 = document.createElement("hr");
div10.appendChild(myHr10);


var div11 = document.createElement("div");
div11.setAttribute("id", "text11PM");
div11.setAttribute("class", "hourDivs");
div11.textContent = "11AM";
container.appendChild(div11);

// add input / form below for each div before the hr tag

// ADD hr ELEMENT TO CREATE A HORIZONTAL LINE THEN APPEND IT TO DOM
var myHr11 = document.createElement("hr");
div11.appendChild(myHr11);


var div12 = document.createElement("div");
div12.setAttribute("id", "text12PM");
div12.setAttribute("class", "hourDivs");
div12.textContent = "12PM";
container.appendChild(div12);

// add input / form below for each div before the hr tag

// ADD hr ELEMENT TO CREATE A HORIZONTAL LINE THEN APPEND IT TO DOM
var myHr12 = document.createElement("hr");
div12.appendChild(myHr12);

var div1 = document.createElement("div");
div1.setAttribute("id", "text1PM");
div1.setAttribute("class", "hourDivs")
div1.textContent = "1PM";
container.appendChild(div1);

// add input / form below for each div before the hr tag

// ADD hr ELEMENT TO CREATE A HORIZONTAL LINE THEN APPEND IT TO DOM
var myHr1 = document.createElement("hr");
div1.appendChild(myHr1);

var div2 = document.createElement("div");
div2.setAttribute("id", "text2PM");
div2.setAttribute("class", "hourDivs");
div2.textContent = "2PM";
container.appendChild(div2);

// add input / form below for each div before the hr tag

// ADD hr ELEMENT TO CREATE A HORIZONTAL LINE THEN APPEND IT TO DOM
var myHr2 = document.createElement("hr");
div2.appendChild(myHr2);

var div3 = document.createElement("div");
div3.setAttribute("id", "text3PM");
div3.setAttribute("class", "hourDivs");
div3.textContent = "3PM";
container.appendChild(div3);

// add input / form below for each div before the hr tag

// ADD hr ELEMENT TO CREATE A HORIZONTAL LINE THEN APPEND IT TO DOM
var myHr3 = document.createElement("hr");
div3.appendChild(myHr3);

var div4 = document.createElement("div");
div4.setAttribute("id", "text4PM");
div4.setAttribute("class", "hourDivs");
div4.textContent = "4PM";
container.appendChild(div4);

// add input / form below for each div before the hr tag

// ADD hr ELEMENT TO CREATE A HORIZONTAL LINE THEN APPEND IT TO DOM
var myHr4 = document.createElement("hr");
div4.appendChild(myHr4);

var div5 = document.createElement("div");
div5.setAttribute("id", "text5PM");
div5.setAttribute("class", "hourDivs");
div5.textContent = "5PM";
container.appendChild(div5);

// add input / form below for each div before the hr tag

// ADD hr ELEMENT TO CREATE A HORIZONTAL LINE THEN APPEND IT TO DOM
var myHr5 = document.createElement("hr");
div5.appendChild(myHr5);





























































// GIVE AN ID TO EACH DIV 
// div9.setAttribute("id", "text9AM");
// div9.setAttribute("class", "hourDivs")
// div10.setAttribute("id", "text10AM");
// div10.setAttribute("class", "hourDivs")
// div11.setAttribute("id", "text11PM");
// div11.setAttribute("class", "hourDivs")
// div12.setAttribute("id", "text12PM");
// div12.setAttribute("class", "hourDivs")
// div1.setAttribute("id", "text1PM");
// div1.setAttribute("class", "hourDivs")
// div2.setAttribute("id", "text2PM");
// div2.setAttribute("class", "hourDivs")
// div3.setAttribute("id", "text3PM");
// div3.setAttribute("class", "hourDivs")
// div4.setAttribute("id", "text4PM");
// div4.setAttribute("class", "hourDivs");
// div5.setAttribute("id", "text5PM");
// div5.setAttribute("class", "hourDivs")

// SEND TEXT TO EACH DIV
// div9.textContent = "9AM";
// div10.textContent = "10AM";
// div11.textContent = "11AM";
// div12.textContent = "12PM";
// div1.textContent = "1PM";
// div2.textContent = "2PM";
// div3.textContent = "3PM";
// div4.textContent = "4PM";
// div5.textContent = "5PM";

// dateSection = document.getElementById("dateContainer")

// ADD TIME TO EACH DIV USING THE INNERHTML METHOD THEN APPENDING EACH TO DOM 
// WHY DOES IT WORK WITH BODY, AN HTML ELEMENT, BUT NOT WITH THE CREATED 'SECTION', ALSO AN HTML ELEMENT? 
// div9.innerHTML = "9AM";
// document.body.appendChild(div9);
// div10.innerHTML = "10AM";
// document.body.appendChild(div10);
// div11.innerHTML = "11AM";
// document.body.appendChild(div11);
// div12.innerHTML = "12pM";
// document.body.appendChild(div12);
// div1.innerHTML = "1pM";
// document.body.appendChild(div1);
// div2.innerHTML = "2pM";
// document.body.appendChild(div2);
// div3.innerHTML = "3pM";
// document.body.appendChild(div3);
// div4.innerHTML = "4pM";
// document.body.appendChild(div4);
// div5.innerHTML = "5pM";
// document.body.appendChild(div5);

// $("hourDivs").wrap("<section class='dateContainer'></div>");

//have tried .wrap and $(".free-me").insertAfter(".blog"); to get divs to nest inside of date section 





// MAYBE RE-EVALUATE THIS PART TOMORROW. THE # IS LIKE A QUICK WAY TO GRAB HTML ELEMENTS I THINK? SO MAYBE NOT A GOOD USE HERE SINCE WE MADE OUR OWN IN JS
// MAKE A VARIABLE FOR EACH BLOCK OF TIME 
// var $at9AM = $("#text9AM");
// var $at10AM = $("#text10AM");
// var $at11AM = $("#text11PM");
// var $at12PM = $("#text12PM");
// var $at1PM = $("#text1PM");
// var $at2PM = $("text2PM");
// var $at3PM = $("text3PM");
// var $at4PM = $("text4PM");
// var $at5PM = $("text5PM");


























// console.log(currentDay)
// currentDay.appendChild
// // p.textContent = currentDay;



// header.appendChild(currentDay);







