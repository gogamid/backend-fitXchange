var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { query } = require('express');
const port = 3000;
app.use(express.json());

require('dotenv').config()

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.get("/", async (req, res) => {
  res.json({ status: "FitXchange Rest Api Service" });
});

app.listen(process.env.PORT,() => {
    console.log(`Backend service is running on  ${process.env.PORT}`)
})