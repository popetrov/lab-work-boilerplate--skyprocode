import './skyprocode.styl';

export class SkyProCode {
	construction(container) {
		this.container = container;

		this.render();
	}

	render() {
		this.container.textContent = '';

		const element = document.createElement('div');
		element.classList.add('code-editor');

		element.textContent = 'Компонент SkyProCode';
	}
}
