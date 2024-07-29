exports.getAllCategory = (req,res) =>{

    res.status(200).json({
        status : "success",
        data:[
            {
                id : '01',
                name: 'gadget',
            },
            {
                id: '02',
                name: 'fashion',
            },
            {
                id: '03',
                name: 'sports'
            }
        ]
    })
}


exports.createNewCategory = (req,res) =>{
    const {name,description} = req.body;

    if(!name && !description){
        return res.status(400).json({
            status: 'failed',
            message: 'name or description cannot be empty'
        })
    }

    return res.status(200).json({
        status: 'ok',
        message: 'success create category'
    })
}