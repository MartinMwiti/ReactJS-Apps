import React, { Component } from 'react'

class Filter extends Component {
    render() {

        return (
            <div className="row">

                <div className="col-md-4">
                    {this.props.count} products found.
                </div>

                <div className="col-md-4">
                    <label>
                        Order by
                            <select 
                                className="form-control" 
                                value={this.props.sort} 
                                onChange={this.props.handleChangeSort}
                            >
                                <option value="">select</option>
                                <option value="lowest">lowest to highest</option>
                                <option value="highest">highest to lowest</option>
                            </select>
                    </label>
                </div>

                <div className="col-md-4">

                </div>

            </div>
        )
    }
}

export default Filter