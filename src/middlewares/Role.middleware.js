const authRole = (...allowedRole) => {
    return (req, res, next) => {
        if (!allowedRole.includes(req.user.role)) {
            return res.status(403).json({
                message: 'access decine'
            })
        }
        next()
    }
}

module.exports = authRole