var Class = require('./class.js');


var ourClass = new Class(Albert Einstein, 801);

//none
console.log('student?', ourClass.Student);

ourClass.addStuddent('Diego', 'Computers', 3.8);

console.log('Students?', ourClass.Student);

ourClass.addStuddent('Juanita', 'Logic', 4.0);
ourClass.addStuddent('Rick', 'Gym', 2.0);
ourClass.addStuddent('Luisa', 'Business', 3.8);
ourClass.addStuddent('Ahmed', 'Health', 4.0);
ourClass.addStuddent('Nate', 'Music', 3.2);

console.log(ourClass.Student);
