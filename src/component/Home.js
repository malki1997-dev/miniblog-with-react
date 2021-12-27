import React,{Component} from 'react'
import Card from './Card';
import Info from './Info';

class Home extends Component
{

    constructor()
    {
        super();
        this.state=
        {
           list:Info
        }

    }



render()
{
const blog=this.state.list.map((item,index)=>
                                             
                                             <div className='col-md-4 col-sm-6' key={index} style={{marginBottom:"30px"}}>
                                             <Card 
                                                   title={item.title}
                                                   image={item.img}
                                            /></div>
                                             )


return(

    <div className="container" style={{marginTop:"30px"}}>
    <div className="row" >
        {blog}
    </div>
    </div>
    
)

}

}
export default Home



