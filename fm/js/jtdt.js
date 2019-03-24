(function(){
    $(function(){
        $.ajax({
            url:"http://localhost:3000/details/ness",
            type:"get",
            dataType:"Json",
            success:function(data){
            var ps=data.slice(0,4)
            var html=``;
            for(var p of ps){
                html+=`<li>
                <a href="#"><img src="${p.cimg}" alt=""/></a>
                <div>
                        <a href="#">${p.nname}</a>
                        <span>${p.ntime}</span>
                </div>
                <p>${p.title}</p>
        </li>`
            }
       var div=$("div.nls>ul")
         div.html(html)
            }
        })
    })
})()