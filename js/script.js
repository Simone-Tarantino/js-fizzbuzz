// Scrivi un programma che stampi i numeri da 1
// a 100,
// ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz.
// Per i numeri che sono sia multipli di 3
// che di 5 stampi FizzBuzz.


for (var i = 1; i < 101; i++) {
  if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
    console.log("FizzBuzz");
    document.getElementById("number_list").innerHTML += "<li>" + "FizzBuzz" + "</li>";
  } else if (Number.isInteger(i / 3)) {
    console.log("Fizz");
    document.getElementById("number_list").innerHTML += "<li>" + "Fizz" + "</li>";
  } else if (Number.isInteger(i / 5)) {
    console.log("Buzz");
    document.getElementById("number_list").innerHTML += "<li>" + "Buzz" + "</li>";
  } else {
  console.log(i);
  document.getElementById("number_list").innerHTML += "<li>" + i + "</li>";
  }
}

var j = 1;
while (j < 101) {
  if (Number.isInteger(j / 3) && Number.isInteger(j / 5)) {
    console.log("FizzBuzz");
    document.getElementById("number_list_while").innerHTML += "<li>" + "FizzBuzz" + "</li>";
  } else if (Number.isInteger(j / 3)) {
    console.log("Fizz");
    document.getElementById("number_list_while").innerHTML += "<li>" + "Fizz" + "</li>";
  } else if (Number.isInteger(j / 5)) {
    console.log("Buzz");
    document.getElementById("number_list_while").innerHTML += "<li>" + "Buzz" + "</li>";
  } else {
  console.log(j);
  document.getElementById("number_list_while").innerHTML += "<li>" + j + "</li>";
  }
  j++;
}
