// insert doc ready
$(function() {

	var response = {
		good: [
			{
				gOptionOne: "Okay sweet you'll probably be okay, but you still better be grateful and give your hosts some sweet ass compliments"
			}, 
			{
				gOptionTwo: "You seriously don't have to worry. You are the golden egg of house guests."
			},
			{
				gOptionThree:"Sometimes, when you are a good house guest you can add to the house experience"
			},
			{
				gOptionFour:"You got it! work that house guest"
			},
			{
				gOptionFive:"Doesn't it feel so nice and pleasant to be a good house guest? So much better than those lazy a**holes on the other side."
			},
			{
				gOptionSix:"You would probably be a good roommate even! Hey! Isn't that a compliment you wanted to hear?"
			},
			{
				gOptionSeven: "Good on you! Do you have any idea how much you are helping your wonderful hosts out? Simply by being respectful, you have done a lot"
			},
			{
				gOptionEight: "When you leave, feel good about yourself, because you will have a place to stay when you return!"
			},
			{
				gOptionNine: "You mastering being a great house guest might also mean you can master JavaScript....think about it? "
			},
			{
				gOptionTen:"You're da f**king boss, feel good about yourself, because YOU are a mother f**king comrade to the hosts."
			},
		],
		bad: [
			{
				bOptionOne: "You probaby have never thought about anyone else but yourself in your whole life."
			},
			{
				bOptionTwo: "Kiss your roommates feet right now and apologize for being a terrible person."
			},
			{
				bOptionThree: "You're a lost f**king cause-- check yourself, and thank your god damn lucky stars if anyone ever lets you stay at their place ever again "
			},
			{
				bOptionFour: "Call anyone you are close to and apologize for being such a god damn selfish, disrespectful human being."
			},
			{
				bOptionFive:"I bet you have never worked a customer service job in your life."
			},
			{
				bOptionSix:"You know what, I bet you have never even worked a job before, or have had to clean a toilet, bougie f**k"
			},
			{
				bOptionSeven: "You know your hosts are smarter than you think, and they can read sh*t about you, they know... feel bad"
			},
			{
				bOptionEight: "Ya we all get it, you think this is a hotel, BUT if it is a hotel why aren't you giving your wonderful hosts $$!"
			},
			{
				bOptionNine: "I never want to meet you, and very few people do."
			},
			{
				bOptionTen:"Just so you know, everyone has talked about how you are a terrible house guest and soon you will never be able to stay at anyones place ever again. You're past host's 'friends' have become an army and you will not be able to fuck with the mega powers of the pissed off host's army. Good Job, you F**k."
			},

		]
	};

			var arrayOfUserAnswersG = [];
			// if(arrayOfUserAnswers.length >= 3) {
			// 	console.log("is greater than 3?")
			// }

			var arrayOfUserAnswersB = [];

		
		


		
	
	$('form').on('submit', function(e){
		// console.log( $( this ).serializeArray() );
		// add event.prevent function
		e.preventDefault();
		// list the questions within 
		var userChoice = $(this).find('input[name=answer]:checked').val();
		var q = $(this).find('fieldset').attr('class');
		// console.log(q);

		// console.log(userChoice);

		var goodChoice =$(this).find('input[value=good]:checked').val();
		var badChoice =$(this).find('input[value=bad]:checked').val();
	
		// gather the inputs the user has selected 
			if(userChoice === "good") {
				arrayOfUserAnswersG.push(userChoice);
			
	




			// for(i = 0; i < arrayOfUserAnswersG.length; i++){
			

			if(arrayOfUserAnswersG.length === 1){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.good[0].gOptionOne + '</h2>');
			}
		



			// for(i = 0; i < arrayOfUserAnswersG.length; i++){
			 if(arrayOfUserAnswersG.length === 2){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.good[1].gOptionTwo + '</h2>');

			}

		
			if(arrayOfUserAnswersG.length === 3){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.good[2].gOptionThree + '</h2>');

			}
			if(arrayOfUserAnswersG.length === 4){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.good[3].gOptionFour + '</h2>');

			}
			if(arrayOfUserAnswersG.length === 5){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.good[4].gOptionFive + '</h2>');

			}
			if(arrayOfUserAnswersG.length === 6){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.good[5].gOptionSix + '</h2>');

			}
			if(arrayOfUserAnswersG.length === 7){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.good[6].gOptionSeven + '</h2>');

			}
			if(arrayOfUserAnswersG.length === 8){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.good[7].gOptionEight + '</h2>');

			}
			if(arrayOfUserAnswersG.length === 9){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.good[8].gOptionNine + '</h2>');

			}
			if(arrayOfUserAnswersG.length === 10){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.good[9].gOptionTen + '</h2>');

			}

			if(arrayOfUserAnswersG.length === 10){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.good[9].gOptionTen + '</h2>');

			}
		}


			if(userChoice === "bad") {
				arrayOfUserAnswersB.push(userChoice);
			
			// console.log(arrayOfUserAnswersB);
			// console.log(userChoice);

		// pushing the data into the array. 
		
			// for(i = 0; i < arrayOfUserAnswersB.length; i++){
			if(arrayOfUserAnswersB.length === 1){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.bad[0].bOptionOne + '</h2>');

			}
		
			// for(i = 0; i < arrayOfUserAnswersB.length; i++){
			if(arrayOfUserAnswersB.length === 2){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.bad[1].bOptionTwo + '</h2>');

			}
		
			if(arrayOfUserAnswersB.length === 3){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.bad[2].bOptionThree + '</h2>');

			}
			if(arrayOfUserAnswersB.length === 4){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.bad[3].bOptionFour + '</h2>');

			}
			if(arrayOfUserAnswersB.length === 5){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.bad[4].bOptionFive + '</h2>');

			}
			if(arrayOfUserAnswersB.length === 6){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.bad[5].bOptionSix + '</h2>');

			}
			if(arrayOfUserAnswersB.length === 7){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.bad[6].bOptionSeven + '</h2>');

			}
			if(arrayOfUserAnswersB.length === 8){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.bad[7].bOptionEight + '</h2>');

			}
			if(arrayOfUserAnswersB.length === 9){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.bad[8].bOptionNine + '</h2>');

			}
			if(arrayOfUserAnswersB.length === 10){
			// for(i = 0; i < arrayOfUserAnswers.length; i++){
				// console.log("you are a good house guest");
				$(this).html('<h2 class = "choice">' + response.bad[9].bOptionTen + '</h2>');

			}
		}
	
			

		// filter the data so we only have the response to match the user


		// create a new filter variable that is an ARRRAYYY!!

		// we want to create an array with all of the users answers and then use a function that checks the length of good answers and the length of bad answers and then compare the two whichever is greater in length will have its own response. 

	// create an else if statement that loops whether or not the user choice more bad choices or more good choices 


	});
});

