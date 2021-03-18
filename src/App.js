import "./App.css"

import ImageSearch from "./ImageSearch/ImageSearch.js";
import {ImageList} from "./ImageList/ImageList.js"
import React from "react";

const API_KEY = "Sb2AVCxT1QQ0Aaxwke_rzSq9ZEaVobx2VIb9XDesYR0";

class App extends React.Component {
  state = {
    images: [],
    error: null,
  };

  getRes = async (value) => {
    const URL = `https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=${API_KEY}`;

    const response = await fetch(URL);

    const data = await response.json();

    this.setState({ images: data.results });

    console.log(data);
    
  };

  render() {
    return (
      <div>
        
        <ImageSearch getRes={this.getRes} />
        
        {this.state.images&&
        
        <div style={{columnCount:4}}>
        
          <ImageList data={this.state.images}/>  
        
        </div>}
      
      </div>
    );
  }
}


export default App;
