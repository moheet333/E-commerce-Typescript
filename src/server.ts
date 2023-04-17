import express from 'express'

const app = express()
const PORT: number = 3000 || null

app.get("/", function (req, res) {
    let dir = __dirname.substring(0, __dirname.length - 4)
    res.sendFile(dir + "/index.html")
})

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);

})