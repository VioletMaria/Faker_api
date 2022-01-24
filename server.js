const express = require("express");
const app = express();
const port = 8000;
const faker = require("@faker-js/faker");
const User = require("./User.js")
const Company = require("./Company.js");
const UserAndCompany = require("./UserAndCompany.js");

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json(new UserAndCompany());
})

app.listen(port, () => console.log(`running on port ${port}`))