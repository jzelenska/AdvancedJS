
//ex1

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}

const checkAge = (age) => age > 18 || confirm('Do you have your parents permission to access this page?');


// ex2

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(3, 2));   // 9
console.log(pow(3, 3));   // 27
console.log(pow(1, 100)); // 1

//ex3

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

//ex4

let calculator = {
  a: 0,
  b: 0,

  read() {
    this.a = +prompt("Enter the first number:", 0);
    this.b = +prompt("Enter the second number:", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// ex5

let min = (a, b) => (a < b ? a : b);

// Example usage:
alert(min(2, 5)); 