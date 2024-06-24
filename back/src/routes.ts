import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import {AuthUserController} from './controllers/user/AuthUserController'
import { isAuthenticated } from './middlewares/idAuthenticated';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { UpdateProductController } from './controllers/product/UpdateProductController';
import { CreateCollaboratorController } from './controllers/collaborator/CreateCollaboratorController';
import { UpdateCollaboratorController } from './controllers/collaborator/UpdateCollaboratorController';
import { ModifyStatusController } from './controllers/collaborator/ModifyStatusController';
import { DeleteProductionController } from './controllers/production/DeleteProductionController';

import { CreateProductionController } from './controllers/production/CreateProductionController';
import { UpdateProductionController } from './controllers/production/UpdateProductionController';
import { DeleteCollaboratorController } from './controllers/collaborator/DeleteCollaboratorController';
import { SearchCepController } from './controllers/collaborator/SearchCepController';

const router = Router();



/// ---- Usuario --- ///
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo',isAuthenticated,new DetailUserController().handle);
router.put('/updateuser',isAuthenticated, new UpdateUserController().handle);


/// --- Colaborador --- ///

router.post('/colaborator', isAuthenticated, new CreateCollaboratorController().handle);
router.put('/updatecollaborator',isAuthenticated, new UpdateCollaboratorController().handle);
router.put('/modifystatus',isAuthenticated, new ModifyStatusController().handle);
router.delete('/delete',isAuthenticated,new DeleteCollaboratorController().handle);
router.get('/busca',new SearchCepController().handle);


/// --- Produto ---///

router.post('/product',isAuthenticated, new CreateProductController().handle);
router.put('/updateproduct',isAuthenticated, new UpdateProductController().handle);

/// --- Produção ---///

router.post('/production', isAuthenticated, new CreateProductionController().handle);
router.delete('/deleteproduction', isAuthenticated, new DeleteProductionController().handle);
router.put('/updateproduction',isAuthenticated, new UpdateProductionController().handle);

export{router};
