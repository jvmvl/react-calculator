import React, {Component} from 'react';
import './ButtonsComponent.css';

class ButtonsComponent extends Component {
    render() {
        return (
            <div className="calculator-keys">
                <button name="+" onClick={e => this.props.onClick(e.target.name)} className="operator">+</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)} className="operator">-</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)} className="operator">&times;</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)} className="operator">&divide;</button>
                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="." onClick={e => this.props.onClick(e.target.name)} className="decimal">.</button>
                <button name="AC" onClick={e => this.props.onClick(e.target.name)} className="all-clear">AC</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)} className="equal-sign">=</button>
            </div>
        );
    }
}

export default ButtonsComponent;