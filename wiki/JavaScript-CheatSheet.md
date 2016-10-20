<!-- 
	# HIGHLIGHT CODE SNIPPETS
R1: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
R2: https://github.com/adam-p/markdown-here/wiki/Tips-and-Tricks#inlinehtml

	# CODE SNIPPETS
* Block

		```javascript
		code
		```

* Inline

		your text `inline code` more text.

	# IMAGES

		Reference-style: 
		![alt text][logo]


	# Content Structure

		# Topic
			* generic example
			* short explanation
			* special example
	
		[logo]: https://github.com/dybe-hs2016/soundtracker-mobile/wiki/_images/_sample-image.png "Logo Title Text 2"

# CSS with SPAN elements
.hi {
  background: linear-gradient(225deg, lightpink, lightblue);
  border: thick dotted purple;
}

Happy <span class="hi">Birthday</span> my friend!
 -->

![here should be an image][img01]

[img01]: https://github.com/dybe-hs2016/soundtracker-mobile/wiki/_images/_sample-image.png "Image Title Text"
# Basics Principles
* Structure:  
	A.B();
* Get in the habit of typing exactly as much as you need to, and no more!


## Syntax
* The computer doesn't worry about extra spaces between words or brackets. It just cares about the order of where things are placed and that you have used the right characters (){}[]"";

## Semantics
* Nouns -> Things -> Data (Numbers, Strings, Variables)
* Verbs -> Actions -> Functions
* Objects combine Data and Functions

## Data Types

* Primitive Data Types
	* String
		* ```"foo bar"```
	* Number
		* ``` 42, 6, 7 ```
	* Boolean
		* ``` true, false, 5 > 4 ```
	* ---Undefined---
	* ---Null---

* Non-Primitive Data Types
	* Array
	* Object
	* ---RegExp---

## Operators
* Arithmetic Operators
* Comparison Operators
	* Any time comparisons are made, a Boolean value is returned.
* Boolean (Logical) Operators

## Functions

## Conditions
* if-else-elseif
* Switch

## Nested Condition
	```javascript
	if(x) {
		if(x.y) {
			code;
		}
		else {
			code;
		}
	else {
		code;
	}
	}
	 ```
* FizzBuzz: We want to count from 1 to 20. But if the number is divisible by 3, we're going to print "Fizz". And if the number is divisible by 5 we're going to print "Buzz".

	```java script
		<!-- for loop to count from 1 to 20 -->
		for (var i = 1; i <= 20; i++) {
			
			<!-- firs condition to sort out intersecting set of all numbers devisible by 3 or 5 -->
		    if (i%3 === 0 || i%5 === 0) {
		    	
		    	<!-- second (nested) condition to print FizzBuzz -->
		        if (i%3 === 0 && i%5 === 0) {
		            console.log("FizzBuzz");
		        <!-- print Buzz -->
		        }
		        else if (i%5 === 0) {
		            console.log("Buzz");
		        }

		        <!-- for the rest of the intersecting set -->
		        else {
		        console.log("Fizz");
		        }
		    }

		    <!-- print the nuber if its not devisable by 3 or 5 -->
		    else {
		    console.log(i);
		    }
		};
	```

## Loops
* for
* while
* do/wile

# Objects

<!-- after here is content, that belongs into the list above! -->

* Numbers
	* all numbers [42 ; 3.14159265359]
	* you can do math with numbers : + - * / () % 

* Strings
	* sequences of characters, spaces and numbers surrounded by " "
	* useful as labels, names, and content for your programs
* Substrings
	* Part of a String. eg: firs 50 characters of a message.
	* "string".substring(x, y); WHERE x = fist character index; y = last character index (starting index at 0).

* Booleans
	* booleans can be either 'true' or 'false'
	* compare numbers : < / > /  ==== / !== / <= / >=
	* == vs ===
		* a = "red" / b = a / c = "red"
		* == do 2 Objects have the same content?
		* === are 2 Objects the same?
		* b == c : t / b === c : t
		* c == a : t / c === a : f

* Comparison
	* console.log("Goody Donaldson".length  > 8); -> 'true'
	* console.log(8*2  === 16); -> 'true'

* Variables
	* Store values
	* Case sensitive name
	* Call by typing the variables Name
	* Overrite with new value of itsselfe varName = varName*x	
	* var varName = data;
		* sugar: varName = data;
	* data = 32 -> data type is a Number
	* data = "string/32" -> data type is String
	* data = true -> data type is Booleans
* Scope
	* The scope of a variable can either be global or local
	* Global Variables are definde outside of a function and thus accessible anywhere
	* Local Variables are defined inside a function and thus accessible just inside the corresponding function
	* The keyword var declares the scope of a variable, depending on whether the variable is defined inside or outside of a function
	* A variable definded without the keyword var is a global variable???
	* 	//this has global scope
		var my_number = 7;

		var timesTwo = function(number) {
		    // this has local scope as long as defined with var, otherwise it has global scope
		    var my_number = number * 2;
		    console.log("Inside the function my_number is: ");
		    console.log(my_number); // 14
		}; 

		timesTwo(7);

		console.log("Outside the function my_number is: ")
		console.log(my_number); // 7
* if - else
	```javascript
	if (condition) {
		answer;
	} else {
	 	answer when if returns false;
	}	
	```

		// will return 'true' or 'false'  
	*	if (prompt("multiply seven by nine") === "42")  
		{  
			console.log("The condition is true");  
		} else  
	  	{  
	  		console.log("The condition is false");  
	  	}
	* 	
		var isEven = function(number) {  // declare function isEvan  
	  if (number % 2 === 0) {  // check if number is evanly devisable by 2  
	      return true;  // return true if number is evan  
	  } else {  
	      return false;  // return false if number is odd  
	  }  
		};  

		isEven(42);  // call funciton with 42 -> will return true  

	*
		if (/* Some condition */) { 
		    // Do something  
		} else if (/* Some other condition */) {  
		    // Do something else  
		} else {    // Otherwise  
		    // Do a third thing  
		}  

	* Last Exercise from Section I

	var name = prompt ('enter your name');
	var finished = ("I finished my first course!");

	if (confirm ("is your name: "+name+"?") === true)  
	    {console.log ("you did it right but hit cancel the next time!");  
	    }  
	else  
	{console.log (finished);  
	};  

	

* Functions
	* A function takes in inputs, does something with them, and produces an output.
	* Declare a Function by giving it a Name with the var command followd by the keyword FUNCTION.
	* The name should begin with a lowercase letter and the convention is to use lowerCamelCase where each word (except the first) begins with a capital letter.
	* Form:
		* var functionName = function(INPUT) {  
			PARAMETER;  
		  };
        * code exampel
                * `var = function (INPUT) {  
                        PARAMETER;  
                   };`  
	* Call Function:
		* functionName(INPUTvalue);
	* Example:
		* DEFINE FUNCTION: var greeting = function (name) {  
		  console.log("Great to see you," + " " + name);  
		  };  
		* CALL: greeting(emely);
		* OUTPUT: Great to see you, emely
		* 2 Parameter Functions
		var my2ParameterFunction = function (length, width) {
			return length * width;
		};

		var perimeterBox = function(length, width) {
	    	return 2 * length + 2* width;
		};

perimeterBox(12, 13);

* Return Function
	* // Parameter is a number, and we do math with that parameter
		var timesTwo = function(number) {
		    return number * 2;
		};

		// Call timesTwo here and store it in newNumber
		var newNumber = timesTwo(21);
		console.log(newNumber);

		// Call timesTwo ans log it directly
		console.log(timesTwo(21));

		// Call timesTwo without log; Value is returned due to 'return' in function
		timesTwo(21);

		// Check whether result of timesTwo is actually devisible by 2
		if (timesTwo(inputNumberHere!) % 2 === 0) {
			console.log("the statement is true");
		} else {
			console.log("the statement is false. your number is not divisible by 2");
		}

* For Loop
	* for (condition) {  
		code;  
	  }  

	  condition: (var counter start; stop; incremetation)

	* Will run aslong as the condition is true
	* Has a known start and end point
	* Suitable in cases where you know how many loops the programm will have to run through
	* Infinite Loop: loop that can't end becaus the condition is always true. Such a for loop will crasch your browser!
	* Keyword: for
	* Counting Variable: i
		* Can take any name
		* Determines at wich value the for loop will start and end (declar var and starting value; ending value; incrementation steps)
	* Incrementation / Decrementation:
		* i + 1 
			(this syntax will not update i by itsselfe and might lead to an infinite loop!)
		* i++
		* i--
		* i += x
			(x beeing the value by which i will be increased)
		* i -= x
	* for (var i = 1; i < 11; i = i + 1) {  
    	/* your code here */;  
	  }
	* for (var counter = 1; counter < 6; counter++) {  
		console.log(counter);  
	  }  
	 // prints numbers 1-5
	* for (var i = 5; i < 51; i += 5) {
		console.log(i);
	  }
	 // prints numbers 5-50 in steps of +5

* Arrays
	* var arrayName = ["dataString", data7, date9, "dataString"];
	* are defined as variables
	* sotre lists of data
	* can store different data types (at the same time)
	* are ordered (position of each piece of data is fixet through an index)
	* index is 0-based (it starts at 0, not at 1; so the 2nd element has the index 1 (n-1))
	* arrayNmae[i] calls data element at index position i
	* systematically access elements in an array with a for loop
		* 
			var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "zarG"];  

			for (var i = 0; i < cities.length; i++) {  
			    console.log("I would like to visit " + cities[i]);  
			}
		* 
			var names = ["a", "ab", "ac", "ad", "ae"];  

			for (var i = 0; i < names.length; i++) {  
			    console.log("I know someone called "+names[i]);  	
			}

* Heterogeneous Arrays
	* Arrays that hold more than one data type
	* Arrays can hold:
		* numbers
		* strings
		* booleans
		* arrays
		* objects
		```javascript 
			<!-- define Object-thgttg -->
			var thgttg = new Object();
				thgttg.author = "Adams, Douglas; 1952-2001";

			<!-- defind hArray -->
			var hArray = [42, true, "what do you get if you multiply six by nine", thgttg];
			console.log(hArray);

			<!-- output hArray -->
			[42, true, 'what do you get if you multiply six my nine', {author: 'Adams, Douglas; 1952-2001'}]
		```

* Multydimensional Arrays
	* var 2dArray = [[row1.column1, row1.column2], [row2.column1, row2.column2]];
	* row: no. of arraysR inside the arrayName
	* column: elements in arrayR
	* Dimensions:
		ndArray[ [arrayN+1 [arrayN+2] ] ];

* Jagged Arrays
	* var jagged = [ [1,2,3,4,5,6,7,8,9,0], [0,1,2,3,5,8] ];
	* Arrays, that have different numbers of Elements in its rows

* While Loop
	*
		var conditionValue = Value;

		while(condition === Value) {
		code;
		stopCondition to set while condition to false to stop the loop!;
		}
	* The while loop is ideal when you want to use a loop, but you don't know how many times you'll have to execute that loop.
	* The loop will run as long as the CONDITION evaluates to 'true', an it will stop running as soon as the CONDITION evaluates to 'false'
	* // loop runs until random var coinFace is 0 (Tails)
		var coinFace = Math.floor(Math.random() * 2);

		while(coinFace === 0){
			console.log("Heads! Flipping again...");
			var coinFace = Math.floor(Math.random() * 2);
		}
		
		console.log("Tails! Done flipping.");  

	* // loop runs 3 times as a function (here you could rather use a for loop!)
		var count = 0;  
  
		var loop = function(){  
			while(count < 3){  
				console.log("I'm looping!");  
			count++;  
			}
		};  
  
		loop();  
* do/while Loop
	*
	var loopCondition = value;  
  
	do {  
		code  
	} while (loopCondition);  
	* will loop once and then check the loop condition, weather it sould keep on looping.
	* 
	var getToDaChoppa = function(){  
	    var condition = true;  
	      
	    do {  
	        console.log("choppa?");  
	        condition = false;  
	    } while(condition);  
	       
	};  
  
	getToDaChoppa();

* Switch-Case Statement
	*
	var expression = value;  
  
	switch(expression){  
  
		case option1:  
			code;  
			break;  
  
		case optionN:  
			...  
			break;  
  
		default:  
			code;  
	}  

	* The switch preset a number of options (cases), then check an expression to see if it matches any of the case options.
	* If the expression doesn't correspond with any case option, the switch will execute the default code.
	* the switch ends with the 'break' statement. Without the break statement, it will run the next cases.
	*
	var answer = prompt("can you beleve this story","give an easy answer");  
  
	switch(answer) {  
		case 'yes':  
			console.log("you think it's ture");  
			break;  
		case 'no':  
	    	console.log("you think it's false");  
	    	break;  
		default:  
			console.log("thats no easy answer");  
	}

	*
	var  op = prompt("find yout what numbers you are operating","type operation: (substract / add / devise / multiplie / your guess / answer here");

	switch (op) {
	    case "substract":
	        console.log(4);
	        break;
	    case "add":
	        console.log(10);
	        break;
	    case "devise":
	        console.log("2 and something");
	        break;
	    case "multiplie":
	        console.log(21);
	        break;
	    case "7":
	        console.log("right");
	        break;
	    case "answer":
	        console.log("we looked for the number 7");
	        break;
	    default:
	        console.log("check your spelling");
	}

	* Example of a FCT that returns a review to a movie title
	```java script
		var movie = "Toy Story 2";

		var getReview = function (movie) {
		    
		    switch (movie) {
		        case "Toy Story 2":
		            return "Great story. Mean prospector.";
		        case "Finding Nemo":
		            return "Cool animation, and funny turtles.";
		        case "The Lion King":
		            return "Great songs.";
		        default:
		            return "I don't know!";
		    }
		};

		getReview(movie);		
	```

* Logic Operators
	* and : &&
		* evaluates to 'true' when all expressions are true.
	* or : ||
		* evaluates tu 'true' as long as one or more expressions are true.
	* not : !
		* turns true into false and vice versa.

<!-- amend whole chapter into cheatsheet -->
* Objects

	* Object Literal Notation:
	```java script
		var objX = {
		    propertyNameOrKey: value,
		    propertyNameOrKey: value,
		    propertyNameOrKey: value
	};
	```

	* Object Constructor
	-> make a 'new' thing called 'object' and store it in 'var'objX'. Make sure to write Object with a capital 'O'!
	```java script
		var objY = new Object();
	```

	-> add keys (and values) to the object.
	```java script
		'
			objY["key"] = "value";
			objY.key = "value";
	```

	* Defined lide a variable
	* Like key-number pairs, but the key doesn't necesserally has to be a number but can also be a string or a variable.
	* Handle data and procedure (functions).
	* Values can also be arrays: ```key: [val1, val2, val3],```
	* Represents real world things and entities by storing all relevant information in one place - an object.







# Actual Cheet Sheet
|  code  |  description  |  sugar  |
|---|---|---|
|  "string".length  |  counts length of string  |    | <!-- also echoes it? -->
|  arrayName.length  |  counts elements of an array  |    |
|  1 + 93 - 45 * 8.3838 / 93.03 |  calculate  |    |
|  //  |  comments  |    |
|  confirm('text')  |  opens pop-up dialogue box with 'text' and buttons 'ok' 'cancel'. clicking ok returns 'true', cancel returns 'false'  |    |
|  prompt('text','suggestion')  |  opens prompt with 'text'. the entered prompt is returned as "string" / "12+13". 'suggestion' is preenteret în the text field  |    |
|  console.log()  |  will take whatever is inside the parentheses and log it to the console below your code. commonly called printing out  |    |
|  % [modulo]  |  prints the remainder of the devision of two numbers eg: 23%10 = 2 with reminder 3  |    |
|  return argument  |  returns value that comes out of the Function. At that point, the function stops running.  |    |
|  var arrayName = ["sting", 4];  |  define array as var containing different data types  |    |
|  arrayName[i]  |  call data at index i  |    |
|  var bool = true  while (bool === true)  |  check, if condition is true with a variable(bool) that has a boolean as value  |  while (bool)  |
|  isNaN(VALUE);  isNaN("string");  isNaN(42);  isNan('42')  |  checks to see if that thing is not a number. BTU JS will convert a string that looks like a number into a number and thus will return false!  will return true  will return false.  will return flase too!  |    |
|  &&  |  Boolean AND operator.  |    |
|  ||  |  Boolean OR operator.  |    |
|  !=  |  Boolean NOT operator.  |    |
|    |    |    |
|    |    |    |
|    |    |    |
|    |    |    |



# Further Resources

* [Codecadamy JavaScript Glossary] (https://www.codecademy.com/articles/glossary-javascript)

* [Mozilla Developer Network (MDN)] (https://developer.mozilla.org/en-US/docs/Web/JavaScript)
