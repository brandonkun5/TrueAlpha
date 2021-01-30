import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
     };
     
    styles = {
        fontSize: '20px'
    }

    handleIncrement = () => {
        console.log('Increment Clicked', this.state.value);
        this.setState({ count: this.state.value + 1})
    }


    render() { 
        console.log('Component', this.props)
        return ( 
            <React.Fragment>
                {this.props.children}
                <span style={this.styles} className={this.getClasses()}>{ this.formatCount() }</span>
                <button onClick= {this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {(this.state.tags.length === 0 && 'Please create a tag')}
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>

            </React.Fragment>
         );
    }

    getClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;