import React from 'react';
import logo from '../assets/img/pizza.png';
import welcome from '../assets/img/welcome.png';

class Home extends React.Component{
  state={
    toggle:false
  };

  appearance =()=>{
    const wait = !this.state.toggle;
    setTimeout(()=>{
      this.setState({
        toggle: wait
      })
    },1100)
  };

  render(){

    return (
        <div>
          <div>
            <div onLoad={this.appearance}>
              <img className={this.state.toggle? "welcome" : "none"} src={welcome} alt=""/>
            </div>
            <img className="pizza" src={logo} alt=""/>
          </div>
        </div>
    );
  }
}



export default Home