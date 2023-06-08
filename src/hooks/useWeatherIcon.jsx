import { WiCloud, WiDaySunny, WiTornado, WiStrongWind, WiVolcano, WiDust, WiSandstorm, WiFog, WiSmoke, WiDayFog, WiSnow, WiRain, WiSprinkle, WiThunderstorm } from 'weather-icons-react';
import wind from "../assets/images/animatedIcons/wind.gif"
export const useWeatherIcon = (description) => {
  const getIconByMainDescription = () => {
    switch (description) {
      case "Clouds":
        return <WiCloud className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="white" />
      case "Clear":
        return <WiDaySunny className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="#FDB813" />;
      case "Tornado":
        return <WiTornado className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="#050e73" />;
      case "Squall":
        return <WiStrongWind className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="#27e0e3" />;
      case "Ash":
        return <WiVolcano className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="#d1173c" />;
      case "Dust":
        return <WiDust className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="#C6B497" />;
      case "Sand":
        return <WiSandstorm className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="#D5B98F" />;
      case "Fog":
        return <WiFog className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="#BDBDBD" />;
      case "Haze":
        return <WiSmoke className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="#9E9E9E" />;
      case "Mist":
        return <WiDayFog className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="#C4C4C4" />;
      case "Snow":
        return <WiSnow className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="white" />;
      case "Rain":
        return <WiRain className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="#4e78bf" />;
      case "Drizzle":
        return <WiSprinkle className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="#8DB5E3" />;
      case "Thunderstorm":
        return <WiThunderstorm className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-500" color="#000000" />;
      default:
        return null;
    }
  };

  const icon = getIconByMainDescription();

  return { icon };
};