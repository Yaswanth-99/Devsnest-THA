/*1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
Sample Output: name,sclass,rollno */
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
for (let item in student){
    console.log(item);}

/*2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. 
Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };*/
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(student);
//{name: "David Rayy", sclass: "VI", rollno: 12}
delete student.rollno;
console.log(student);
//{name: "David Rayy", sclass: "VI"}

/*3. Write a JavaScript program to get the length of a JavaScript object.  
Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };*/
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
count = 0 ;
for (let item in student){
    count = count+1;}
console.log(count);

/* 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; */
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
for(let item in library){
    console.log(library[item]);
}
//{author: "Bill Gates", title: "The Road Ahead", readingStatus: true}
//{author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true}
 //{author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", readingStatus: false}

/*5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius 
and h is the height of the cylinder. Try To Attempt : Difficult Level Increased*/
function cyl(r,h){
    return (Math.PI * 2*r*h);
}
console.log(cyl(3.2,4.5).toFixed(4));
