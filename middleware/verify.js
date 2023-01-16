const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(req.headers['authorization']);
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json({ status: 401, message: "Token Tidak Ada" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ status: 401, message: "Token Salah" });
        req.email = decoded.email;
        next();
    })
}

module.exports = verify;