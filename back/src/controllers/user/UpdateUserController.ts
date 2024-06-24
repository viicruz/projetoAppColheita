import {Request,Response} from 'express';
import {UpdateUserService} from '../../services/user/UpdateUserService';


class UpdateUserController{

    async handle(req:Request,res:Response){

        const {id,username,email,phone,password} = req.body;

        const updateUserService = new UpdateUserService();
        const user = await updateUserService.execute({id,username,email,phone,password});

        return res.json(user);
    }
}

export{UpdateUserController}

