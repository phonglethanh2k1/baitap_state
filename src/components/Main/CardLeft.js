import React, { Component } from 'react';
import { data } from './Data';

export default class CardLeft extends Component {
    state = {
        selectedGlass: null,
    };
    handleGlassSelection = (glass) => {
        this.setState({ selectedGlass: glass });
    }
    renderData = () => {
        return data.map((item, index) => {
            return (
                <div className={`col-3 ${this.state.selectedGlass === item ? 'selected' : ''}`} key={index} onClick={() => this.handleGlassSelection(item)}>
                    <div className="card text-left">
                        <div className="card-body">
                            <img className="card-img-top" src={item.url} alt="" />
                        </div>
                        <div className="card-footer">
                            {item.name} - ${item.price}
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        const { selectedGlass } = this.state;
        return (
            <>  <div className='col-6 mx-auto'>
                <div className=''>
                <img className="card-img-top" style={{position: 'relative'}} width="100%"src="/image/model.jpg" alt="" />
                {selectedGlass && (
                        <div>
                            <img className="selected-glass eyes" src={selectedGlass.url} alt="" width="100%" />
                            <div className="card-footer">
                                {selectedGlass.name} - ${selectedGlass.price}
                            </div>
                            <div className="card-footer">
                                {selectedGlass.desc}
                            </div>
                        </div>
                    )}
                </div>
                </div>
                <div className="row">
                    {this.renderData()}
                </div>
            </>
        );
    }
}