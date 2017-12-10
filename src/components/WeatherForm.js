import React from 'react';

export default class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    onSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.value);
      this.setState({value: ''});
    }
    render() {
        return (
       <div className="row">
            <div className="col-lg">
                <form onSubmit={this.onSubmit}> 
                <div className="input-group">   
                <input type="text" 
                      className="form-control" 
                      placeholder="Enter Zipcode..." 
                      value={this.state.value}
                      onChange={(e) => {
                            this.setState({value: e.target.value});
                      }}
                      />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">Get The Weather</button>
                </span>
                </div>
                </form>
            </div>
       </div>
        );
    }
}