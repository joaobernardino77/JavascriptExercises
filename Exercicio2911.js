var names=["João","Maria","Andreia","Hugo","Ana"];
var grades=[10,12,8,16,6];
var persons = [];
var positives=[];
var failed = 0;
var numberOfStudents = 0;
function BuildPersonsObject(){
	
	for(var i = 0; i < names.length; i ++){
  	const person={
    	name: names[i], 
      grade: grades[i]
    }
		//1 –Fill the persons array with objects. You must have an object for each person, and it needs to have to properties (name and grade). This values provided need to come from the names and grades arrays.
		persons.push(person);
    //2-Fill the positive variable with just the name of the students which grade is equal or bigger then 10
    if(person.grade >= 10){
 	 		positives.push(person.name);
		}
    else
    {
    	failed++;
    }
    //4-Fill the variable numberOfStudents with the number of students that begin with the letter A
    var regEx = /^A/;
    if(regEx.test(person.name)){
     numberOfStudents++;
    }
	}
}


//call function
BuildPersonsObject();
//2
console.log(positives);
//3
console.log(failed);
//4
console.log(numberOfStudents);
//5-Create a new function that receives,a name and a grade in a argument,and according to thegrade it should return a message(NAME and GRADE should be replaced with the arguments received):
function personEvaluation (name, grade){
	if(grade < 10){
 		return `${name} had ${grade}, so it was a negative result - 0 to 10`;
 	}
	else if(grade < 13){
 		return `${name} had ${grade}, so it is a ok result – 10 to 13`;
 	}
 	else if(grade < 16){
 		return `${name} had ${grade}, so It is a good result – 13 to 16`;
 	}
 	else if(grade < 18){
 		return `${name} had ${grade}, so It is a very good result – 16 to 18`;
 	}
 	else{
 		return `${name} had ${grade}, so It is a excellent result – 18 to 20`;
 	}
}
console.log(personEvaluation("Nome1", Math.floor(Math.random() * 21)));
