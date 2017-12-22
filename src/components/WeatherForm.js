import React from 'react';

export default class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: '',
            zipcodeValid: false,
        };
    }
    onSubmit = (e) => {
      e.preventDefault();
      if(this.state.zipcode.length != 0 ){
        this.props.onSubmit(this.state.zipcode);
        this.setState({zipcode: '', zipcodeValid: false});
      } else {
        this.setState({zipcodeValid: true});
      }
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
                            this.setState({value: e.target.value, zipcodeValid: false});
                      }}
                      />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">Get The Weather</button>
                </span>
                </div>
                {this.state.zipcodeValid? 
                    <div className="input-group">  
                        <div className="alert alert-info">
                        Please don't leave input blank
                        </div>
                    </div> 
                : ""} 
                </form>
            </div>
       </div>
        );
    }
}