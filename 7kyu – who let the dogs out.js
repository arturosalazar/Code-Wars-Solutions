/* 
	I wanted to write some classes for dogs. In my model dogs either bark or sleep. 
	I know that it is popular practice to set default values like this

	var value = value || DEFAULT_VALUE

	And so i did. But something is wrong, and I don't know why. Can you help me out?

Starting Code:

var BARK  = 'woof woof';
var SLEEP = 'zzzzzzzzz....';

function dog_bark_by_default(bark){
  bark = bark || true;
  return bark ? BARK : SLEEP;
}

function dog_bark_only_if_told_so(bark){
  bark = bark || false;
  return bark ? BARK : SLEEP;
}

function dog_dont_bark_by_default(dont_bark){
  dont_bark = dont_bark || true;
  return !dont_bark ? BARK : SLEEP;
}

function dog_dont_bark_only_if_told_so(dont_bark){
  dont_bark = dont_bark || false;
  return !dont_bark ? BARK : SLEEP;
}
*/

var BARK  = 'woof woof';
var SLEEP = 'zzzzzzzzz....';

//use default parameters
function dog_bark_by_default(bark = true){
  return bark ? BARK : SLEEP;
}

function dog_bark_only_if_told_so(bark = false){
  return bark ? BARK : SLEEP;
}

function dog_dont_bark_by_default(dont_bark = true){
  return !dont_bark ? BARK : SLEEP;
}

function dog_dont_bark_only_if_told_so(dont_bark = false){
  return !dont_bark ? BARK : SLEEP;
}
