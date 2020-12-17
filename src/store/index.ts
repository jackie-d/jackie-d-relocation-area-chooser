import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import moment from 'moment';

Vue.use(Vuex)

const state = {
  name: undefined,
  cities: [
    {
      'name': 'Amsterdam',
      'accuweatherLocationId': 249758,
      'airportCode': 'AMS'
    },
    {
      'name': 'Madrid',
      'accuweatherLocationId': 308526,
      'airportCode': 'MAD'
    },
    {
      'name': 'Budapest',
      'accuweatherLocationId': 187423,
      'airportCode': 'BUD'
    }
  ]
}

const actions = {
  initWeather({ commit, state }) {
    const accuweatherApiKey = process.env.VUE_APP_ACCUWEATHER_API_KEY || '';
    for( let cityIndex in state.cities ) {
      const city = state.cities[cityIndex];
      const accuWeatherForecastUrl = 'http://dataservice.accuweather.com/currentconditions/v1/' + city.accuweatherLocationId;
      var url = new URL(accuWeatherForecastUrl);
      url.searchParams.set('apikey', accuweatherApiKey);
      axios.get( url.toString() )
      .then(response => {
        const apiData = response.data[0];
        const forecast = {
          text: apiData.WeatherText,
          iconUrl: 'https://developer.accuweather.com/sites/default/files/' + apiData.WeatherIcon + '-s.png',
          temperature: apiData.Temperature.Metric.Value + ' ' + apiData.Temperature.Metric.Unit
        }
        commit('SET_FORECAST', {cityIndex, forecast})
      })
      .catch(error => {
        alert('Network Error: API over limit or no connection');
        console.log(error);
      })
    }
  },
  initFlights({ commit, state }) {
    const tequilaApiKey = process.env.VUE_APP_TEQUILA_API_KEY || '';
    console.log('A', tequilaApiKey);
    for( let cityIndex in state.cities ) {
      const city = state.cities[cityIndex];
      const tequilaApi = 'https://tequila-api.kiwi.com/v2/search';
      const url = new URL(tequilaApi);
      const dateFormatPattern = 'DD/MM/YYYY';
      const todayDate = moment().format(dateFormatPattern);
      const tomorrowDate = moment().add(1,'days').format(dateFormatPattern);

      url.searchParams.set('fly_from', city.airportCode);
      url.searchParams.set('date_from', todayDate);
      url.searchParams.set('date_to', tomorrowDate);
      url.searchParams.set('one_for_city', '1');
      url.searchParams.set('flight_type', 'oneway');
      url.searchParams.set('locale', 'en');
      url.searchParams.set('curr', 'EUR');
      url.searchParams.set('sort', 'price');
      const axiosConfig = {
        headers: {
          'apikey': tequilaApiKey
        }
      };
      axios.get( url.toString(), axiosConfig )
      .then(response => {
        const apiData = response.data.data;
        console.log(apiData);
        const flights = apiData.map(flight => ({
          to: flight.cityTo+', '+flight.countryTo.name,
          price: flight.price,
          time: moment(flight.local_departure).format('DD MMM HH:mm'),
          duration: moment(flight.duration.total * 1000).format('HH:mm')
        }));
        console.log(flights);
        commit('SET_FLIGHTS', {cityIndex, flights})
      })
      .catch(error => {
        alert('Network Error: API over limit or no connection');
        console.log(error);
      })
    }
  }
}

const mutations = {
  SET_NAME(state, name) {
    state.name = name;
  },
  SET_FORECAST(state, payload) {
    const cities = [...state.cities];
    cities[payload.cityIndex].forecast = payload.forecast;
    state.cities = cities;
  },
  SET_FLIGHTS(state, payload) {
    const cities = [...state.cities];
    cities[payload.cityIndex].flights = payload.flights;
    state.cities = cities;
  },
  CHOOSE_WEATHER(state, chosenCity) {
    state.chosenCity = chosenCity;
  },
  CHOOSE_FLIGHTS(state, chosenCity) {
    state.chosenCity = chosenCity;
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: {
  }
})
