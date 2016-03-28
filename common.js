var Animal, Dog, dog;

Animal = function(name) {
	this.name = name;
};
Animal.prototype.getName = function(){
		return "" + this.name;
	};

Dog = function(name) {
	Animal.apply(this, arguments);
};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Animal;
Dog.prototype.bark = function(){
		return "Dog " + this.name + " is barking";
	};

dog = new Dog("Aban");
// Tests
console.log(dog.getName());
console.log(dog.getName () === 'Aban');
console.log(dog.bark());
console.log(dog.bark () === 'Dog Aban is barking');
