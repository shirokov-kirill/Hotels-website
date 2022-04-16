import React from "react";
import ReadableDate from "./ReadableDate";
import {BsChevronCompactRight} from 'react-icons/bs';
import { connect } from 'react-redux'
import withRouter from '../redux/withRouter'
import SmartHotels from "./SmartHotels";
import { ScrollView } from 'react-native';
import HotelView from "./HotelViewComponent";
import 'react-alice-carousel/lib/alice-carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const mapStateToProps = state => {
    return {
      images: state.images
    }   
}

const handleDragStart = (e) => e.preventDefault();

export class Results extends React.Component {

    constructor(props){
        super(props)

        this.onLikeClicked = this.onLikeClicked.bind(this)
    }

    buildImage = (source) => {
        return(
            <SwiperSlide className="swiper-slide">
                <img src={source} onDragStart={handleDragStart} role="presentation"/>
            </SwiperSlide>
        )
    }
    
    buildImages = () =>{
        const images = []
        for(const index in this.props.images.items){
            images.push(this.buildImage(this.props.images.items[index]))
        }
        return images
    }
    
    buildHotel = (hotel) => {
        var withLike = false
        this.props.liked.map(likedHotel => {if(likedHotel.hotel.hotelId === hotel.hotelId && Number(likedHotel.duration) === Number(this.props.filters.forNDays) && likedHotel.fromDate === this.props.filters.fromDate){ withLike = true; } return true})
        return(
            <HotelView hotel={{hotel: hotel, fromDate: this.props.filters.fromDate, duration: this.props.filters.forNDays}} onLikeClicked={this.onLikeClicked} withLike={withLike}/>
        )
    }
    
    buildHotels = () => {
        const hotelsViews = []
        for(const index in this.props.hotels){
            hotelsViews.push(this.buildHotel(this.props.hotels[index]))
            hotelsViews.push(<div className="divider"></div>)
        }
        return hotelsViews
    }

    onLikeClicked(hotel) {
        this.props.addToLiked(hotel.hotel, hotel.duration, hotel.fromDate)
    }

    render(){
        const items = this.buildImages()
        const hotelsItems = this.buildHotels()
        return(
            <div className="results flex-vertical">

                <div className="flex-horizontal space-between margin-bottom-28">
                    <div className="results-breadcrumb flex-horizontal">
                        <h1 className="results-breadcrumb-text margin-0">Отели</h1>
                        <BsChevronCompactRight className="breadcrumb-devider"/>
                        <h1 className="results-breadcrumb-text margin-0">{this.props.filters.city}</h1>
                    </div>
                    <div className="results-readable-date">
                        <ReadableDate date={this.props.filters.fromDate}/>
                    </div>
                </div>
                <div className="margin-bottom-28">
                <Swiper
                spaceBetween={12}
                slidesPerView={3.5}
                loop>
                    {items}
                </Swiper>
                </div>
                <div className="flex-vertical">
                    <div className="flex-horizontal results-list-header margin-bottom-12">
                        <p className="margin-right-8">
                            Добавлено в Избранное:
                        </p>
                        <p className="margin-right-4">
                            {this.props.liked.length}
                        </p>
                        <SmartHotels number={this.props.liked.length}/>
                    </div>
                    <div className="my-scrollbar">
                        {hotelsItems}
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(connect(mapStateToProps)(Results));