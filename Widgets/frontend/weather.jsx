import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(pos) {
            let xml = new XMLHttpRequest();
            let lng = pos.coords.longitude;
            let lat = pos.coords.latitude;

            xml.onreadystatechange = function() {
                if(xml.readyState === 4) {
                    
                }
            }
        })
    }

    render() {
        return (
            <div>
                This is the weather
            </div>
        )
    }
}

export default Weather;