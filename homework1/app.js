function Animal(name, kind) {
    this.name = name;
    this.kind = kind;
    this.speak = function(message) {
      console.log(`${this.kind} says: '${message}'`);
    }
  }
  
  const name = prompt("Enter the name of the animal:");
  const kind = prompt("Enter the kind of the animal:");


  const dog = new Animal("Buddy", "Dog");
  
 
  dog.speak("Hey bro!!!");