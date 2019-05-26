import React, { Component } from 'react';
import axios from 'axios';


class Counter extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
            visitorCount:0
          };
      }

   
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentDidMount() {
        console.log('mounted');
        axios.get('/api/visitors/count')
        .then(response => {
            this.setState({visitorCount: response.data.visiterNumber})
        })   
    }

    render() { 
        return (   
            <div className="container">
                  <h1>Hi, you are visitor number {this.state.visitorCount}</h1>
            </div>
            
        );
    }
}
 
export default Counter;