import { AppComponent } from './components/app-component.js';
import { IndexComponent } from './components/pages/index-component.js';
import { AboutComponent } from './components/pages/about-component.js';

export const routes = {
	path: '',
	component: AppComponent,
	childRoutes: [
		{
			path: '/',
			component: IndexComponent
		},{
			path: '/about',
			component: AboutComponent
		}
	]
};