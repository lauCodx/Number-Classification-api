const express = require('express');
const router = express.Router();
const axios = require('axios');
const { isArmstrong, isPrime, isPerfect, getDigitSum } = require('../helper/helperFunctions');

router.get('/classify-number', async (req, res) => {
    try {
        const number = req.query.number;

        if (!number) {
            return res.status(400).json({ error: true, number: "" });
        }

        // Check if the number is a valid integer
        if (!/^-?\d+$/.test(number)) {
            return res.status(400).json({ error: true, number });
        }

        const parsedNumber = parseInt(number, 10);

        const properties = [];
        if (isArmstrong(parsedNumber)) properties.push('armstrong');
        properties.push(parsedNumber % 2 === 0 ? 'even' : 'odd');

        let funFact;
        try {
            const response = await axios.get(
                `http://numbersapi.com/${parsedNumber}/math?json`,
                { timeout: 3000 }
            );
            funFact = response.data.text;
        } catch (error) {
            console.error('Failed to fetch fun fact:', error.message);
            funFact = 'No fun fact available';
        }

        res.json({
            number,
            is_prime: isPrime(parsedNumber),
            is_perfect: isPerfect(parsedNumber),
            properties,
            digit_sum: getDigitSum(parsedNumber),
            fun_fact: funFact
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;