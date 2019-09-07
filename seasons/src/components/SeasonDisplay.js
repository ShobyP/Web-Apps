import React from 'react';
import '../styles/SeasonDisplay.css';
import Clock from "./Clock";

const seasonConfig = {
    summer: {
        text: 'Lets go to the beach!',
        iconName:'sun'
    },
    winter:{
        text: 'BRRR its cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {

    if (lat > 0 && month>2 && month < 9){
        return 'summer';
    }else if (lat<0 && month<2 && month>9){
        return 'summer';
    }else {
        return 'winter';
    }
}


const SeasonDisplay = (props) => {

    const latitude = props.lat;
    const month = new Date().getMonth();
    const season = getSeason(latitude,month);
    const { text, iconName } = seasonConfig[season];

    return <div className={`season-display ${season }`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1>
            <div>
                <a><Clock/></a>
            </div>
        <i className={`icon-right massive ${iconName} icon`}/>
    </div>
};

export default SeasonDisplay;