/* Same keys and values
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
} */

/* Write an ES2015 Version */

function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}

/* Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!" */

 var favoriteNumber = 42;
let  instructor_1 = {
  firstName: "Colt",
 
}

instructor_1[favoriteNumber] = "That is my favorite!";


/* Object Methods
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
} */


var instructor = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye (){
    return this.firstName + " says bye!";
  }
}

/* createAnimal function
Write a function which generates an animal object. The function should accepts 3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered. */


function createAnimal(species,verb,noise)
{ return {
  species,
  [verb] :function(){console.log(noise)}
}
}