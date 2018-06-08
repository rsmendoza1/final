/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var total = 0;

// VALIDATE FORM 

// FIRST NAME
function validateName() {
    "use strict";
    var name = document.getElementById("commentName").value;

    if (name.length == 0) {
        producePrompt("*First Name Required", "commentNamePrompt", "red");
        return false;
    }
    
    if(!name.match(/^[A-Za-z]*$/)) {
        producePrompt("*Letters Only, No Spaces", "commentNamePrompt", "red");
        return false;
    }
    
    producePrompt("*Field is Valid", "commentNamePrompt", "green");
    return true;
}

function producePrompt(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}


// LAST NAME
function validateName() {
    "use strict";
    var name = document.getElementById("commentName1").value;

    if (name.length == 0) {
        producePrompt("*Last Name Required", "commentNamePrompt1", "red");
        return false;
    }
    
    if(!name.match(/^[A-Za-z]*$/)) {
        producePrompt("*Letters Only, No Spaces", "commentNamePrompt1", "red");
        return false;
    }
    
    producePrompt("*Field is Valid", "commentNamePrompt1", "green");
    return true;
}

function producePrompt(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}

// ADDRESS NOT WORKING
/*function validateName() {
    "use strict";
    var name = document.getElementById("commentNamePrompt2").value;

    if (name.length == 0) {
        producePrompt("*Address Required", "commentNamePrompt2", "red");
        return false;
    }
    
    if(!name.match(/^\d+\s[A-z]+\s[A-z]+/)) {
        producePrompt("*Numbers & Letters Needed, No Spaces", "commentNamePrompt2", "red");
        return false;
    }
    
    producePrompt("*Field is Valid", "commentNamePrompt2", "green");
    return true;
}

function producePrompt(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}*/

// STOP
// ME

// CART
function updateTotal() {

    console.log('the value has changed');

    //Change the number stored in the total because of crust/size

    //Change the number stored in the total variable because of cheese
    total = total + document.getElementById("inputCheeseOptions").value;

    //Change the total because of sauce


    //Change the total because of toppings 

    //Change the displayed total
    document.getElementById("totalInput").innerHTML = "<span>Total (USD)</span><strong>$" + total + "</strong>";


}
// ADDRESS OTHER OPTION 
function CheckOption(val) {
    var element = document.getElementById('optionOther');
    if (val == 'Choose...' || val == 'other')
        element.style.display = 'block';
    else
        element.style.display = 'none';
}

// CHOOSE YOUR DOUGH 
function check() {
    if (document.getElementById('handTossed').checked) {
        document.getElementById('option1').style.display = 'block';
        document.getElementById('option2').style.display = 'none';
        document.getElementById('option3').style.display = 'none';
        document.getElementById('option4').style.display = 'none';
    } else if (document.getElementById('thinCrust').checked) {
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'block';
        document.getElementById('option3').style.display = 'none';
        document.getElementById('option4').style.display = 'none';
    } else if (document.getElementById('newYork').checked) {
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'none';
        document.getElementById('option3').style.display = 'block';
        document.getElementById('option4').style.display = 'none';
    } else if (document.getElementById('gluten').checked) {
        document.getElementById('option1').style.display = 'none';
        document.getElementById('option2').style.display = 'none';
        document.getElementById('option3').style.display = 'none';
        document.getElementById('option4').style.display = 'block';
    }
}
