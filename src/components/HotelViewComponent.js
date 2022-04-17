import './HotelViewComponent.css'
import ReadableDate from './ReadableDate'
import { BiRuble } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import SmartDays from './SmartDays';
import SmartRating from './SmartRating';


export default function HotelView({hotel, onLikeClicked, withLike, withIcon=true}){

    function onLikeClickedHandler(e) {
        onLikeClicked(hotel)
    }

    console.log(hotel)

    return(
        <div className="flex-horizontal padding-16 padding-left-0">
            {withIcon &&
            <div className='hotel-icon margin-right-24'>
                <img className='roof' alt='roof' src="/assets/images/roof.png"/>
                <img className='house' alt='house' src="/assets/images/house.png"/>
            </div>
            }
            <div className='flex-horizontal space-between width-100'>
                <div className='flex-vertical'>
                    <h1 className="hotel-name">
                        {hotel.hotel.hotelName}
                    </h1>
                    <div className='flex-horizontal'>
                        <h1 className="hotel-inner-date-duration">
                            <ReadableDate date={hotel.fromDate}/>
                        </h1>
                        <h1 className='margin-0-10 hotel-inner-date-duration'>--</h1>
                        <div className="flex-horizontal">
                            <SmartDays number={hotel.duration}/>
                        </div>
                    </div>
                    <SmartRating rating={hotel.hotel.stars}/>
                </div>
                <div className='flex-vertical align-right'>
                    <FiHeart onClick={onLikeClickedHandler} className={(!withLike) ? 'margin-bottom-22 margin-right-8 like cursor-pointer' : 'margin-bottom-22 margin-right-8 like cursor-pointer active'} width={21} height={18}/>
                    <div className='flex-horizontal align-center justify-center'>
                        <h1 className='price margin-right-8'>
                            Price:
                        </h1>
                        <h1 className='price-value'>
                            {hotel.hotel.priceAvg} <BiRuble/>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}