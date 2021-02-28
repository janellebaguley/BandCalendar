import React, {Component} from 'react'
import axios from 'axios'
import Calendar from './Calendar'

class BandCalendar extends Component {
    constructor(props)
    super(props)
    state = {
        cal_event: []
    }
    componentDidMount = (value) => {
        axios.get('/api/event')
        .then(res => this.setState(cal_event: res.data))
        .catch(err => console.log(err))
    }
    render(){
    return(
            <div>
                <Calendar
                readOnly value={value}
                />
            </div>
        )
    }
}
export default BandCalendar;