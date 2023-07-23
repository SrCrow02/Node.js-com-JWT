const express = require("express");
const body = require("body-parser");

const app = express()


app.use(body.json())
app.use(body.urlencoded({extended: false}))

require("./controllers/authController")(app)

app.listen(3000, () => {
    console.log("Estou Rodando!")
})