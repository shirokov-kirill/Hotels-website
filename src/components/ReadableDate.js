import React from "react";


function parseMonth(date){
    switch(date.substr(5, 2)){
        case "01": return "января"
        case "02": return "февраля"
        case "03": return "марта"
        case "04": return "апреля"
        case "05": return "мая"
        case "06": return "июня"
        case "07": return "июля"
        case "08": return "августа"
        case "09": return "сентября"
        case "10": return "октября"
        case "11": return "ноября"
        case "12": return "декабря"
        default: return ""
        }
}

export default function ReadableDate({date}){
    return(
        <div>
            <p className="margin-0">
                {date.substr(8, 2)} {parseMonth(date)} {date.substr(0, 4)}
            </p>
        </div>
    )
}