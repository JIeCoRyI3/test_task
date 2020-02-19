import '../styles/application.scss';
// import {connect} from '../services';
import React, {Component} from 'react';
import Table from './Table';
import io from 'socket.io-client';

// The below line is here as an example of getting prices

// connect('AAPL');

class App extends Component {

    constructor() {
        super();
        this.state = {
            response: false,
        };
    }

    componentDidMount() {
        this.socket = io('http://localhost:4000');
        this.socket.on('connect', () => {
            console.log('connected');
            this.socket.on('', (data) => {
                console.log('YES!!!!!');
                this.setState({response: data});
                console.log(this.state);
            });

            this.socket.emit('ticker', '');
        });

        this.socket.on('disconnect', () => {
            console.log('disconnected');
        });
    }

    render() {
        const { response } = this.state;
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
                {response}
                <Table/>
            </div>
        );
    }
}

export default App;
