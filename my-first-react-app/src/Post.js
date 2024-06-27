import './Post.css';
export default function Post({title="No Title", paragraph="No Post Body"}){
    return(
        <div className="post">
            <h1>
                {title}
            </h1>
            <hr></hr>
            <p>{paragraph}</p>
        </div>
    )
}