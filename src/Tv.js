import { Component } from "react";
import axios from "axios";
export default class Tv extends Component{

state={movies:[]};


async componentDidMount(){

let x=await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361');
this.setState({movies:x.data.results})



}





render(){
    return <div>

<div class = "container" >
<div className = "row" >
<div className="col-md-3">
<div className="brd w-50"></div>
<h3>Trending <br />TV<br />to watch now</h3>
<p className="secondColor">most watched tv by days</p> 
<div className="brd w-100"></div>
</div>

{this.state.movies.map((value,index)=>{

return <div key={index} className="col-md-3">
<img src={"https://image.tmdb.org/t/p/original"+value.poster_path} className="w-100" />
<p>{value.title}{value.name}</p>
</div>


})}

</div>
</div>
    </div>
}



}