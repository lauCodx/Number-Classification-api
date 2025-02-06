# Number-Classification-api
A REST API that analyzes numbers and provides mathematical properties with fun facts from NumbersAPI.

### Installation



1. Clone the repository:

```bash

git clone https://github.com/lauCodx/Number-Classification-api.git

cd number-classification-api

```

## For npm installation
`npm install`

## To start the server
`npm run start:dev`

## API Documentation

**Endpoint**: `GET /api`

## Features


- 🔢 Number property analysis (prime, perfect, Armstrong)

- 🧮 Digit sum calculation

- 🎉 Interesting math facts from NumbersAPI

- 🔒 CORS support

- ✅ Input validation

- 🚦 Error handling

- ⚡ Fast responses (<500ms)


# A backlink to my chosen programming language
[https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)

**Response Format**:

```json
{
   "number": "371",
    "is_prime": false,
    "is_perfect": false,
    "properties": [
        "armstrong",
        "odd"
    ],
    "digit_sum": 11,
    "fun_fact": "371 is a narcissistic number."
};