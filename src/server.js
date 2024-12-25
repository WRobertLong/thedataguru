const path = require('path');
const express = require('express');
const app = express();

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
