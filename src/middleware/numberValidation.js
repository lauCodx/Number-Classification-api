export const validateNumber = (req, res, next) => {
    const number = req.query.number;
    if (!number || isNaN(number)) {
        return res.status(400).json({ 
            number: number || null, 
            error: true 
        });
    }
    req.number = parseInt(number);
    next();
};