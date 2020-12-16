import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Name from '../views/Name.vue'
import Cities from '../views/Cities.vue'
import Weather from '../views/Weather.vue'
import WeatherDetail from '../views/WeatherDetail.vue'
import Flights from '../views/Flights.vue'
import FlightsDetail from '../views/FlightsDetail.vue'
import Resume from '../views/Resume.vue'
import Result from '../views/Result.vue'
import History from '../views/History.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/name',
    name: 'Name',
    component: Name
  },
  {
    path: '/cities',
    name: 'Cities',
    component: Cities
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/weather-detail',
    name: 'WeatherDetail',
    component: WeatherDetail
  },
  {
    path: '/flights',
    name: 'Flights',
    component: Flights
  },
  {
    path: '/flights-detail',
    name: 'FlightsDetail',
    component: FlightsDetail
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
  {
    path: '/history',
    name: 'History',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
