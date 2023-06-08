export const groupForecastDataByDate = (data) => {
    const weatherDay = [];

    if (data && data.list) {
        let currentDate = null;
        let min = 999;
        let max = -999;
        let temp = null;
        let humidity = null;

        data.list.forEach((w) => {
            let wDay = new Date(w.dt * 1000 - 3 * 1000 * 60 * 60);
            const day = wDay.getDay();

            if (currentDate === null) {
                currentDate = day;
                temp = w.main.temp;
            }

            if (day !== currentDate) {
                const formattedDay = new Intl.DateTimeFormat('tr-TR', { weekday: 'long' }).format(new Date(w.dt * 1000 - 4 * 1000 * 60 * 60));
                const formattedDate = new Date(w.dt * 1000 - 4 * 1000 * 60 * 60);
                const iconCode = w.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

                weatherDay.push({
                    min: min % 1 > 0.5 ? Math.ceil(min) : Math.floor(min),
                    max: max % 1 > 0.5 ? Math.ceil(max) : Math.floor(max),
                    temp: temp % 1 > 0.5 ? Math.ceil(temp) : Math.floor(temp),
                    day: formattedDay,
                    date: formattedDate,
                    city: data.city.name,
                    main: w.weather[0].main,
                    description: w.weather[0].description,
                    wind: Number(w.wind.speed.toFixed(1)),
                    humidity: humidity,
                    iconUrl: iconUrl, // İkon URL'sini ekle
                });

                currentDate = day;
                min = 999;
                max = -999;
                temp = w.main.temp;
                humidity = null;
            }

            if (w.main.temp_min < min) {
                min = w.main.temp_min;
            }

            if (w.main.temp_max > max) {
                max = w.main.temp_max;
            }

            if (humidity === null || w.main.humidity > humidity) {
                humidity = w.main.humidity;
            }
        });

        // Son günün verilerini ekleyelim
        if (currentDate !== null) {
            const formattedDay = new Intl.DateTimeFormat('tr-TR', { weekday: 'long' }).format(new Date(data.list[data.list.length - 1].dt * 1000 - 4 * 1000 * 60 * 60));
            const formattedDate = new Date(data.list[data.list.length - 1].dt * 1000 - 4 * 1000 * 60 * 60);
            const iconCode = data.list[data.list.length - 1].weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

            weatherDay.push({
                min: min % 1 > 0.5 ? Math.ceil(min) : Math.floor(min),
                max: max % 1 > 0.5 ? Math.ceil(max) : Math.floor(max),
                temp: temp % 1 > 0.5 ? Math.ceil(temp) : Math.floor(temp),
                day: formattedDay,
                date: formattedDate,
                city: data.city.name,
                main: data.list[data.list.length - 1].weather[0].main,
                description: data.list[data.list.length - 1].weather[0].description,
                wind: Number(data.list[data.list.length - 1].wind.speed.toFixed(1)),
                humidity: humidity,
                iconUrl: iconUrl, // İkon URL'sini ekle
            });
        }
    }

    return weatherDay;
};
