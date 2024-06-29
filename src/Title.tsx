function Title(){
    //lo sig es jsx que se convertira en javascrip para q lo lea el explorador web
    const greeting = "Hi Dear";
    if(greeting){
      return<h1>{greeting}</h1>
    }
  return <h1>"Hi World"</h1>;
  }
  
  export default Title;