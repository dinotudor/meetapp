import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'hola mundo' }));

export default routes;
