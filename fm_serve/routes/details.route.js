const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/lx",(req,res)=>{
  var sql="select * from fm_contact"
  pool.query(sql,(err,result)=>{
    if(err) throw err;
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

router.get("/nes",(req,res)=>{
  var sql="select * from fm_news where nid<10"
  pool.query(sql,(err,result)=>{
    if(err) throw err;
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

router.get("/ness",(req,res)=>{
  var sql="select * from fm_news where nid>9"
  pool.query(sql,(err,result)=>{
    if(err) throw err;
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

router.get
module.exports=router;