import './button.css';
export default function Button({children}){
    return(
        <div className="button">
           <button className="btnClass">tag button
            {children}
           </button>
        </div>
    )
}