const url = "https://api.rootnet.in/covid19-in/stats/latest";

async function coronaAPI() {
    const result = await fetch(url);
    const json = await result.json();
    const data = await json.data;
    const regional_data = await data.regional;

    // console.log(regional_data);

}

coronaAPI()