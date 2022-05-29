//Creation of the server
const cors = require("cors")
const express = require("express")

const app = express()

app.use(express.json())
app.use(cors())

//Port needed for environment hosting
const PORT = 3000;

//Base Route
app.get('/', (req, res) => {
    res.status(200).json({"message": "You are now entering the world of Fantasy"})
})

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}/`)
})
