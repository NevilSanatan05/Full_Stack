function Raj() {
  return <h2>Hello from Welcome!</h2>;
}

function Greeting(props) {
  return <h3>This is another component {props.name}.</h3>;
}

export { Greeting };    // Named export
export default Raj; // Default export
