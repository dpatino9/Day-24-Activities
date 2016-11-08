var Student = require('./student.js');

var Class = function(NameofProfessor, RoomNumber){
	this.Students = [];
	this.NumberofStudents = 0;
	this.NameofProfessor = NameofProfessor;
	this.RoomNumber = RoomNumber;
	this.addStudent = function(g, n, r){
		this.Students.push(new Student(g, n, r));
		this.NumberofStudents = this.Students.length;
	}
}

module.exports = Class;