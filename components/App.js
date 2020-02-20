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
            response: {
                ticker: 'There will be ticker',
                exchange: 'NASDAQ',
                price: 'There will be price',
                change: 'There will be change',
                change_percent: 'There will be change percent',
                last_trade_time: 'There will trade time',
                dividend: '0.57',
                yield: '1.96'
            },
        };
    }

    componentDidMount() {
        this.socket = io('http://localhost:4000');
        this.socket.on('connect', () => {
            console.log('connected');
            this.socket.on('AAPL', (data) => {
                this.setState({response: JSON.parse(data)});
                console.log(this.state);
            });

            this.socket.emit('ticker', 'AAPL');
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
                <Table res={response}/>
            </div>
        );
    }
}

export default App;
