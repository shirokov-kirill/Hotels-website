import { AiFillStar } from 'react-icons/ai'
import './SmartRating.css'

export default function SmartRating({rating}) {
    console.log(rating)
    var x = Number(rating)
    const rate = []
    while(x > 0){
        rate.push(<AiFillStar width={17} height={17} color='#CDBC1E'/>)
        x--
    }
    while(rate.length < 5){
        rate.push(<AiFillStar width={17} height={17} color='#6C6845' className='unchecked'/>)
    }
    return(
        <div className="flex-horizontal">
            {rate}
        </div>
    )
}