import React from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = React.useState("Escreva aqui...");
  const handleChange = event => setName(event.target.value);

  return (
    <div className="App">
      <div>
        <input type="text" value={name} onChange={handleChange} />
      </div>
      <h1>Hello {name}</h1>
    </div>
  );
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: ""
//     };
//   }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   };

//   render() {
//     return (
//       <div className="App">
//         <div>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </div>
//         <h1>Hello {this.state.name}</h1>
//       </div>
//     );
//   }
// }
