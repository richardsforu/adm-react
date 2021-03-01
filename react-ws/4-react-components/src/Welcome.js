import React, { Component } from 'react';
// RCC

class Welcome extends Component { // statefull component
    state = {
        name: 'Praveen',
        product: { id: 10, name: 'Pen', price: 87 }
    }

    f1() {
        this.state = {
            admin: 'James'
        }
    }

    f2() {
        return (
            <div>
                <h2>
                    {this.state.admin}
                </h2>

            </div>

        )
    }
    render() {
        return (
            <div>
                <h1>Welcome Component</h1>
                <h2>Welcome dear {this.state.name}</h2>
                <h2>{JSON.stringify(this.state.product)}</h2>

                <hr />
                {this.f1()}
                DATA:{this.f2()}

            </div>
        );
    }
}

export default Welcome;