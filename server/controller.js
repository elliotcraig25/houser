module.exports = {
    postProperty: (req, res, next)=>{
        const {propertyName, address, city, state, zip, image, mmAmount, dmRent} = req.body
        req.app.get('db').create_property([propertyName, address, city, state, zip, image, mmAmount, dmRent])
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err)
        })
    },
    getProperty: (req, res, next)=>{
        req.app.get('db').get_property_info()
        .then(info=>res.status(200).send(info))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err)
        })
    },
    deleteProperty: (req, res, next)=>{
        const {id} = req.body
        console.log(req.body)
        req.app.get('db').delete_property(id)
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err)
        })
    }
}