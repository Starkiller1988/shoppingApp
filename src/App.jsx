import { Component } from "react";
class App extends Component {
  
  constructor() {
    super();
    this.state = {
      data: null,
    }
    this.getData();
  }

  getData() {
    let data = fetch("https://fetch-me.vercel.app/shopping-list.json").then(
      (resp) => {
        resp.json().then((res) => {
          console.log(res);
          this.setState({data:res})
        })
      })
  }

  render() {
    return ( 
    <div> {
      
      this.state.data ?
      this.state.data.map((shoppingitem)=>
      <span>{shoppingitem.name}</span>
    )
      :
      <h3>Wait... data is fetching</h3>


      }
    </div>
    )
  }
}

export default App;
