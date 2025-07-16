import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //console.log("Decoded Token:", decoded); // 🔍 Make sure `id` exists

        req.user = decoded; // ✅ safer than mutating req.body
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: error.message });
    }
};

export default authUser;
