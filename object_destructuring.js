// First method 

const address = {
    street: "123something",
    city: "This is sparta 🗿",
    country: "Ohio :p"
}

const {street, city, country } = address;

console.log(street);

// Second Method

const {city: ct} = address;

console.log(ct);