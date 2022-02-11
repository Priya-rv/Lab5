import React from 'react';
import axios from 'axios';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      items:[]
    };
  }
  
  componentDidMount() {
    this.getbooks();
  }
  
  getbooks=()=>{
    axios.get('http://localhost:9000/')
    .then((res)=>{
      this.setState(()=>({
        items:res.data.Item
      }))
    })
  }
  
  render(){
    return(
    <React.Fragment>
      <table border="1" >
        <thead>
            <td>Sr No</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>FINAL PRICE</td>
        </thead>
        <tbody>
          {
            this.state.items.map((item,index)=>{
              return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quant}</td>
                    <td>{item.price*item.quant}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </React.Fragment>)
  }
}
export default App;