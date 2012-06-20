//Christine Foisy
//SDI Project 4

//STRING
//PROBLEM 1
//Does a string follow a 123-456-7890 pattern like a phone number?

var checkNum = function (testNumber) {
var phoneNumber = testNumber;
var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
	    if (pattern.test(phoneNumber)) { 
                return true;
                    } else {                          
                return false;
           }
};
            
   
//CHECK 1
console.log (checkNum("401-463-3324"));   

//I was not familiar with the pattern for a phone number but was able to find it online which helped me test this.
//END PROBLEM 1




//PROBLEM 2
//Does a string follow an aaa@bbb.ccc pattern like an email address?


function checkEmail() {
    var emailAddress = emailToCheck;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(emailAddress)) {
        console.log("Email address is valid.");
    } else {
        console.log("Email address is not valid.");
    }
}

//CHECK 2
console.log(checkEmail("cfoisy@fullsail.edu"));

//Again on problem 2 I was able to find the pattern to help validate an email adress. I am not sure if there is an easier way to do this. 
//END PROBLEM 2





//PROBLEM 3
//Is the string a URL? (Does it start with http: or https:?)
var checkURL = function(val){
    var first = val.substring(0,val.indexof(":"));
    if ((first === "http") || (first === "https");
        return true;
        } else }
        return false;
    {;
}

//CHECK 3
console.log(lib.checkURL(“http://www.thehouseofhopecdc.org”));
//END PROBLEM 3






//PROBLEM 4
//Title-case a string (split into words, then uppercase the first letter of each word)

    
funtion (fixCase(str)){
String.prototype.to
{
	return str.replace(/\w\s*/g, function(txt){
		return txt.charAt(0).toProperCase() + txt.substring(1).toLowerCase();
		};    
    
    fixThis.toProperCase();

    
//CHECK 4
fixCase("christine foisy");
   
console.log(fixCase.toProperCase());
//END PROBLEM 4




//PROBLEM 5
//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".



//NUMBER
//PROBLEM 6
//Format a number to use a specific number of decimal places, as for money: 2.1 &#8594; 2.10

var num = 2.1;
var result = num.toFixed(2.1); 
var money = moneyToFix;
	function fixMoney(moneyToTest); {
    	var money = moneyToTest
    		money.toFixed(2.1)

    return console.log(money.toFixed(2.1));
	};


//CHECK 6
num = 2.10;
result = num.toFixed(2); 
//END PROBLEM 6





//PROBLEM 7
//Fuzzy-match a number: is the number above or below a number within a certain percent?




//PROBLEM 8
//Find the number of hours or days difference between two dates.

Function diffBetween(date1,date2) {
    var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
    date1 = new Date(date1);
    date2 = new Date(date2);
    var timediff = date2 - date1;
    if (isNaN(timediff)) return NaN;
    
    }
}
  
    
//CHECK 8
console.log (diffBetween(date1(20-06-2012) + (date2(25-06-2012);
//END PROBLEM 8   
 
    
    
    
    




//PROBLEM 9
//Given a string version of a number such as "42", return the value as an actual Number, such as 42.












//ARRAY

//PROBLEM 10
//Find the smallest value in an array that is greater than a given number

//PROBLEM 11
//Find the total value of just the numbers in an array, even if some of the items are not numbers.]


//PROBLEM 12
//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: “a” + [ {a:2}, {a:3}, {a:1}] -> {{a:1}, {a:2}, {a:3}].











