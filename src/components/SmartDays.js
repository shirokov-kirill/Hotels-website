
export default function SmartDays({number}){
    var text = ""
    switch(String(number)){
        case "0":
            text = "дней"
            break;
        case "1":
            text = "день"
            break;
        case "2":
            text = "дня"
            break;
        case "3":
            text = "дня"
            break;
        case "4":
            text = "дня"
            break;
        case "5":
            text = "дней"
            break;
        case "6":
            text = "дней"
            break;
        case "7":
            text = "дней"
            break;
        case "8":
            text = "дней"
            break;
        case "9":
            text = "дней"
            break;
        case "10":
            text = "дней"
            break;
        case "11":
            text = "дней"
            break;
        case "12":
            text = "дней"
            break;
        case "13":
            text = "дней"
            break;
        case "14":
            text = "дней"
            break;
        case "15":
            text = "дней"
            break;
        case "16":
            text = "дней"
            break;
        case "17":
            text = "дней"
            break;
        case "18":
            text = "дней"
            break;
        case "19":
            text = "дней"
            break;
        default:
            switch(String(number)[String(number).length - 1]){
                case "0":
                    text = "дней"
                    break;
                case "1":
                    text = "день"
                    break;
                case "2":
                    text = "дня"
                    break;
                case "3":
                    text = "дня"
                    break;
                case "4":
                    text = "дня"
                    break;
                case "5":
                    text = "дней"
                    break;
                case "6":
                    text = "дней"
                    break;
                case "7":
                    text = "дней"
                    break;
                case "8":
                    text = "дней"
                    break;
                case "9":
                    text = "дней"
                    break;
                default:
                    text = "дней"
            }
    }
    return(
        <h1 className="hotel-inner-date-duration margin-right-8">
            {number} {text}
        </h1>
    )
}