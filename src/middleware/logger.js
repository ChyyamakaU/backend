
const logger = (req, res, next)=> {
    console.log(req.method, req.url);
    next();
}

// eslint-disable-next-line no-undef
module.exports =logger;
