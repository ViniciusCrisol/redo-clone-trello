import { Router } from 'express';

import ItemController from './app/controllers/ItemController';

const routes = new Router();

routes.post('/', ItemController.create);
routes.get('/', ItemController.index);
routes.put('/:id', ItemController.update);
routes.delete('/:id', ItemController.delete);

export default routes;
