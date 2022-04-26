const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      console.log(this.firstName+" "+this.lastName);
    }
  }
  
  // This will return [object Object] (the owner object)
  myObject.fullName();