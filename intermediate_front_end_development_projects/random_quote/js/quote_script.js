$(document).ready(function() {
	var errorMessage={message:"Unable to get data !  Please Try Again !",by:"Aung Myo Kyaw"};
/* 	function getQuote(){
		$.ajax({
			url:'https://andruxnet-random-famous-quotes.p.mashape.com/',
			type:'POST',
			dataType:'json',
			success:function(data){
				$("#quote").html('"'+data.quote+'"');
				$("#author").html(data.author);
				$("a.twitter-share-button").attr("data-text",data.quote);
				$("#quote,#author").addClass('animated bounceInLeft');
				$("#quote,#author").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$("#quote,#author").removeClass('animated bounceInLeft');
				});
			},
			error:function(error){
				$("#quote").html(errorMessage.message);
				$("#author").html(errorMessage.by);
			},
			beforeSend:function(xhr){
				xhr.setRequestHeader("X-Mashape-Authorization", "PSKgJRegHBmsh1A157uuoGMhkUpxp1hW4VQjsn5BUUBMMF18AH");
			}
		});
	} */
	var randomNumber = 0;
	function getQuote(){
		
		//Array of Quotes		
		var quoteSet = ["Talk is cheap. Show me the code",
		                "Programs must be written for people to read, and only incidentally for machines to execute",
						"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it",
                        "That's the thing about people who think they hate computers. What they really hate is lousy programmers",
						" Beware of bugs in the above code; I have only proved it correct, not tried it",
						"I'm not a great programmer; I'm just a good programmer with great habits",
						"You've baked a really lovely cake, but then you've used dog shit for frosting",
						"Truth can only be found in one place: the code",
						"A language that doesn't affect the way you think about programming is not worth knowing",
						"A year spent in Artificial Intelligence is enough to make one believe in God",
						"Perl – The only language that looks the same before and after RSA encryption",
						"Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
						"The most disastrous thing that you can ever learn is your first programming language",
						"Simple things should be simple, complex things should be possible",
						"It is easier to port a shell than a shell script"];

	
    //Calculate Random Value
     randomNumber = Math.floor((Math.random() * 13) + 1);
	 return quoteSet[randomNumber];
     	 
		
		
	}
	
	function getImage(randomNumber){
	 var imgArray = new Array();
	 for(var i=0;i<15;i++){
		 imgArray[i] = new Image();
		 
	 }
	  
	  imgArray[0].src = "images/linus_torvalds.jpg";
	  imgArray[1].src = "images/herald_abelson.jpg";
	  imgArray[2].src = "images/brian_kernighan.jpg";
	  imgArray[3].src = "images/larry_niven.jpg";
	  imgArray[4].src = "images/donald_knuth.jpg";
	  imgArray[5].src = "images/Kent_Beck.jpg";
	  imgArray[6].src = "images/Steve_jobs.jpg";
	  imgArray[7].src = "images/Robert_c_Martin.jpg";
	  imgArray[8].src = "images/Alan_Perlis.jpg";
	  imgArray[9].src = "images/Alan_Perlis.jpg";
	  imgArray[10].src = "images/Keith_Bostic.jpg";
	  imgArray[11].src = "images/Martin_Fowler.jpg";
	  imgArray[12].src = "images/Alan_Kay.jpg";
	  imgArray[13].src = "images/Alan_Kay.jpg";
	  imgArray[14].src = "images/Larry_wall.jpg";
	   
	  return imgArray[randomNumber].src;
	}
	
	function getAuthor(randomNumber){
		var authorNames = new Array();
			 for(var i=0;i<15;i++){
		 authorNames[i] = "";
		 
	 }
	 
	 authorNames[0] = "~Linus Torvalds";
	 authorNames[1] = "~Herald Abelson";
	 authorNames[2] = "~Brian Kernighan";
	 authorNames[3] = "~Larry Niven";
	 authorNames[4] = "~Donald Knuth";
	 authorNames[5] = "~Kent Beck";
	 authorNames[6] = "~Steve Jobs";
	 authorNames[7] = "~Robert C Martin";
	 authorNames[8] = "~Alan Perlis";
	 authorNames[9] = "~Kent Beck";
	 authorNames[10] = "~Keith Bostic";
	 authorNames[11] = "~Martin Fowler";
	 authorNames[12] = "~Alan Kay";
	 authorNames[13] = "~Alan Kay";
	 authorNames[14] = "~Larry Wall";
	 
	 return authorNames[randomNumber];
		
	}

	$("#new").click(function() {
	
		$("#quote").html('"'+getQuote()+'"');
		$("#geekPicture").attr('src',getImage(randomNumber));
		$("#author").html(getAuthor(randomNumber));
	});
	$("#tweet").click(function() {
		var curQuote=$("#quote").html();
		var curAuthor=$("#author").html();
		var url='https://twitter.com/intent/tweet?text=' + encodeURIComponent(curQuote+"\n"+curAuthor);
		window.open(url)
	});
});