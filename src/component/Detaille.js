import React,{Component} from 'react'
import Card from './Card';
import Info from './Info';


class Detaille extends Component
{

render()
{
 
    const lien=location.href;
    const id=lien.substring(31)

    const blogdeta=Info[id-1];
 

return(

    <section className="py-4 py-lg-5 container">
        <div className="row justify-content-center">
            <div className='col-8'>

       <img src={blogdeta.img} className='img-fluid' style={{width:'100%',height:'40%'}} />
       <h1 className="text-center">{blogdeta.title}</h1>
       <p>{blogdeta.text}</p>

            </div>
        </div>
    </section>
    

)
}
}export default Detaille



