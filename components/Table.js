import React, {PureComponent} from 'react';
import '../styles/application.scss';

class Table extends PureComponent {
    render() {
        return (
            <div >
                <h1>Table</h1>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Price</th>
                        <th scope="col">Change</th>
                        <th scope="col">Last Trade Time</th>
                        <th scope="col">Dividend</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>116.60</td>
                        <td>-0.46</td>
                        <td>Oct 21, 4:00PM EDTo</td>
                        <td>0.57</td>
                    </tr>

                    </tbody>
                </table>

            </div>
        );
    }
}

export default Table;
