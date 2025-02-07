const url = "https://api.rootnet.in/covid19-in/stats/latest";

async function coronaAPI() {
    const result = await fetch(url);
    const json = await result.json();
    const json_data = await json.data;
    const regional_data = await json_data.regional;
    let tbody = document.querySelector(".tbody")
    // console.log(regional_data);
    // regional_data.forEach(element => {
    //     console.log(element.loc);

    // });

    let data = "";
    regional_data.map((item, index) => {
        // console.log(item);
        data +=
            `
            <tr>
                <th scope="row">${index + 1}</th>
                    <td>${item.loc}</td>
                    <td>${item.discharged}</td>
                    <td>${item.deaths}</td>
                    <td>${item.confirmedCasesIndian}</td>
                </tr>
            `
    })
    tbody.innerHTML = data;
}

coronaAPI()