const express = require('express')
const path = require('path')

const app = express(); File
const PORT = 8080;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.listen(PORT, () => {
    console.log(`Server is running at Port: ${PORT}`);
})