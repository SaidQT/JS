const express = require("express");
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');

//This function is used to create users
const createUser = () => {
    const newFake = {
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.datatype.uuid()
    }
    return newFake;
}

//This function is used to create companies
const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name:faker.company.name(),
         address : {
            city:faker.location.city(),
            state:faker.location.state(),
            zipCode:faker.location.zipCode(),
            country:faker.location.country()
        }
    }
    return newCompany;
}

app.get("/api/users/new", (req, res) => {
    const user= createUser();
    res.json(user);
});

app.get("/api/companies/new", (req, res) => {
    const company= createCompany();
    res.json(company);
});

app.get("/api/user/company", (req, res) => {
    const company= createCompany();
    const user= createUser();
    res.json({company, user});
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

