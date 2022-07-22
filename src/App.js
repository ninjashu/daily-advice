import React from 'react';
import axios from 'axios';  
import './App.css'

class App extends React.Component {
    state = {advice:''};
    componentDidMount() {
        this.fetchadvice();
    }

    fetchadvice=() => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip;
            console.log(advice);
            this.setState({advice:advice});
            })
        .catch((error) => {console.log(error)})
    }
    render(){
        const {advice} = this.state;
        return(
            <div className="container">
                <div className="box">
                    <h1 className="heading">{advice}</h1>
                    <button onClick={this.fetchadvice}>Try New</button>
                </div>
            </div>
        )
    }
}



export default App;