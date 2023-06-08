import wind from "../assets/images/animatedIcons/wind.gif"
export const getIconByMainDescription = (description) => {
    switch (description) {
        case "Bulutlu":
            return wind;
        case "Açık":
            return "sun-icon";
        case "Tornado":
            return "tornado-icon";
        case "Şiddetli Rüzgar":
            return "wind-icon";
        case "Kül":
            return "ash-icon";
        case "Tozlu":
            return "dust-icon";
        case "Kumlu":
            return "sand-icon";
        case "Puslu":
            return "fog-icon";
        case "Dumanlı":
            return "smoke-icon";
        case "Sisli":
            return "mist-icon";
        case "Karlı":
            return "snow-icon";
        case "Yağmurlu":
            return "rain-icon";
        case "Çiseli":
            return "drizzle-icon";
        case "Gök gürültülü":
            return "thunderstorm-icon";
        default:
            return "default-icon";
    }
};