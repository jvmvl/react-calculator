import React, {Component} from 'react';
import './OutputComponent.css';

class OutputComponent extends Component {
    render() {
        let {result} = this.props;
        return (
            <input type="text" className="result calculator-screen" value={result} disabled />
        );
    }
}

export default OutputComponent;