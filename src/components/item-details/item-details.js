import React, {Component} from 'react';
import './item-details.css'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const RecordIt = ({label, field, item}) => {
    return (
        <li className='list-group-item'>
            <span>{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}
export {
    RecordIt
}

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }

    }

    onError = (err) => {
        console.error(`Something gone wrong ${err}`);
        this.setState({
            error: true,
            loading: false,
        })
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;
        this.setState({
            loading: true,
            error: false,
        })
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false
                })
            })
            .catch(this.onError);
    }

    render() {
        const {item, error, loading, image} = this.state;
        const {children} = this.props;

        const hasData = !(loading || error);
        const hasError = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <ItemView item={item}
                                            image={image}
                                            children={children}/> : null;

        return (
            <div className='card person-details'>
                {hasError}
                <div className='person-details-spinner'>
                    {spinner}
                </div>
                {content}
            </div>
        )
    }
}
const ItemView = ({item, image, children}) => {
    if (item.null) {
        return <span>Try this next time</span>
    }
    const {name} = item;
    return (
        <React.Fragment>
            <div className='person-details-image'>
                <img src={image} alt=""/>
            </div>
            <div className='card-body person-details-info'>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush person-details-info-details'>
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}
