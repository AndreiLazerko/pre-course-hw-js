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
  address:{
    country: "USA",
    city: 'Bobryisk'
  }
}
console.log(passportWithAddress);
console.log(newpassportWithAddress);

