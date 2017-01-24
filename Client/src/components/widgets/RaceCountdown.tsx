import * as React from "react";
import {PropsBase} from "../../utilities/Utilities";
import * as moment from "moment";
export interface RaceCountdownProps extends PropsBase{
    displayName:string;
    cutoffDate:string;
}

export class RaceCountdown extends React.Component<RaceCountdownProps,any>{
    interval;
    /**
     *
     */
    constructor(props:RaceCountdownProps) {
        super(props);
        this.state = {timeRemaining:0};
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.interval = setInterval(this.tick,1000);
 
    }

    componentWillUnmount(){
        setInterval(this.interval);
    }    
    tick(){

        let cutoffTime = moment(this.props.cutoffDate);
        let now = moment();
        let timeRemaining =  cutoffTime.diff(now) ;
        let duration = moment.duration(timeRemaining,"milliseconds");
        let days = Math.floor(duration.asDays());
        let hours = Math.floor(duration.subtract(days,"days").asHours());
        let minutes = Math.floor(duration.subtract(hours,"hours").asMinutes());
        let seconds = Math.floor(duration.subtract(minutes,"minutes").asSeconds());
        let strHours = ("0" + hours.toString()).slice(-2);
        let strMinutes = ("0" + minutes.toString()).slice(-2);
        let strSeconds = ("0" + seconds.toString()).slice(-2); 
        let output = "";
        if (days == 1){
            output += days.toString() + " day ";
        }else if (days > 1){
            output += days.toString() + " days, ";
        }
        output += strHours + ":"+ strMinutes + ":" + strSeconds;
        this.setState({timeRemaining:output });
    }
    render(){
        return <div className="race-countdown"><span>{this.props.displayName}</span>:<span>{this.state.timeRemaining}</span></div>
    }


}