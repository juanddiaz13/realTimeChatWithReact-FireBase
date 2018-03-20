import React, { Component }  from 'react';

class ChatRoom extends Component{

    constructor(){
        super();

        this.state = {
            message: '',
            messages: []
        }
        
    }

    handleSubmit(e){
        e.preventDefault();
        const list = this.state.messages;
        const newMessage = {
            id:this.state.messages.length,
            text:this.state.message
        };
      /*  list.push(newMessage);
        this.setState({messages: list}); */
        window.firebase.database().ref(`messages/${newMessage.id}`).set(newMessage);
        this.setState({message: ''});
    }

    updateMessage(e){
        this.setState({message: e.target.value});
    }

    componentDidMount(){
        window.firebase.database().ref('messages/').on('value',snap=>{
            const currentMessages = snap.val();
            if(currentMessages!==null){
               this.setState({messages: currentMessages});
            }
        });
    }

    render(){

        const { messages } = this.state;
        const messagesList = messages.map(message=> {return <li key={message.id}> {message.text}</li>});
        return(
            <div>
                <ol>
                   {messagesList}
                </ol>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input onChange={this.updateMessage.bind(this)}  type="text" value={this.state.message}></input>
                <button> Send </button>
            </form>
            </div>
        )
    }
}

export default ChatRoom;