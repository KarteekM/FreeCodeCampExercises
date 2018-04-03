function getQuote() {
var quotes = ["Hello" ,
			  "This is the first quote", 
			  "This is the second quote",
			  "This is the third quote",
              "This is the fourth quote",
			  "This is the fifth quote"];
 var generatedQuote= quotes[Math.ceil((Math.random()%6).toFixed(2))];  
 document.getElementById('randomQuotebox').innerHTML=generatedQuote;
}			  
