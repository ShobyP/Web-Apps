import React from 'react';

class Clock extends React.Component{
    state = { time: ''};

    componentDidMount(){
        setInterval(
            ()=> {
                this.setState({time: new Date().toLocaleTimeString()})
            },1000)
    }

    render(){
        return (
            <div>
                <h3>The time is: {this.state.time}</h3>
            </div>
        );
    }

}

export default Clock;