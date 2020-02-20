import React from 'react';
import '../styles/application.scss';
import PropTypes from 'prop-types';

function Table(props) {
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
                    <td>{props.res.ticker}</td>
                    <td>{props.res.price}</td>
                    <td>{props.res.change}</td>
                    <td>{props.res.change_percent}</td>
                    <td>{props.res.last_trade_time}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

Table.propTypes = {
    res: PropTypes.object,
};

export default Table;
