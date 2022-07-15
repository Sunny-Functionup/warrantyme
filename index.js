const bodyParser = require("body-parser");
const express = require("express")
const route = require("./routes/route.js")
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



mongoose.connect("cluster to store data")

.then(()=>console.log("Mongodb is connected"))
.catch(err =>console.log(err))

app.use("/",route);
app.listen(process.env.PORT || 3000,function(){
    console.log(`app running`+(process.env.PORT || 3000))
})