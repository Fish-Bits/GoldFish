import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
import Sticker from '../assets/GoldfishSticker.jpg';
 
class ChatWindow extends Component {
 
  constructor() {
    super();
    this.state = {
      messageList: []


    };
  }
 
  
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message],
    })


    // fetch('/:id/comment', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     user_id: 1, // get from app
    //     comment: "byebye", // get from input box
    //   })
    // })

  //   axios.post('/:id/comment', message)
  //   .then(req.body => console.log(req.body))
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })


    }
  }
 
  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'Fish Bits Chit Chats',
          imageUrl: <img src={Sticker}/>
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}

export default ChatWindow;