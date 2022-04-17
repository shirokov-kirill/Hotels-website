import React from "react"
import './HotelsComponent.css'
import Header from "./Header"
import { fetchHotels, saveFilters, updateLiked } from '../redux/ActionCreators'
import FiltersMenu from "./FiltersMenuComponent"
import { connect } from 'react-redux'
import withRouter from '../redux/withRouter'
import Results from "./ResultsComponent"
import Preferences from "./PreferencesComponent"

async function saveFiltersAsync(city, fromDate, forNDays, saveFilters){
    await saveFilters(city, fromDate, forNDays)
}

const mapStateToProps = state => {
    return {
      hotels: state.hotels,
      liked: state.liked,
      filters: state.filters
    }   
  }
  
  const mapDispatchToProps = (dispatch) => ({
    fetchHotels: (filters) => {dispatch(fetchHotels(filters))},
    saveFilters: (city, fromDate, forNDays) => {dispatch(saveFilters(city, fromDate, forNDays))},
    updateLiked: (liked) => {dispatch(updateLiked(liked))}
  })

export class Hotels extends React.Component {

    constructor(props){
        super(props)

        this.applyFiltersHandler = this.applyFiltersHandler.bind(this)
        this.handleLike = this.handleLike.bind(this)
    }

    componentDidMount() {
        this.props.fetchHotels(this.props.filters)
    }

    applyFiltersHandler = (city, fromDate, forNDays) => {
        saveFiltersAsync(city, fromDate, forNDays, this.props.saveFilters).then(() =>{
            this.props.fetchHotels(this.props.filters)
        })
    }

    handleLike(hotel, forNDays, fromDate){
        var needToAdd = true
        this.props.liked.liked.map(likedHotel => {if(likedHotel.hotel.hotelId === hotel.hotelId && Number(likedHotel.duration) === Number(forNDays) && fromDate === likedHotel.fromDate){needToAdd = false} return true})
        if(needToAdd){
            const likedUpdate = this.props.liked.liked
            likedUpdate.push({hotel: hotel, duration: forNDays, fromDate: fromDate})
            this.props.updateLiked(likedUpdate)
        } else {
            const likedUpdate = this.props.liked.liked
            for(const j in likedUpdate){
                if(likedUpdate[j].hotel.hotelId === hotel.hotelId && Number(likedUpdate[j].duration) === Number(forNDays) && fromDate === likedUpdate[j].fromDate){
                    likedUpdate.splice(j, 1)
                    this.props.updateLiked(likedUpdate)
                    break
                }
            }
        }
    }

    render(){
        return(
            <React.Fragment>
                <Header handleOut={this.props.handleOut}/>
                <div className="base">
                    <div className="flex-horizontal main-window">
                        <div className="additional flex-vertical margin-right-24">

                            <FiltersMenu baseFilters={this.props.filters} applyFiltersHandler={this.applyFiltersHandler}/>

                            <Preferences liked={this.props.liked.liked} handleOnLikeClicked={this.handleLike}/>

                        </div>

                        <Results filters={this.props.filters} hotels={this.props.hotels.url} liked={this.props.liked.liked} addToLiked={this.handleLike}/>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hotels));