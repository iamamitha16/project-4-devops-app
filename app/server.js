
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Project 4 - DevOps Application!');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'UP',
        message: 'Application is running successfully'
    });
});

if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;

