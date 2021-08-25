exports.signupGetController = (req,res,next) =>{
    res.render('pages/auth/signup', {title : 'Register Your Account'})
}