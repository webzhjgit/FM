(function(){
  $(function(){
    var search=location.search;
    if(search!==""){
        var uid=search.split("=")[1];
        console.log(uid)
    }
      $.ajax({
          url:"http://127.0.0.1:3000/index/gcal",
          type:"get",
          data:{uid},
          dataType:"json",
         success:function(data){
             var html="";
             var mss=data.slice(0,7);
             for(var p of mss){
                 html+=`<li>
                 <a href="#"><img src="${p.img}" alt=""/></a>
                <p><a href="#">${p.title}</a></p>
         </li>`
             }
             var div=$("ul.clearfix")
             div.html(html)
         }
      })
  })
})()