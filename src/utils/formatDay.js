export const formatDay = (day) => {
    switch (day) {
        case "Pazartesi":
            return "Pzt."
            break;
        case "Salı":
            return "Sal."
            break;
        case "Çarşamba":
            return "Çar."
            break;
        case "Perşembe":
            return "Per."
            break;
        case "Cuma":
            return "Cum."
            break;
        case "Cumartesi":
            return "Cmt."
            break;
        case "Pazar":
            return "Paz."
            break;
        default:
            break;
    }
}