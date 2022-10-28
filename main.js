var tbody = document.getElementById('tbody');
var global = document.getElementById('global')

fetch('https://api.covid19api.com/summary').then((data)=> {return data.json()}).then(data=>{

    global.innerHTML = `
        <h1>Total Confirmed: ${data.Global.TotalConfirmed}</h1>
        <h1 class="text-danger">Total Deaths: ${data.Global.TotalDeaths}</h1>

    `

    data.Countries.forEach(item=>{
        console.log(item)
        tbody.innerHTML += `
            <tr>
                <td>${item.Country}</td>
                <td>${item.TotalConfirmed}</td>
                <td class="bg-danger">${item.TotalDeaths}</td>
                <td>${item.NewConfirmed}</td>
                <td class="bg-danger">${item.NewDeaths}</td>
            </tr>
        `
    })
})