import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Card extends Component
{

    

render()
{

return(

    <div>
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={this.props.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
    <Link to="/detaille" className="btn btn-primary">Detaill</Link>
  </div>
</div>
    </div>
    
)

}


}export default Card



