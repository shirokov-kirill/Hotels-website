

export default function SmartHotels({number}){
    var text = ""
    switch(String(number)){
        case "0":
            text = "отелей"
            break;
        case "1":
            text = "отель"
            break;
        case "2":
            text = "отеля"
            break;
        case "3":
            text = "отеля"
            break;
        case "4":
            text = "отеля"
            break;
        case "5":
            text = "отелей"
            break;
        case "6":
            text = "отелей"
            break;
        case "7":
            text = "отелей"
            break;
        case "8":
            text = "отелей"
            break;
        case "9":
            text = "отелей"
            break;
        case "10":
            text = "отелей"
            break;
        case "11":
            text = "отелей"
            break;
        case "12":
            text = "отелей"
            break;
        case "13":
            text = "отелей"
            break;
        case "14":
            text = "отелей"
            break;
        case "15":
            text = "отелей"
            break;
        case "16":
            text = "отелей"
            break;
        case "17":
            text = "отелей"
            break;
        case "18":
            text = "отелей"
            break;
        case "19":
            text = "отелей"
            break;
        default:
            switch(String(number)[String(number).length - 1]){
                case "0":
                    text = "отелей"
                    break;
                case "1":
                    text = "отель"
                    break;
                case "2":
                    text = "отеля"
                    break;
                case "3":
                    text = "отеля"
                    break;
                case "4":
                    text = "отеля"
                    break;
                case "5":
                    text = "отелей"
                    break;
                case "6":
                    text = "отелей"
                    break;
                case "7":
                    text = "отелей"
                    break;
                case "8":
                    text = "отелей"
                    break;
                case "9":
                    text = "отелей"
                    break;
                default:
                    text = "отелей"
            }
    }
    return(
        <p>
            {text}
        </p>
    )
}