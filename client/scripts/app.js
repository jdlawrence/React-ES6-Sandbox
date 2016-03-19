class Jamil extends React.component {
  constructor(props) {
    super(props);
  }

  getInitialState: function() {

    return {count: this.props.message};
  },

  render: function() {
    return <div>{this.state.count}</div>;
  }
});

ReactDOM.render(
  <Jamil message={'Hi Jamil'} />,
  document.getElementById('app')
  );