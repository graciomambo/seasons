
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class App extends React.Component {

    constructor (props){
        
        super(props);
        this.state = {lat: null};

    }
    
    render () {

        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err)=> console.log(err)
        );

        return <div>Latitude: {this.state.lat}</div>;
    }
}

root.render(
    <React.StrictMode> v
        
        <App />
    </React.StrictMode>
);
