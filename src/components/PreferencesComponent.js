import React from "react";
import './PreferencesComponent.css'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import HotelView from "./HotelViewComponent";


export default class Preferences extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            sorted: {
                cathegory: "rating",
                order: "down"
            }
        }

        this.onLikeClicked = this.onLikeClicked.bind(this)

        this.onRatingClicked = this.onRatingClicked.bind(this)
        this.onRatingUpClicked = this.onRatingUpClicked.bind(this)
        this.onRatingDownClicked = this.onRatingDownClicked.bind(this)
        this.onPriceClicked = this.onPriceClicked.bind(this)
        this.onPriceUpClicked = this.onPriceUpClicked.bind(this)
        this.onPriceDownClicked = this.onPriceDownClicked.bind(this)
    }

    getTop3(){
        var liked = this.props.liked.slice()
        if(this.state.sorted.cathegory === "rating"){
            if(this.state.sorted.order === "up"){
                liked.sort((a, b) => {
                    if(a.hotel.stars === b.hotel.stars){
                        return 0
                    } else {
                        if(a.hotel.stars > b.hotel.stars){
                            return 1
                        } else {
                            return -1
                        }
                    }
                })
            } else {
                liked.sort((a, b) => {
                    if(a.hotel.stars === b.hotel.stars){
                        return 0
                    } else {
                        if(a.hotel.stars < b.hotel.stars){
                            return 1
                        } else {
                            return -1
                        }
                    }
                })
            }
        } else {
            if(this.state.sorted.order === "up"){
                liked.sort((a, b) => {
                    if(a.hotel.priceAvg === b.hotel.priceAvg){
                        return 0
                    } else {
                        if(a.hotel.priceAvg > b.hotel.priceAvg){
                            return 1
                        } else {
                            return -1
                        }
                    }
                })
            } else {
                liked.sort((a, b) => {
                    if(a.hotel.priceAvg === b.hotel.priceAvg){
                        return 0
                    } else {
                        if(a.hotel.priceAvg < b.hotel.priceAvg){
                            return 1
                        } else {
                            return -1
                        }
                    }
                })
            }
        }
        return liked.splice(0, 3)
    }

    onRatingClicked() {
        this.setState({sorted:{cathegory: "rating", order: this.state.sorted.order}})
    }

    onPriceClicked() {
        this.setState({sorted:{cathegory: "price", order: this.state.sorted.order}})
    }

    onRatingUpClicked(e) {
        this.setState({sorted:{cathegory: "rating", order: "up"}})
        e.stopPropagation()
    }

    onRatingDownClicked(e) {
        this.setState({sorted:{cathegory: "rating", order: "down"}})
        e.stopPropagation()
    }

    onPriceUpClicked(e) {
        this.setState({sorted:{cathegory: "price", order: "up"}})
        e.stopPropagation()
    }

    onPriceDownClicked(e) {
        this.setState({sorted:{cathegory: "price", order: "down"}})
        e.stopPropagation()
    }

    buildHotel = (hotel) => {
        return(
            <HotelView hotel={hotel} onLikeClicked={this.onLikeClicked} withLike={true} withIcon={false}/>
        )
    }
    
    buildHotels = (hotels) => {
        const hotelsViews = []
        for(const index in hotels){
            hotelsViews.push(this.buildHotel(hotels[index]))
            if(index !== hotels.length - 1){
                hotelsViews.push(<div className="divider"></div>)
            }
        }
        return hotelsViews
    }

    onLikeClicked(hotel) {
        this.props.handleOnLikeClicked(hotel.hotel, hotel.duration, hotel.fromDate)
    }

    render(){
        var top3 = this.getTop3()
        top3 = this.buildHotels(top3)
        return(
            <div className="flex-vertical favorites-menu padding-32 border-radius-16">
                <h1 className="preferences-header">
                    Избранное
                </h1>
                <div className="flex-horizontal">
                    <label onClick={this.onRatingClicked} className={(this.state.sorted.cathegory === "rating") ? "pref-label flex-horizontal margin-right-8 active" : "pref-label flex-horizontal margin-right-8"}>
                        <div className="margin-right-9">
                            Rating
                        </div>
                        <div className="flex-vertical">
                            <RiArrowDropUpLine onClick={this.onRatingUpClicked} className={(this.state.sorted.order === "up" && this.state.sorted.cathegory === "rating") ? "pref-label-arrow active" : "pref-label-arrow"}/>
                            <RiArrowDropDownLine onClick={this.onRatingDownClicked} className={(this.state.sorted.order === "down" && this.state.sorted.cathegory === "rating") ? "pref-label-arrow active" : "pref-label-arrow"}/>
                        </div>
                    </label>
                    <label onS onClick={this.onPriceClicked} className={(this.state.sorted.cathegory === "price") ? "pref-label flex-horizontal margin-right-8 active" : "pref-label flex-horizontal margin-right-8"}>
                        <div className="margin-right-9">
                            Price
                        </div>
                        <div className="flex-vertical">
                            <RiArrowDropUpLine onClick={this.onPriceUpClicked} className={(this.state.sorted.order === "up" && this.state.sorted.cathegory === "price") ? "pref-label-arrow active" : "pref-label-arrow"}/>
                            <RiArrowDropDownLine onClick={this.onPriceDownClicked} className={(this.state.sorted.order === "down" && this.state.sorted.cathegory === "price") ? "pref-label-arrow active" : "pref-label-arrow"}/>
                        </div>
                    </label>
                </div>
                <div className="height-100 width-100 my-scrollbar">
                    {top3}
                </div>
            </div>
        )
    }
}