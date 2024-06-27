import './Post.css';
export default function Post({title, paragraph}){
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