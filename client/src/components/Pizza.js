import React from 'react';
import {connect} from 'react-redux';

class Pizza extends React.Component{
  render() {
    const pizzas = this.props.pizza.map((pizza, i) => {
      return (
          <div className="pizza" key={i}>
            <h3>{pizza.title}</h3>
            <p>{pizza.description}</p>
            <h4>{pizza.price}€</h4>
            <button className="pizzaBtn" onClick={()=>{this.props.addOrder(pizza)}}>Į krepšelį</button>
          </div>
      )
    });
    return (
        <div className="pizza-page">
          <h1>Pizzas</h1>
          <div className="pizza-menu">
            {pizzas}
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOrder(pizza) {
      dispatch({type:'ADD_PIZZA',payload:pizza})
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pizza)