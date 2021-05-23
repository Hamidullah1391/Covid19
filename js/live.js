let baseurl = 'https://api.covid19api.com/countries';
let Country = document.querySelector(".country-name")	
let province = document.querySelector(".province-name")
// let NewConfirmed = document.querySelector(".New-Confirmed")	
// let TotalConfirmed = document.querySelector(".Total-Confirmed")	
// let NewDeaths = document.querySelector(".New-Deaths");
// let TotalDeaths = document.querySelector(".Total-Deaths")
// let NewRecovered = document.querySelector(".New-Recovered")
// let TotalRecovered = document.querySelector(".Total-Recovered")

window.onload=()=>{
	fetch(baseurl)
	.then((response)=>{
		 // console.log('response',response.json())
		 countriesResult(response.json())
	})
}



countriesResult =(result)=>{
	// console.log('result',result)
     Promise.resolve(result).then((val)=>{
        var name='';
        var i;

     	for( i = 1; i<=val.length-1;i++){
     		name +="<table>"
     		name+="<tr>"
     		name += "<td onclick='myFunction(this)'>"+val[i].Country+"</td>";
     		name+="</tr>"
     		name+="</table>"
     	}

     	 Country.innerHTML = name;
	
})
}
	function myFunction(a){
	var country_table =document.getElementById("c-table");
	country_table.style.display ="none"
	 var country = a.innerHTML;
	//  alert(country);
     let livebaseurl = 'https://api.covid19api.com/live/country/'+country+'/status/confirmed'


	 fetch(livebaseurl)
	.then((response)=>{
		//   console.log('response',response.json())
		   return(response.json())

		
	})
	.then((data) => { 

		var template = `
		
		
		`
		template +=`<div class="table-responsive">`
		template +=`<table class="table table-bordered table-sm caption-top  table-striped" id="tableRecord">
		<br>
		<caption></caption>
		<tr class="header">
		
		<th>Confirmed</th>
		<th>Active</th>
		<th>Deaths</th>
		<th>Recovered</th>
		<th>Date</th>
	
		</tr>
		`
		
	let rows = data.length;
	for(i=0;i<rows;i++){
	//   console.log(data[i])
	
		template +=`
		<tr>
		<td class="country">${data[i].Confirmed}</td>
		<td class="country">${data[i].Active}</td>
		<td class="country">${data[i].Deaths}</td>
		<td class="country">${data[i].Recovered}</td>
		<td class="country">${data[i].Date}</td>




	
		</tr>
		
		`
	}
	template +=`</table>`
	template +=`</div>`
	alldata.innerHTML = template;

	

	 })
	}

