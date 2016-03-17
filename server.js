import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import { routes } from './app/routes.js';

const app = express();

app.use(express.static('./app/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.get('*', (req, res) => {
	match({ routes, location: req.url }, (err, redirectLocation, props) => {
		if (err) {
			res.status(500).send(err.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (props) {
			const markup = renderToString(<RouterContext {...props} />);

			res.render('index', { markup });
		} else {
			res.sendStatus(404);
		}
	});
});

app.listen(3000, () => console.log('running on port 3000'));