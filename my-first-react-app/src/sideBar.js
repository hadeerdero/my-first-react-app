import './sideBar.css';
import Button from'./Button';
// import flowra from '/my-first-react-app/public/images/flowra.jpg';
import flowra from './images/flowra.jpg';
import free from './images/free-images.jpg'
import star from './images/start.png'

export default function SideBar(){
    return(
        <div className="side-bar">
            <div className="grid-container">
            <div className="grid-item">
            <Button>
            <img src={star} alter="" style={{maxWidth:"100%"}}>
            </img>
            </Button>
        
            </div>
            <div className="grid-item">
        <Button>
        <img src={flowra} alter="" style={{maxWidth:"100%"}}>
        </img>
        </Button>
         
         
            </div>
            </div>
            <Button >
            
            <img src={free} alter="" style={{maxWidth:"100%"}}>
            </img>
            </Button>
          
        </div>
    )
}