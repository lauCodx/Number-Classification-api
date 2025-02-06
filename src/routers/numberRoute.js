const express = require('express');
const router = express.Router();
const axios = require('axios');
const { isArmstrong, isPrime, isPerfect, getDigitSum } = require('../helper/helperFunctions');

router.get('/classify-number', async (req, res) => {
    try {
        const number = req.query.number; 
        if (!number) {
            return res.status(400).json({ error: 'Number is required' });
        }

        const properties = [];
        if (isArmstrong(number)) properties.push('armstrong');
        properties.push(number % 2 === 0 ? 'even' : 'odd');

        let funFact;
        try {
            const response = await axios.get(
                `http://numbersapi.com/${number}/math?json`,
                { timeout: 3000 }
            );
            funFact = response.data.text;
        } catch (error) {
            console.error('Failed to fetch fun fact:', error.message);
            funFact = 'No fun fact available';
        }

        res.json({
            number: number,
            is_prime: isPrime(number),
            is_perfect: isPerfect(number),
            properties: properties,
            digit_sum: getDigitSum(number),
            fun_fact: funFact
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;