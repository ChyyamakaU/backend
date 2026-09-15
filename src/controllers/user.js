const emailSent = (req, res) => {

res.status(200).json({
    "status":"sucess",
    "message": "Congratulations"
})
}

// eslint-disable-next-line no-undef
module.exports = {emailSent};