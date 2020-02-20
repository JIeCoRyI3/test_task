import React from 'react';
import '../styles/application.scss';
import PropTypes from 'prop-types';

function Table(props) {
    const date = props.res.last_trade_time.slice(0, 10);
    const time = props.res.last_trade_time.slice(11, 19);
    const animation = ' animated flash delay-2s';
    let cls = Number(props.res.change) >= 0 ? 'fas fa-arrow-circle-up' : 'fas fa-arrow-circle-down';
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
                    <td>{props.res.ticker}</td>
                    <td>{props.res.price} <i className={cls}></i></td>
                    <td>{props.res.change} <i className={cls}></i></td>
                    <td>{props.res.change_percent} <i className={cls}></i></td>
                    <td>{date[0] === 'T' ? props.res.last_trade_time : date + ' ' + time}</td>
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
