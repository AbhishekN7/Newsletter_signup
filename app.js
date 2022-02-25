
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {
    const firstName = req.body.fName;
    const secondName = req.body.lName;
    const Email = req.body.email;

    const data = {
        members: [
            {
                email_address: Email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: secondName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const request = https.request(url,options,function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })

    })
    request.write(jsonData);
})

app.listen(3000, function () {
    console.log("Server is running at port 3000");
})



