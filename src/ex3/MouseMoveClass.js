import { Component } from 'react';

class MouseMoveClass extends Component {

    state = {  
        x: 0,
        y: 0,
    };

    componentDidMount() {
        window.addEventListener('mousemove', (e) => {
            this.setState({
                x: e.offsetX,
                y: e.offsetY,
            })
        })
    };

    render() { 
        return (
            <div>
                Mouse Position
                <div>X: {this.state.x}</div>
                <div>Y: {this.state.y}</div>
            </div>
        );
    };
};
 
export { MouseMoveClass };