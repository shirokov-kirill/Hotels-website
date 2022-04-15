import React from "react"
import { Button, Input, Label } from "reactstrap"

export default class FiltersMenu extends React.Component {

    constructor({baseFilters, applyFiltersHandler, saveFilters}){
        super({baseFilters, applyFiltersHandler, saveFilters})

        this.handleCityChange = this.handleCityChange.bind(this)
        this.handlefromDateChange = this.handlefromDateChange.bind(this)
        this.handleforNDaysChange = this.handleforNDaysChange.bind(this)
        this.handleApplyFilters = this.handleApplyFilters.bind(this)
    }

    handleCityChange = (event) => {
        this.props.saveFilters(event.target.value, this.props.baseFilters.fromDate, this.props.baseFilters.forNDays)
    }

    handlefromDateChange = (event) => {
        this.props.saveFilters(this.props.baseFilters.city, event.target.value, this.props.baseFilters.forNDays)
    }

    handleforNDaysChange = (event) => {
        this.props.saveFilters(this.props.baseFilters.city, this.props.baseFilters.fromDate, event.target.value)
    }

    handleApplyFilters = () => {
        this.props.applyFiltersHandler()
    }

    render(){
        return(
            <div className="filters-menu flex-vertical padding-32 margin-bottom-24 border-radius-16">
    
                <div className="flex-vertical margin-bottom-32">
    
                    <div className="flex-vertical margin-bottom-16">
                        <Label htmlFor="location" className="item-label margin-0 margin-bottom-7">Локация</Label>
                        <Input type="text" id="location" name="location" value={this.props.baseFilters.city} onChange={this.handleCityChange}/>
                    </div>
                    <div className="flex-vertical margin-bottom-16">
                        <Label htmlFor="date" className="item-label margin-0 margin-bottom-7">Дата заселения</Label>
                        <Input type="date" id="date" name="date" className="margin-bottom-4" value={this.props.baseFilters.fromDate} onChange={this.handlefromDateChange}/>
                    </div>
                    <div className="flex-vertical">
                        <Label htmlFor="numberOfDays" className="item-label margin-0 margin-bottom-7">Количество дней</Label>
                        <Input type="number" id="numberOfDays" name="numberOfDays" value={this.props.baseFilters.forNDays} onChange={this.handleforNDaysChange}/>
                    </div>
    
                </div>
    
                <Button className="filters-apply-button" onClick={this.handleApplyFilters}>Найти</Button>
    
            </div>
        )
    }
}