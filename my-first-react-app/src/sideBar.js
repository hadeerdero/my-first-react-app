import './sideBar.css';
import Button from'./Button'
export default function SideBar(){
    return(
        <div className="side-bar">
            <div className="grid-container">
            <div className="grid-item">
            <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
            </div>
            <div className="grid-item">
            <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
            </div>
            </div>
            <Button></Button>
          
        </div>
    )
}