const express =require("express")
const app = express();
const dotenv= require("dotenv");
const bodyParser = require("body-parser");
const cors= require("cors")
const AuthRouter =require("./Routes/Authrouter");
const  Taskrouter  = require("./Routes/Task.route");
const axios =require("axios") ;
const corsConfig ={
    origin : "*",
    Credential: true,
    methods: ["GET","POST","PUT","PATCH", "DELETE "]

}
dotenv.config();
require("./Models/db")

app.use(bodyParser.json())

app.options(" ",cors(corsConfig))
app.use(cors(corsConfig))
const PORT =process.env.PORT





const url = `http://taskma-backend.onrender.com/api/task/get-all-task`;
const interval = 30000;

function reloadWebsite() {
  axios
    .get(url)
    .then((response) => {
      console.log("website reloded");
    })
    .catch((error) => {
      console.error(`Error : ${error.message}`);
    });
}

setInterval(reloadWebsite, interval);

app.use('/auth', AuthRouter);
app.use('/api/task', Taskrouter)
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} `)
})
