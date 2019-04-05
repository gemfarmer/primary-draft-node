import React, { Component } from 'react';
class UserList extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
    console.log(this.state)
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/users')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <h1>List of Users</h1>
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div key={item.id}>
                  {item.username}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            No Users Found.
          </div>
        )
      }
      </div>
    );
  }
}

export default UserList;