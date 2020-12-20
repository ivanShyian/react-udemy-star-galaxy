import React, {Component} from 'react';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false
        }
        style = {
            spinner: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#303030'
            }
        }

        update() {
            this.setState({
                loading: true,
                error: false
            });
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    });
                })
                .catch((err) => {
                    console.error(`Something gone wrong ${err}`)
                    this.setState({
                        error: true,
                        loading: false
                    });
                });
        }

        componentDidMount() {
            this.update();
        }

        render() {
            const {data, loading, error} = this.state;

            if (loading) {
                return (
                    <div className="item-list list-group"
                         style={this.style.spinner}>
                        <Spinner/>
                    </div>
                )
            }
            if (error) {
                return <ErrorIndicator/>
            }
            return (
                <View {...this.props} data={data}/>
            )
        }
    }
}

export {
    withData
};