const kite = (req,res,next) => {
    const method = req.method
    const url = req.url
    const thing = 'this is a kite'
    console.log(method, url, thing)
    next()
}

function authorizedEmail(inputText) {
    var requireEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (inputText.value.match(requireEmail)) {
        console.log('not a valid email address')
        return false
    }
}

const authorizedUser = (req, res, next) => {

    const { apikey } = req.query
    if (apikey === authorizedEmail) {
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