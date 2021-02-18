import React from "react";

class App extends React.Component{

    //once create a state 1st init constructor
    constructor(props){
        //declare super class
        super(props);

        // create a state propertise and values 
        this.state ={
            Header : "ToDo",
            Content : "Content",
            Footer : "Footer",
            data : '',
            ListToDO : [],
            editdata : ''
        }
        this.updateState = this.updateState.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.getToDo = this.getToDo.bind(this);
        this.setEditData = this.setEditData.bind(this);
        this.updateToDo = this.updateToDo.bind(this);
    }
    // update input value in state
    updateState(e){
      this.setState({
        data : e.target.value
      })
    }

    // remove todo list 
    removeTodo(i){
      let todos = this.state.ListToDO.slice();
      todos.splice(i, 1);
      this.setState({
        ListToDO : todos
      });
    }
    
    // add todo
    clickEvent(){
      this.setState({
        ListToDO : [...this.state.ListToDO, this.state.data],
        data : ''
      })
      // this.setState((prevState, props) => {
      //   return {ListToDO: prevState.data};
      // });
      
    }

    // get particular todo list by using array index
    getToDo(index){
      var data = this.state.ListToDO[index];
      return data;
    }

    // set edit todo data
    setEditData(value){
      this.setState({
        editdata : value
      })
    }

    // update edit todo data
    updateToDo(OrgIndex){
      // get edit value
      let EditValue = this.state.editdata;

      // get state array
      let TodoItems = [...this.state.ListToDO];

      // select particular state array object by using index
      let TodoItem = {...TodoItems[OrgIndex]};

      // set value for particular object
      TodoItem = EditValue;

      // set value for array of object
      TodoItems[OrgIndex] = TodoItem;

      this.setState({
        ListToDO : TodoItems,
        editdata : ''
      });
    }

    render(){
        return (
            <div>
                <Heading headerProp={(this.state.Header) != '' ? this.state.Header : this.props.header }/>
                <div className="container">
                  <input type="text" name="todo" id="todo" className="form-controll" placeholder="ToDo" value={this.state.data} onChange={this.updateState}/>
                  <button type="button" className="btn btn-sm btn-primary" onClick={this.clickEvent}>
                    Add
                  </button>
                </div>
                {
                  this.state.ListToDO != '' ? 
                  <div className="table-responsive">
                    <div className="header">
                      <h5 className="text-center">
                        ToDO List
                      </h5>
                    </div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">ToDO</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.ListToDO.map((elem, index) => {
                            return <ToDoList key={index} list={elem} count={index} removeToDo={this.removeTodo} getTodoByIndex={this.getToDo} seteditdata={this.setEditData} updateEditToDo={this.updateToDo}/>
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                  : ''
                }
            </div>
        );
    }
    
}
// Default Propertity
App.defaultProps={
  header:"Header",
}
class Heading extends React.Component{
  render(){
    return(
      <div className="header text-center mx-auto mt-3">
          <h4>{this.props.headerProp}</h4>
      </div>
    );
  }
}



class ToDoList extends React.Component {
  
  //remove function to rendering a parent class function
  removeItem(i)
  {
    this.props.removeToDo(i);
  }
  
  // Edit Todo
  TodoEdit(index)
  {
    var data = this.props.getTodoByIndex(index);
    
    Swal.fire({
      title: "Edit ToDo",
      text: "",
      input: 'text',
      inputValue: data,
      showCancelButton: true ,
      allowOutsideClick: false,
      confirmButtonColor: '#38c172',
      confirmButtonText:
        'Update',
      confirmButtonAriaLabel: 'Update',
      cancelButtonText:
        'Close',
      cancelButtonAriaLabel: 'Close',
      cancelButtonColor: '#e3342f',
      }).then((result) => {
      if (result.value) {
          // Swal.fire('Result:'+result.value);
          this.props.seteditdata(result.value);
          this.props.updateEditToDo(this.props.count);
      }});
  }
  render() {
    return (
      <tr>
        <th scope="row">{this.props.count + 1}</th>
        <td>{this.props.list}</td>
        <td className="text-center">
          <i className="fa fa-pencil text-success ml-1 mr-1" id={this.props.count} aria-hidden="true" onClick={() => {this.TodoEdit(this.props.count)}}></i>
          <i className="fa fa-trash text-danger ml-1 mr-1" id={this.props.count} aria-hidden="true" onClick={ () => {this.removeItem(this.props.count)}}></i>          
        </td>
      </tr>
    );
  }
}

export default App;