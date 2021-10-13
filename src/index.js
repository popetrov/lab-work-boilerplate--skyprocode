import { SkyProCode } from './components/skyproCode/skyprocode';
import './index.styl';
import Vue from 'vue';
import App from './App.vue';
import vueCodeditor from 'vue-codeditor';

Vue.component(vueCodeditor);

const app = document.querySelector('.app');

const skyprocode = new SkyProCode(app);
