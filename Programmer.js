function programmer(name, position, age, language) {
    this.Name = name;
    this.Position = position;
    this.Age = age;
    this.favLanguage = language;
    
//METHOD WHICH PRINTS ALL OF THE STATS FOR A CHARACTER//
    this.printAll = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position +  "\nAge: " + this.age + "\nFavLanguage: " + this.language);
        console.log("\n-------------\n");
    };

var Greg = new programmer("Greg Daniel", "IT Support", 23, "Java");
var Diego = new programmer("Diego Patino", "Developer", 33, "React");

bob.printAll();