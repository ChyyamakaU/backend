const authorisation =(req, res, next)=>{

    const {role}= req.user;

    if (role !=="admin"){

        return res.status(403).json( {
        message:"access denied. Admins only"
    }) ;
   }
   next();
}

module.exports= authorisation;