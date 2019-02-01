module.exports = {
    postProperty: (req, res, next)=>{
        const {propertyName, address, city, state, zip, image, mmAmount, dmRent} = req.body
        req.app.get('db').create_property([propertyName, address, city, state, zip, image, mmAmount, dmRent])
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err)
        })
    }
}