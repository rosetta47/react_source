import React ,{component}from "react"

class Greeting extends component{
props = {
     name:'홍길동'
         };     
render(){
    return(
        <div>
            <h1>Hello, {this.props.name}!</h1>;
        </div>
    );

}
}
export default Greeting;