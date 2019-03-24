(function(){
$(function(){
    $.ajax({
        url:"http://localhost:3000/index",
        type:"get",
        dataType:"Json",
        success:function(data){
            var p=data
            var html=`
            <ul class="host" id="container1 "style='z-Index:2;'>
            <li>
                <a href="#"><img src="${p[0].cimg}" alt=""/></a>
                <p>${p[0].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[1].cimg}" alt=""/></a>
                <p>${p[1].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[2].cimg}" alt=""/></a>
                <p>${p[2].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[3].cimg}" alt=""/></a>
                <p>${p[3].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[4].cimg}" alt=""/></a>
                <p>${p[4].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[5].cimg}" alt=""/></a>
                <p>${p[5].name}</p>
            </li>
        </ul>
        <ul class="host" id="container2">
            <li>
                <a href="#"><img src="${p[6].cimg}" alt=""/></a>
                <p>${p[6].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[7].cimg}" alt=""/></a>
                <p>${p[7].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[8].cimg}" alt=""/></a>
                <p>${p[8].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[9].cimg}" alt=""/></a>
                <p>${p[9].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[10].cimg}" alt=""/></a>
                <p>${p[10].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[11].cimg}" alt=""/></a>
                <p>${p[11].name}</p>
            </li>
        </ul>
        <ul class="host" id="container2">
            <li>
                <a href="#"><img src="${p[12].cimg}" alt=""/></a>
                <p>${p[12].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[13].cimg}" alt=""/></a>
                <p>${p[13].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[14].cimg}" alt=""/></a>
                <p>${p[14].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[15].cimg}" alt=""/></a>
                <p>${p[15].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[16].cimg}" alt=""/></a>
                <p>${p[16].name}</p>
            </li>
            <li>
                <a href="#"><img src="${p[17].cimg}" alt=""/></a>
                <p>${p[17].name}</p>
            </li>
        </ul>
        <ul class="host" id="container2">
        <li>
            <a href="#"><img src="${p[18].cimg}" alt=""/></a>
            <p>${p[18].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[19].cimg}" alt=""/></a>
            <p>${p[19].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[20].cimg}" alt=""/></a>
            <p>${p[20].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[21].cimg}" alt=""/></a>
            <p>${p[21].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[22].cimg}" alt=""/></a>
            <p>${p[22].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[23].cimg}" alt=""/></a>
            <p>${p[23].name}</p>
        </li>
    </ul>
    <ul class="host" id="container2">
        <li>
            <a href="#"><img src="${p[24].cimg}" alt=""/></a>
            <p>${p[24].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[25].cimg}" alt=""/></a>
            <p>${p[25].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[26].cimg}" alt=""/></a>
            <p>${p[26].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[27].cimg}" alt=""/></a>
            <p>${p[27].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[28].cimg}" alt=""/></a>
            <p>${p[28].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[29].cimg}" alt=""/></a>
            <p>${p[29].name}</p>
        </li>
    </ul>
     <ul class="host" id="container2">
        <li>
            <a href="#"><img src="${p[30].cimg}" alt=""/></a>
            <p>${p[30].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[31].cimg}" alt=""/></a>
            <p>${p[31].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[32].cimg}" alt=""/></a>
            <p>${p[32].name}</p>
        </li>
        <li>
            <a href="#"><img src="${p[33].cimg}" alt=""/></a>
            <p>${p[33].name}</p>
        </li>
    </ul>`;
            var div=document.querySelector("div.ss");
            div.innerHTML=html;
        }
    })
})
   
$(function(){
    $.ajax({
        url:"http://localhost:3000/index/news",
        type:"get",
        dataType:"json",
        success:function(data){
            var p=data;
            console.log(p)
           var html=`<ul>
           <li>
               <a href="#">
               <img src="${p[0].img}" alt=""/>
               </a>
               <h3><a href="#">${p[0].title}</a></h3>
               <p>${p[0].content}</p>
           </li>
           <!-- 新闻栏2-->
           <li>
               <a href="#">
                   <img src="${p[1].img}" alt=""/>
               </a>
               <h3><a href="#">${p[1].title}</a></h3>
               <p>${p[1].content}</p>
           </li>
           <!-- 新闻栏3-->
           <li>
               <a href="#">
                   <img src="${p[2].img}" alt=""/>
               </a>
               <h3><a href="#">${p[2].title}</a></h3>
               <p>${p[2].content}</p>
           </li>
           <!-- 新闻栏4-->
           <li>
               <a href="#">
                   <img src="${p[3].img}" alt=""/>
               </a>
               <h3><a href="#">${p[3].title}</a></h3>
               <p>${p[3].content}</p>
           </li>
           <!-- 新闻栏5-->
           <li>
               <a href="#">
                   <img src="${p[4].img}" alt=""/>
               </a>
               <h3><a href="#">${p[4].title}</a></h3>
               <p>${p[4].content}</p>
           </li>
       </ul>`;
       var div=document.querySelector("div.new")
       div.innerHTML=html
        }
    })
})  
  
 $("div.navbar>div").click(function(){
        var $li=$(this);
        var $div=$("div.ss");
        var i=$li.index();
        $("div.navbar>div").removeClass("on");
        $("div.navbar>div").eq(i).addClass("on");
        $div.css("top",-460*i);
    })
})()
