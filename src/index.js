import React from 'react';import ReactDOM from 'react-dom';import 'bootstrap/dist/css/bootstrap.css';import './index.css';import App from './App';import {axios} from "axios";axios.interceptors.request.use(function(config) {    config.headers.Authorization = `Basic ${'czRoX3V4OmNvbXBhc3MwMA=='}`;    config.withCredentials = true;    return config;});ReactDOM.render(<App />, document.getElementById('root'));