import React, {Component} from 'react';
import {render} from 'react-dom';
import ChatRoom from './components/ChatRoom';


class App extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            value:''
        };
    }

    handleNameOnChange(e) {
        this.setState({name: e.target.value});
    }

    render(){
        return(
           <div>
            <h1>Chat instantáneo con React y FireBase</h1>
            <input type="text" value={this.state.name} onChange={ (e) => this.handleNameOnChange(e)}/>
            <ChatRoom/>
            <h1 className="titulo">{this.state.name}</h1>
           </div>
        );
    }
}

export default App;