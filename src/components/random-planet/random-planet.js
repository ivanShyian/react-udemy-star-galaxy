import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './random-planet.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {
    // Компонент отвечающий за данные
    swapiService = new SwapiService();
    static defaultProps = {
        updateInterval: 10000
    }
    static propTypes = {
        updateInterval: PropTypes.number
    }
    // Состояние
    state = {
        planet: null, /*Параметр отвечающий за нашу планету*/
        loading: true, /*Параметр отвечающий за спинер*/
        error: false /*Параметр отвечающий за вывод ошибки*/
    };
    // Инициализируем загрузку
    componentDidMount() {
        const {updateInterval} = this.props;
        this.updatePlanet(); /*1 - Обращаемся к update func*/
        this.interval = setInterval(this.updatePlanet, updateInterval) /*1.1 - Создаем интервал update*/
    }
    // Завершаем работу
    componentWillUnmount() {
        clearInterval(this.interval); // Останавливаем интервал
    }

    /* 3 - Planet хранит данные планеты */
    onPlanetLoaded = (planet) => {
        this.setState({ /*3.1 - Обновляем state*/
            planet,
            loading: false /* 3.2 - Вписываем loading в состояние, также как и в state*/
        });
    }
    /* 4 - Отлавливаем ошибку */
    onError = (err) => {
        console.error(`Something gone wrong ${err}`) /* 4.1 - Передаем ошибку в лог */
        this.setState({
            error: true,
            loading: false
        })
    }
    /*2 - Функция обновления*/
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3; /*2.1 - Получаем random id*/
        this.swapiService /*2.2 - Запускаем fetch*/
            .getPlanet(id) /*2.3 - Передаем id в swapi func*/
            .then(this.onPlanetLoaded) /*2.4 - Передаем данные в onPlanetLoad*/
            .catch(this.onError) /*2.5 - Отлавливаем ошибку в onError*/
    }

    render() {
        const {planet, loading, error} = this.state;
        // Логика отображения
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className='card random-planet'>
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}
const PlanetView = ({planet}) => {
    // Компонент отвечающий за DOM
    const {id, name, population, rotationPeriod, diameter} = planet;
    return (
        <React.Fragment>
            <div className='random-planet-image'>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            </div>
            <div className='card-body random-planet-info'>
                <h3>{name}</h3>
                <ul className='list-group list-group-flush random-planet-info-details'>
                    <li className='list-group-item'>
                        <span>Population</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Rotation period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

