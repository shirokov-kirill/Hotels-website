import React from "react"
import './HotelsComponent.css'
import Header from "./Header"
import { fetchHotels, saveFilters } from '../redux/ActionCreators'
import FiltersMenu from "./FiltersMenuComponent"
import { connect } from 'react-redux'
import withRouter from '../redux/withRouter'
import Results from "./ResultsComponent"

const mapStateToProps = state => {
    return {
      hotels: state.hotels,
      liked: state.liked,
      filters: state.filters
    }   
  }
  
  const mapDispatchToProps = (dispatch) => ({
    fetchHotels: (filters) => {dispatch(fetchHotels(filters))},
    saveFilters: (city, fromDate, forNDays) => {dispatch(saveFilters(city, fromDate, forNDays))}
  })

export class Hotels extends React.Component {

    constructor(props){
        super(props)

        this.applyFiltersHandler = this.applyFiltersHandler.bind(this)
        this.saveFilters = this.saveFilters.bind(this)
    }

    componentDidMount() {
        this.props.fetchHotels(this.props.filters)
    }

    saveFilters = (city, fromDate, forNDays) => {
        this.props.saveFilters(city, fromDate, forNDays)
    }

    applyFiltersHandler = () => {
        this.props.fetchHotels(this.props.filters)
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <div className="base">
                    <div className="flex-horizontal main-window">
                        <div className="additional flex-vertical margin-right-24">

                            <FiltersMenu baseFilters={this.props.filters} applyFiltersHandler={this.applyFiltersHandler} saveFilters={this.saveFilters}/>

                            <div className="favorites-menu padding-32 border-radius-16">

                            </div>

                        </div>

                        <Results filters={this.props.filters} hotels={this.props.hotels} likedCount={this.props.liked.liked.length}/>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hotels));