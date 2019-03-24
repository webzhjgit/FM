const express=require("express")
const router=express.Router();
const pool=require("../pool");
//http://localhost:3000/index
//app.use("/index",index)
//   ↓
//http://localhost:3000/index/
router.get("/",(req,res)=>{
  var sql=`select * from fm_case`;
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
    });//writeHead在相应过程中只能写1次，再写会冲突报错
    //res.send(result);//express
    //包括:{
    //  res.writeHead(200,{...})
    res.write(JSON.stringify(result))
    res.end();
    //}
  })
})


router.get("/news",(req,res)=>{
   var sql="select * from fm_advisory"
   pool.query(sql,(err,result)=>{
     if(err) throw err;
     res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
     });
     res.write(JSON.stringify(result))
    res.end();
   })
})

router.get("/gcal",(req,res)=>{
  var uid=req.query.uid
  var sql="select * from fm_gcal where uid=?"
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
    res.writeHead(200,{
     "Access-Control-Allow-Origin":"*"
    });
    res.write(JSON.stringify(result))
   res.end();
  })
})
module.exports=router;