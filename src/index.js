import { SkyProCode } from './components/skyproCode/skyprocode';

import './index.styl';
import * as monaco from 'monaco-editor';

monaco.editor.create(document.querySelector('.app'), {
	value: ['const pasha = ', '"I like Skypro"', ''].join(''),
	language: 'javascript',
});

const app = document.querySelector('.app');

const skyprocode = new SkyProCode(app);
