var firstLast = function(input) {
  var sentenceLength = input.length;
  var firstLetter = input.charAt(0);
  var lastLetter = input.charAt(sentenceLength - 1 );
  var firstLast = firstLetter + lastLetter;
  return firstLast.toUpperCase();
};

var reverseLetters = function(reverse) {
  var firstLetter = reverse.charAt(0);
  var lastLetter = reverse.charAt(1);
  var reversedLetters = lastLetter + firstLetter;
  return reversedLetters;
};

var combineFunctions = function(combine) {
  var output = firstLast(combine);
  var output2 = reverseLetters(output);
  var output3 = combine + output2;
  return output3;
};

var fourthFunction = function(input) {
  var sentenceLength = input.length;
  var divide = Math.round(sentenceLength / 2);
  var locateLetter = input.charAt(divide);
  var combine = locateLetter + combineFunctions(input);

  alert(combine);
};

jQuery("h1").click(function() {
  var input = prompt("Enter a sentence:");
  alert(input);
});

jQuery("p").click(function() {
  var input = prompt("Enter a sentence:");
  fourthFunction(input);
});
