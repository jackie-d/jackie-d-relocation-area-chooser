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
    path: '/',
    name: 'Name',
    component: Name
  },
  {
    path: '/',
    name: 'Cities',
    component: Cities
  },
  {
    path: '/',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/',
    name: 'WeatherDetail',
    component: WeatherDetail
  },
  {
    path: '/',
    name: 'Flights',
    component: Flights
  },
  {
    path: '/',
    name: 'FlightsDetail',
    component: FlightsDetail
  },
  {
    path: '/',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/',
    name: 'Result',
    component: Result
  },
  {
    path: '/',
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
