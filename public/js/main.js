

const searchBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const temparature = document.getElementById('temparature')
const temp_status = document.getElementById('temp_status')
const desc = document.getElementById('desc')
const datahide= document.querySelector(".middle_layer");
const day = document.getElementById('day')
const day_data = document.getElementById('day_data')
const getInfo = async(event)=>{
    event.preventDefault();
    let cityval= cityName.value;

    if(cityval === ""){
        datahide.classList.add('data_hide');
        city_name.innerHTML= `<p style="color:red" >Plz Enter a city before search!<p>`
    }
    else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=8c99af54aac3265d4c0af5182310b9ce&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temparature.innerText= arrData[0].main.temp;
            const img = arrData[0].weather[0].icon;
            // weather icon headache

            const imgUrl = `http://openweathermap.org/img/wn/${img}@2x.png`;
            temp_status.src=imgUrl;

            desc.innerText= arrData[0].weather[0].main;
            datahide.classList.remove('data_hide');
        } catch{
            city_name.innerHTML= `Enter a proper city name `
            datahide.classList.add('data_hide');
        }
  
    }
}

// date and time 
    let currDate = new Date()
    const days = ["Sun Day", "Mon Day", "Tue Day", "Wed Day", "Thu Day", "Fri Day", "Sat Day"];
     var dayname = days[currDate.getDay()];
    now = new Date()
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    var month= months[now.getMonth()];
    var date = now.getDate()
    
    day.innerText=dayname;
    day_data.innerHTML = `${date} ${month}`


searchBtn.addEventListener('click',getInfo)