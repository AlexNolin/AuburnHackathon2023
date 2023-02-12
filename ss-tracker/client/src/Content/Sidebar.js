import React, { Component } from 'react';
 
class Sidebar extends Component {
  render() {
    return (
      <div className="side">
        <h2>Shark Selection</h2>
        <p>
            <input type="checkbox" id="AlbertaData"></input>
            <label for="AlbertaData"> Alberta</label><br></br>
            <input type="checkbox" id="BillnyeData"></input>
            <label for="BillnyeData"> Bill Nye</label><br></br>
            <input type="checkbox" id="BrendaData"></input>
            <label for="BrendaData"> Brenda</label><br></br>
            <input type="checkbox" id="BuddyData"></input>
            <label for="BuddyData"> Buddy</label><br></br>
        </p>
      </div>
    );
  }
}

export default Sidebar;