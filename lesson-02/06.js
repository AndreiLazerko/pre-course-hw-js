let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "LA"
  }
};

let newpassportWithAddress = {
  ...passportWithAddress,
  city :"Bobryisk"
}

console.log(passportWithAddress);
console.log(newpassportWithAddress);