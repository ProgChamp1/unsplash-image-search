import React from "react";
import { Link } from "react-router-dom";
import "./ImageView.css"

const ImageView = (props) => {
    
    const { urls:{full : image} , user:{name: owner} , links:{html : pageURL}} = props.location.state.images

    return (
        <div className="wrapper">
            <div className="content">
                <img className="image"src={image} style={{maxWidth: "23vw", border: "1px solid #e3e3e3",borderRadius: "5px"}}/>
                <p>&copy; Unsplash</p>
                <h4> Credit : {owner}</h4>
                <h4> Download: <span> <a target ="_blank" href={pageURL}>Go To Download</a></span></h4>
                <Link to ={{
                    pathname: "/"
                }}>
                <button> Home </button>
                </Link>
            
            </div>
            
        </div>
    )
}

export default ImageView