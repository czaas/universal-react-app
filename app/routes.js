import { AppComponent } from './components/app-component.js';
import { IndexComponent } from './components/pages/index-component.js';
import { AboutComponent } from './components/pages/about-component.js';
import { ContactComponent } from './components/pages/contact-component.js';
import { NotFoundComponent } from './components/pages/not-found-component.js';

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
		},{
			path: '/contact',
			component: ContactComponent
		},{
			path: '*',
			component: NotFoundComponent
		}
	]
};