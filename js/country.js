var btn1 = document.getElementById("btn1");

btn1.addEventListener('click', () => {

const globe = document.getElementById("globe");
globe.style.display ="none";
    // fetch request to api

     fetch('https://api.covid19api.com/summary')
    .then((response) => {
        return (response.json());
    })
    .then((data) => { 
        // var rows = Object.keys(data);

        var template = `
        <h4>Covid Cases</h4>
        
        `
        template +=`<input type="text" name="" id="filter" class="form-control" placeholder="Filter...." onKeyup="searchFunction()">`
        template +=`<div class="table-responsive">`
        template +=`<table class="table table-bordered table-sm caption-top  table-striped" id="tableRecord">
        <br>
        <caption>Covid 19 Cases in World</caption>
        <tr class="header">
        <th>Country</th>
        <th>New Confirmed</th>
        <th>Total Confirmed</th>
        <th>NewDeaths</th>
        <th>TotalDeaths</th>
        <th>NewRecovered</th>
        <th>TotalRecovered</th>
        <th>Date</th>
        </tr>
        `
    // template +=`<tbody>`
    let myarray = data['Countries'];
    for(i=0;i<myarray.length;i++){
        //  console.log(myarray[i])

         template +=`
         <tr>
         <td class="country">${myarray[i].Country}</td>
         <td class="country">${myarray[i].NewConfirmed}</td>
         <td class="country">${myarray[i].TotalConfirmed}</td>
         <td class="country">${myarray[i].NewDeaths}</td>
         <td class="country">${myarray[i].TotalDeaths}</td>
         <td class="country">${myarray[i].NewRecovered}</td>
         <td class="country">${myarray[i].TotalRecovered}</td>
         <td class="country">${myarray[i].Date}</td>
         </tr>
         
         `
    }
    // template +=`</tbody>`
    template +=`</table>`
    template +=`</div>`
    results.innerHTML = template;
    
    })
    
})

const searchFunction = ()=>{

    let filter = document.getElementById('filter').value.toUpperCase();
    console.log(filter)

    let tableRecord = document.getElementById('tableRecord');

    let tr = tableRecord.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];
        if(td){
            let textvalue = td.textContent || td.innerHTML; 
             if(textvalue.toUpperCase().indexOf(filter)>-1){
                 tr[i].style.display = "";

             }  else{
                tr[i].style.display = "none";

             }
        }
    }
    
    
    
}

