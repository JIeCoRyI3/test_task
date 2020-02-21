import React from 'react';
import '../styles/application.scss';
import PropTypes from 'prop-types';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {changes: 0};
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.res.price !== this.props.res.price) {
            let change = nextProps.res.price - this.props.res.price;
            if(isNaN(change)) change = 0;
            this.setState({changes: change });
            // console.log( 'WOW!!!! ' + change);
        }
    }
    render() {
        const date = this.props.res.last_trade_time.slice(0, 10);
        const time = this.props.res.last_trade_time.slice(11, 19);
        const animation = ' animated flash delay-2s';
        let cls = Number(this.state.changes) >= 0 ? 'fas fa-arrow-circle-up' : 'fas fa-arrow-circle-down';
        cls += animation;
        return(
            <div>
                <h1>Table</h1>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ticker</th>
                        <th scope="col">Price</th>
                        <th scope="col">Change</th>
                        <th scope="col">Change percent</th>
                        <th scope="col">Last trade time</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{this.props.res.ticker}</td>
                        <td>{this.props.res.price} <i className={cls}></i></td>
                        <td>{this.state.changes.toFixed(2)} <i className={cls}></i></td>
                        <td>{this.props.res.change_percent} <i className={cls}></i></td>
                        <td>{date[0] === 'T' ? this.props.res.last_trade_time : date + ' ' + time}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Table.propTypes = {
    res: PropTypes.object,
};

export default Table;
