const mongoose =require('mongoose')
const URI='mongodb://localhost/workfree'
mongoose.connect(URI)
    .then(db=>console.log('DB IS CONNECNTED'))
    .catch(err=>console.log(err) );
module.exports=mongoose