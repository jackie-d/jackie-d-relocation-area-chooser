import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  name: undefined,
  cities: [
    {
      'name': 'Amsterdam',
      'accuweatherLocationId': 249758
    },
    {
      'name': 'Madrid',
      'accuweatherLocationId': 308526
    },
    {
      'name': 'Budapest',
      'accuweatherLocationId': 187423
    }
  ]
}

const actions = {
  initWeather({ commit, state }) {
    const accuweatherApiKey = process.env.VUE_APP_ACCUWEATHER_API_KEY || '';
    console.log(accuweatherApiKey);
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
  }
}

const mutations = {
  SET_FORECAST(state, payload) {
    const cities = [...state.cities];
    cities[payload.cityIndex].forecast = payload.forecast;
    state.cities = cities;
  },
  SET_NAME(state, name) {
    state.name = name;
  },
  CHOOSE_WEATHER(state, chosenCity) {
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
