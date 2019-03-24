$(function(){
    $.ajax({
        url:"http://localhost:3000/details/lx",
        type:"get",
        dataType:"json",
        success:function(data){
            var p=data;
            console.log(p)
            var html=`<h5>${p[0].cname}</h5>
			<p>${p[0].asdd}</p>
			<p>${p[0].phone}</p>
			<p>${p[0].fax}</p>
			<p>${p[0].hotline}</p>
			<h5>${p[1].cname}</h5>
					<p>${p[1].asdd}</p>
					<p>${p[1].phone}</p>

			<h5>${p[2].cname}</h5>
					<p>${p[2].asdd}</p>
					<p>${p[2].phone}</p>

			<h5>${p[3].cname}</h5>
					<p>${p[3].asdd}</p>
					<p>${p[3].phone}</p>
					<p>${p[3].hotline}</p>

			<h5>${p[4].cname}</h5>
					<p>${p[4].asdd}</p>
					<p>${p[4].phone}</p>
					<p>${p[4].hotline}</p>

			<h5>${p[5].cname}</h5>
					<p>${p[5].asdd}</p>
					<p>${p[5].phone}</p>
          <p>${p[5].hotline}</p>
			<h5>${p[6].cname}</h5>
			<p>${p[6].asdd}</p>
			<p>${p[6].phone}</p>
			<h5>${p[7].cname}</h5>
					<p>${p[7].asdd}</p>
					<p>${p[7].phone}</p>
                    <p>${p[7].hotline}</p>`;
          var div=document.querySelector("div.notry");
          div.innerHTML=html
        }
    })

})