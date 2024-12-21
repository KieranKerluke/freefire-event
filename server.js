const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

// Handle form submissions - capture only the email field
app.post('/submit', (req, res) => {
    const { email } = req.body; // Capture only the email field

    // Log the captured email to the terminal
    console.log(`Captured Email: ${email}`);

    // Redirect to a new HTML page (e.g., 'thankyou.html') after successful form submission
    res.redirect('/confumation.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
