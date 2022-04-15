import React from "react";
import ReadableDate from "./ReadableDate";
import {BsChevronCompactRight} from 'react-icons/bs';
import { connect } from 'react-redux'
import withRouter from '../redux/withRouter'
import SmartHotels from "./SmartHotels";
import 'react-alice-carousel/lib/alice-carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const mapStateToProps = state => {
    return {
      images: state.images
    }   
}

const handleDragStart = (e) => e.preventDefault();

function buildImage(source){
    return(
        <SwiperSlide className="swiper-slide">
            <img src={source} onDragStart={handleDragStart} role="presentation"/>
        </SwiperSlide>
    )
}

function buildImages(sources) {
    const images = []
    for(const index in sources){
        images.push(buildImage(sources[index]))
    }
    return images
}

export class Results extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        const items = buildImages(this.props.images.items)
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
                            {this.props.likedCount}
                        </p>
                        <SmartHotels number={this.props.likedCount}/>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(connect(mapStateToProps)(Results));