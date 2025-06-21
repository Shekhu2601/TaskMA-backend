const express =require("express")
const app = express();
const dotenv= require("dotenv");
const bodyParser = require("body-parser");
const cors= require("cors")
const AuthRouter =require("./Routes/Authrouter");
const  Taskrouter  = require("./Routes/Task.route");

const corsConfig ={
    origin : "*",
    Credential: true,
    methods: ["GET","POST","PUT","PATCH",]

}
dotenv.config();
require("./Models/db")

app.use(bodyParser.json())

app.options(" ",cors(corsConfig))
app.use(cors(corsConfig))
const PORT =process.env.PORT
app.use('/auth', AuthRouter);
app.use('/api/task', Taskrouter)
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} `)
})