import { Link } from 'react-router-dom'
import './ImageList.css'
 

export function ImageList({ data }) {
  
  return (
    <>
      {data.map((x) => (
        <div className="wrapper">
          <div  key={x.id}>
              <Link to= {{
                pathname: `/image/${x.id}`,
                state: { images : x }
                }}>
                <img
                  className="images"
                  src={x.urls.full}
                  alt={x.alt_description}
                  style={{
                    maxWidth: "95%",
                    border: "1px solid #e3e3e3",
                    borderRadius: "5px",
                  }}
                />
              </Link>
          </div>
        </div>
      ))}
    </>
  );
}


export default ImageList