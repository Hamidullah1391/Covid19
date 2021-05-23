// let baseurl ='https://api.covid19api.com/'	
 let baseurl = 'https://api.covid19api.com/summary'
// let baseurl ='https://api.covid19api.com/total/Global/status/confirmed'
let Todaytotalcase = document.querySelector(".today-totalcase")	
// let NewConfirmed = document.querySelector(".New-Confirmed")	
let TotalConfirmed = document.querySelector(".Total-Confirmed")
// let NewDeaths = document.querySelector(".New-Deaths");
 let TotalDeaths = document.querySelector(".Total-Deaths")
// let NewRecovered = document.querySelector(".New-Recovered")
 let TotalRecovered = document.querySelector(".Total-Recovered")

window.onload=()=>{
	fetch(baseurl)
	.then((response)=>{
		 // console.log('response',response.json())
		 getResult(response.json())
	})
}

getResult = (result)=>{

 // console.log('result',result)
 Promise.resolve(result).then((val)=>{
 	 // console.log("val",val)
 	 // console.log("val",val.Global.NewConfirmed)
 	 Todaytotalcase.innerHTML ="last updated      :"+ val.Global.Date
 	 // NewConfirmed.innerHTML = val.Global.NewConfirmed
 	 TotalConfirmed.innerHTML = val.Global.TotalConfirmed
   //   NewDeaths.innerHTML = val.Global.NewDeaths
      TotalDeaths.innerHTML = val.Global.TotalDeaths
   //   NewRecovered.innerHTML = val.Global.NewRecovered;
     TotalRecovered.innerHTML = val.Global.TotalRecovered;
	
 })
}






