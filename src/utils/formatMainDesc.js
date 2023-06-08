
export const formatMainDesc = (mainDesc) => {
    switch (mainDesc) {
        case "Clouds":
            return "Bulutlu";
        case "Clear":
            return "Açık";
        case "Tornado":
            return "Tornado";
        case "Squall":
            return "Şiddetli Rüzgar";
        case "Ash":
            return "Kül";
        case "Dust":
            return "Tozlu";
        case "Sand":
            return "Kumlu";
        case "Fog":
            return "Puslu";
        case "Haze":
            return "Dumanlı";
        case "Smoke":
            return "Dumanlı";
        case "Mist":
            return "Sisli";
        case "Snow":
            return "Karlı";
        case "Rain":
            return "Yağmurlu";
        case "Drizzle":
            return "Çiseli";
        case "Thunderstorm":
            return "Gök gürültülü";
        default:
            return "";
    }
};