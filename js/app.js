'use strict';

var startingPoints = 10;
var currentPoints = 10;
var question;

do {
  var user = prompt('Hi there. What\'s your name?');
  if (user) {
    alert('Hi, ' + user + '. My name is Bryan and you\'re going to guess where I\'m from. \n\nYou will start with 10 points. Each question you get wrong will your reduce your points by 2. \n\nLet\'s get started!');
    console.log('user:' + user);
  } else {
    console.log('User failed to enter a value.');
    alert('Hmmmm. I think you forgot something. Try again.');
  }
}
while (!user);

question = 'Do you think Bryan talks with a drawl?';
do {
  // Unresolved bug here and in each subsequent question. See LJ-code201-day5.md for more information.
  // https://github.com/u21i448dn29i7/learning-journal/blob/master/LJ-code201-day5.md
  var q1 = (prompt(question)).toLowerCase();

  if (q1 === 'y' || q1 === 'yes') {
    alert('You\'ve got my number! Good ear. \n\nYou currently have ' + currentPoints + ' out of ' + startingPoints + ' points.');
    console.log(question + ':' + q1);
  } else if (q1 === 'n' || q1 === 'no') {
    alert('Try to listen a little more closely. Or... get a couple of good cocktails in me and you\'ll hear it. \n\nYou currently have ' + (currentPoints -= 2) + ' out of ' + startingPoints + ' points.');
    console.log(question + ':' + q1);
  } else {
    alert('I think you made a typo. You entered \'' + q1 + '\'. Try again!');
    console.log(question + ':' + q1);
  }
}
while (q1 !== 'y' && q1 !== 'n' && q1 !== 'yes' && q1 !== 'no');


question = 'Do you think Bryan likes sweet BBQ sauce?';
do {
  var q2 = (prompt(question)).toLowerCase();

  if (q2 === 'y' || q2 === 'yes') {
    alert('No, sorry. In fact, sauce kinda ruins good BBQ. \n\nYou currently have ' + (currentPoints -= 2) + ' out of ' + startingPoints + ' points.');
    console.log(question + ':' + q2);
  } else if (q2 === 'n' || q2 === 'no') {
    alert('You, my friend, are correct! Bryan acutally thinks almost any sauce ruins good BBQ. \n\nYou currently have ' + currentPoints + ' out of ' + startingPoints + ' points.');
    console.log(question + ':' + q2);
  } else {
    alert('I think you made a typo. You entered \'' + q2 + '\'. Try again!');
    console.log(question + ':' + q2);
  }
}
while (q2 !== 'y' && q2 !== 'n' && q2 !== 'yes' && q2 !== 'no');


question = 'Do you think Bryan might have a photo of himself from the late 70\'s sitting in a Space Shuttle simulator at the Johnson Space Center?';
do {
  var q3 = (prompt(question)).toLowerCase();
  if (q3 === 'y' || q3 === 'yes') {
    alert('You would be correct! And that center part mullet was amazing. \n\nYou currently have ' + currentPoints + ' out of ' + startingPoints + ' points.');
    console.log(question + ':' + q3);
  } else if (q3 === 'n' || q3 === 'no') {
    alert('Guess what? I actually do! That center part mullet was amazing. \n\nYou currently have ' + (currentPoints -= 2) + ' out of ' + startingPoints + ' points.');
    console.log(question + ':' + q3);
  } else {
    alert('I think you made a typo. You entered \'' + q3 + '\'. Try again!');
  }
}
while (q3 !== 'y' && q3 !== 'n' && q3 !== 'yes' && q3 !== 'no');


question = 'Do you think Bryan spent a lot of his childhood watching baseball in the King Dome?';
do {
  var q4 = (prompt(question)).toLowerCase();
  if (q4 === 'y' || q4 === 'yes') {
    alert('Hmmmmm, nope. I really thought you\'d be on to me by now. \n\nYou currently have ' + (currentPoints -= 2) + ' out of ' + startingPoints + ' points.');
    console.log(question + ':' + q4);
  } else if (q4 === 'n' || q4 === 'no') {
    alert('Ah, ha! You\'re a good guesser or you\'re onto me. \n\nYou currently have ' + currentPoints + ' out of ' + startingPoints + ' points.');
    console.log(question + ':' + q4);
  } else {
    alert('I think you made a typo. You entered \'' + q4 + '\'. Try again!');
    console.log(question + ':' + q4);
  }
}
while (q4 !== 'y' && q4 !== 'n' && q4 !== 'yes' && q4 !== 'no');


question = 'Do you think Bryan might, just maybe, have a pair of cowboy boots for every occasion?';
do {
  var q5 = (prompt(question)).toLowerCase();
  if (q5 === 'y' || q5 === 'yes') {
    alert('Oh, my. I think you\'ve really got this now. \n\nYou currently have ' + currentPoints + ' out of ' + startingPoints + ' points.');
    console.log(question + ':' + q5);
  } else if (q5 === 'n' || q5 === 'no') {
    alert('Well, you would definitly be wrong. For someone that rarely wears boots anymore, he has way too many. \n\nYou currently have ' + (currentPoints -= 2) + ' out of ' + startingPoints + ' points.');
    console.log(question + ':' + q5);
  } else {
    alert('I think you made a typo. You entered \'' + q5 + '\'. Try again!');
    console.log(question + ':' + q5);
  }
}
while (q5 !== 'y' && q5 !== 'n' && q5 !== 'yes' && q5 !== 'no');


question = 'Ok! You currently have ' + currentPoints + ' out of ' + startingPoints + ' points. \n\n It\'s time to guess. \n\nWhere do you think Bryan is from? Texas or Washington?';
do {
  var q6 = (prompt(question)).toLowerCase();
  if (q6 === 'texas') {
    alert('Good job! \n\nSing it with me: "The stars at night, are big and bright...." \n\nLet\'s go to the bonus round!');
    console.log(question + ':' + q6);
  } else if (q6 === 'washington') {
    alert('Ooooooo... no. That would be the wrong answer. You loose all your points. \n\nYou currently have ' + (currentPoints -= currentPoints) + ' out of ' + startingPoints + ' points. \n\nLet\'s go to the bonus round!');
    console.log(question + ':' + q6);
  } else {
    alert('I think you made a typo. You entered \'' + q6 + '\'. Try again!');
    console.log(question + ':' + q6);
  }
}
while (q6 !== 'washington' && q6 !== 'texas');


var americanos = 7;
var guessesRemaining = 4;
var exit = false;

if (q6 === 'texas') {
  while (exit !== true) {
    question = 'You won the guessing game, but you can earn up to 4 bonus points by guessing the number of double short americanos this Texan used to drink in a day. \n\nYou only have ' + guessesRemaining + ' guesses remaining! \n\n\ What do you think?';

    if (guessesRemaining >= 0) {
      var q8 = prompt(question);
      q8 = parseInt(q8);
      if (q8 < americanos) {
        guessesRemaining--;
        alert('No, it was more than that.');
        console.log(question + ':' + q8);
      } else if (q8 > americanos) {
        alert('Egads, no.');
        guessesRemaining--;
        console.log(question + ':' + q8);
      } else {
        currentPoints = currentPoints + guessesRemaining;
        alert('Congrats, you got it! \n\nYou ended up with ' + guessesRemaining + ' bonus points and a grand total of ' + currentPoints + ' points. \n\nThanks for playing!');
        console.log(question + ':' + q8);
        exit = true;
      }
    }
  }
} else {
  while (exit !== true) {
    question = 'Since you lost all your points, you can redeem yourself with up to 4 bonus points by guessing the number of double short americanos this Texan used to drink in a day. \n\nYou only have ' + guessesRemaining + ' guesses remaining! \n\n\ What do you think?';

    if (guessesRemaining >= 0) {
      var q7 = prompt(question);
      q7 = parseInt(q7);
      if (q7 < americanos) {
        guessesRemaining--;
        alert('No, it was more than that.');
        console.log(question + ':' + q7);
      } else if (q7 > americanos) {
        alert('Egads, no.');
        guessesRemaining--;
        console.log(question + ':' + q7);
      } else {
        currentPoints = currentPoints + guessesRemaining;
        alert('Congrats, you got it! \n\nYou ended up with ' + guessesRemaining + ' bonus points and a grand total of ' + currentPoints + '. \n\nThanks for playing!');
        console.log(question + ':' + q7);
        exit = true;
      }
    } else {
      alert('Sorry, no bonus points for you. \n\nHow many double short americanos would this Texan drank in a day? \n\nJust like a Tootsie Pop, the world may never know.');
      exit = true;
    }
  }
}


var arrayOfCocktails = ['old fashioned','martini','manhattan','cuba libre','mai tai','daiquiri','gin and tonic','anything with balance and depth. none of that sweet pre-mix garbage.'];
guessesRemaining = 6; // reset guessesRemaining
exit = false; //reset exit

while (exit !== true) {
  question = 'Psyche! Another bonus round!! \n\nCan you guess a type of cocktail Bryan might enjoy? \n\nYou only have ' + guessesRemaining + ' guesses remaining! \n\nGive us a guess!';

  if (guessesRemaining >= 0) {
    var q9 = prompt(question);
    if (arrayOfCocktails.indexOf(q9.toLowerCase()) < 0) {
      guessesRemaining--;
      alert('Nope. Try again!');
      console.log(question + ':' + q9);
    } else {
      currentPoints = currentPoints + guessesRemaining;
      alert('Wowzers, you actually guessed one! \n\nYou ended up with ' + guessesRemaining + ' bonus points and a grand total of ' + currentPoints + '. \n\n The answers were: ' + arrayOfCocktails.toString());
      console.log(question + ':' + q9);
      exit = true;
    }
  } else {
    alert('Sorry, no additional bonus points for you. \n\nJust for future reference the possible answers were: ' + arrayOfCocktails.toString());
    exit = true;
  }
}
