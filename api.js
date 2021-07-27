const express=require("express");
const router=express.Router();
const M_script=require("./m_script");
router.get("/m_scripts",(req,res)=>{
 M_script.find({})
 .then(script=>{
  M_script.countDocuments().then(count=>{
    res.send(script);
  })
  
 });
  });
  router.get("/m_scripts_count",(req,res)=>{
 M_script.countDocuments()
 .then(count=>{
   res.send({countScripts:count});
 });
  });
  router.post("/m_scripts",(req,res)=>{
M_script.create(req.body)
.then(script=>{
  res.send(script);
});
    });
    router.put("/m_scripts/:id",(req,res)=>{
     M_script.findByIdAndUpdate({_id:req.params.id},req.body)
     .then(()=>{
       M_script.findOne({_id:req.params.id})
       .then(script=>{
         res.send(script);
       })
     }).catch(e=>{
       console.log("Error:"+e);
     });
      });
      router.delete("/m_scripts/:id",(req,res)=>{
    M_script.deleteOne({_id:req.params.id})
    .then(script=>{
      res.send(script);
    })
        });
        module.exports=router;