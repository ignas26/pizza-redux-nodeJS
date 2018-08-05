import React from 'react';
import {connect} from 'react-redux';

class Drink extends React.Component {
  render() {
    const drinks = this.props.drinks.map((drink, i) => {
      return (
          <div key={i} className="drink">
            <h3>{drink.title}</h3>
            <p>{drink.price}€</p>
            <button className="drinkBtn" onClick={()=>this.props.addDrink(drink)}>
              Į krepšelį
            </button>
          </div>
      )
    });
    return (
<div>
  <h1>Drinks</h1>
  <div className="drinkGnrl">
            {drinks}
  </div>
</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    addDrink(drink){
      dispatch({type:'ADD_DRINK',payload:drink})
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Drink)