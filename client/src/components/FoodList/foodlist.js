var foodList = React.createClass({
    render: function(){
      var listItems = this.props.names.map(function(food){
        return <li> {food} </li>;
      });
      return (
        <div>
          <h3> Current List </h3>
          <ul>
            {listItems}
          </ul>
        </div>
      )
    }
  });