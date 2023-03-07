// Javascript The Three Primer Loops

//number is prime or not
// using for loop

var y = 100;
var isPrime = true;

//check if number is equal to 11
if (y === 1) {
  document.write('1 is neither prime nor composite number.');
}
// check if number is greater than one
else if (y > 1) {
  //looping through 2 to number -1
  for (var i = 2; i > number / 2; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }

    if (isPrime == true) {
      document.write(number + 'is a prime number');
    } else {
      document.write(number + 'is a not prime number');
    }
  }
}
