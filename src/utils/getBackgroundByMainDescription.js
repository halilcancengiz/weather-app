export const getBackgroundByMainDescription = (mainDescription) => {
    switch (mainDescription) {
        case "Clouds":
            return "https://media.giphy.com/media/PIh4laWJlz9bq/giphy.gif"
        case "Clear":
            return "https://media.giphy.com/media/1LAArSrLLApVu/giphy.gif"
        case "Tornado":
            return "https://media.giphy.com/media/5QXkoDtmD8NGi7MuFP/giphy.gif"
        case "Squall":
            return "https://media.giphy.com/media/Q34WLDx8gTGjWBpwEX/giphy.gif"
        case "Ash":
            return "https://media.giphy.com/media/tMilGfvEYNTUs/giphy.gif"
        case "Dust":
            return "https://media.giphy.com/media/WNFHKdnctjvpubCNjn/giphy.gif"
        case "Sand":
            return "https://media.giphy.com/media/RoCAThaQXCh9VELk7f/giphy.gif"
        case "Fog":
            return "https://media.giphy.com/media/26xBwlGgyeQjxx09G/giphy.gif"
        case "Haze":
            return "https://media.giphy.com/media/xUA7aXlhmKHBNLH3jy/giphy.gif"
        case "Mist":
            return "https://media.giphy.com/media/Z98zIhtiePuIo/giphy.gif"
        case "Snow":
            return "https://media.giphy.com/media/N7ZiLbtDr84Yo/giphy.gif"
        case "Rain":
            return "https://media.giphy.com/media/dI3D3BWfDub0Q/giphy.gif"
        case "Drizzle":
            return "https://media.giphy.com/media/xTcnT8PuKl5GBz26mk/giphy.gif"
        case "Thunderstorm":
            return "https://media.giphy.com/media/aPlzgxciAwVj2/giphy.gif"
        default:
            return null
    }
}

