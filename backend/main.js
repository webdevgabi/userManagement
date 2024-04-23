const express = require('express')
const app = express();

// SETTINGS
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// ROUTES
const loginRoute = require("./routes/login")
app.use("/login", loginRoute)

const registrationRoute = require("./routes/registration")
app.use("/registration", registrationRoute)

const getRoute = require("./routes/get")
app.use("/get", getRoute)

const updateRoute = require("./routes/update")
app.use("/update", updateRoute)

const deleteRoute = require("./routes/delete")
app.use("/delete", deleteRoute)

app.listen(3000)