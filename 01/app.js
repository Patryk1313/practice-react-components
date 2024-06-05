import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        counter: 0,
    }
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }

    componentDidMount() {
        this.id = setInterval(() => {
            const {counter} = this.state
            this.setState({counter: counter + 1}),
            console.log('componentDidMount')
        }, 5000)
        
    }
    
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        clearInterval( this.id  )
        console.log('componentWillUnmount');
    }

}

root.render(<App/>);
