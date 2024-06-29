let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "LA"
  }
};
console.log(passportWithAddress);
passportWithAddress.address.city = 'Bobryisk';

let newpassportWithAddress = {
  ...passportWithAddress
}

console.log(newpassportWithAddress);