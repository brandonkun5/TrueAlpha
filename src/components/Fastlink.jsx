import React, { Component } from 'react';

class Fastlink extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div id="container-fastlink">
                <div style={{'textAlign': 'center'}}>
                    <input type="submit" id="btn-fastlink" value="Link an Account" />
                </div>
            </div>
         );
    }
}
 
export default Fastlink;