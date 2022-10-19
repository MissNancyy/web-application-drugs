const drugs = require('../models/drugs')

// module.exports = {
//     getDrugsMainPage: (req,res)=>{
//        res.render('drugs.ejs')
//    }
// }



module.exports = {
    getdrugs: async (req,res)=>{
        console.log(req.drugs)
        try{
            const drugThing = await drugs.find({drugId:req.drugs.id})
            const infoDrug = await drugs.countDocuments({drugId:req.drugs.id})
            res.render('drugs.ejs', {theDrug: drugThing, drugInfo: infoDrug, drug: req.drugs})
        }catch(err){
            console.log(err)
        }
    },
    createdrugs: async (req, res)=>{
        try{
            await drugs.create({drug: req.body.drugThingy, drugId: req.drugs.id})
            console.log('Drugs has been added!')
            res.redirect('/drugs')
        }catch(err){
            console.log(err)
        }
    }
 
}    