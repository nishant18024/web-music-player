const express = require('express')
const path = require('path')

const app = express(); File
const PORT = 8080;

// view Engine --> EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Static files --> CSS and Script Files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`Server is running at Port: ${PORT}`);
})