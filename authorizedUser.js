const kite = (req,res,next) => {
    const method = req.method
    const url = req.url
    const thing = 'this is a kite'
    console.log(method, url, thing)
    next()
}

const authorizedUser = (req, res, next) => {

    const { apikey } = req.query
    if (apikey === '') {
        console.log('authorized')
        //modifies the request object for the next response
        req.user = { email: apikey, id: 1 }
        next()
    } else {
        console.log('unauthorized access')
        res.send({result:[], status: 401, message: 'unauthorized access: use email as api key'})
    }
}

module.exports = kite
module.exports = authorizedUser