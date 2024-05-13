'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
    const radius = Number(req.params.r);
    if (isNaN(radius)) {
        return res.status(400).json({error: "Invalid radius"});
    }

    const area = Math.PI * radius * radius;
    const circumference = Math.PI * 2 * radius;

    res.json({
        area: area,
        circumference: circumference
    });
});

// define endpoint for exercise 2 here
app.get('/hello/name', (req, res) => {
    const firstName = req.query.first;
    const lastName = req.query.last;

    if (!firstName || !lastName) {
        let missingParams = [];
        if (!firstName) missingParams.push("first");
        if (!lastName) missingParams.push("last");
        return res.status(400).send(`Missing Required GET parameters: ${missingParams.join(", ")}`);
    }

    res.send(`Hello ${firstName} ${lastName}`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
