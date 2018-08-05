import React from 'react';
import {connect} from 'react-redux';

class Checkout extends React.Component{
  state={
    show: false
  };

  showQuestion = e =>this.setState({show: !this.state.show});

  render(){

    const order = this.props.orders.map((order, i) => {
      return (
          <tr key={i}><td>{order.title} {order.price}€
            <span className="delete" onClick={()=>{this.props.removeItem(i)}}>X</span> </td></tr>
      )
    });

    const sum = this.props.orders.reduce((total, b)=>{
      return (
          total + parseFloat(b.price)
      )

    }, 0).toFixed(2);

    return (
        <div>
          <div className="backdrop"
               onClick={this.showQuestion}
               style={this.state.show ? {display: 'block'} : {display: 'none'}}>
          </div>
          <div className="popup"
               style={this.state.show ? {top: '50%'} : {top: '-50%'}}>
            <h3>Ar tikrai norite šalinti visą sąrašą?</h3>
            <div onClick={this.showQuestion}
                 className="no">
              No
            </div>
            <div className="yes"
                 onClick={ () => {
                   this.props.removeAllItems(this.props.orders);
                   this.showQuestion();
                 }}>
              Yes
            </div>
          </div>

          <h1>Checkout</h1>
          {this.props.orders.length<1? <h2>Neesate pasirinkę jokios prekės</h2> : null}
          <table>
            {order}
            {this.props.orders.length>0 && <div className="sum">Suma: {sum} </div> }

            {this.props.orders.length>0 &&
            <div onClick={this.showQuestion} className="clear">pašalinti viską</div>
            }
          </table>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    pizza: state.pizza
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeAllItems(order) {
      dispatch({type:'REMOVE_ALL', payload:order})
    },
    removeItem(order) {
      dispatch({type:'REMOVE_ITEM', payload:order})
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)