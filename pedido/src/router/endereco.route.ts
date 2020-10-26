import { Router } from 'express';
import enderecoController from '../controller/endereco.controller'

class EnderecoRoute {

    public router: Router;

    constructor() {
        this.router = Router();

        //Inicio as rotas de endereco
        this.init();
    }

    private init(): void {
        //Rota raíz
        this.router.route('/')
            .get(enderecoController.findAll)
            .post(enderecoController.create);

        //Reta para um registro especificado pelo ID
        this.router.route('/:id([0-9]+)')
            .get(enderecoController.findByID)
            .put(enderecoController.update)
            .delete(enderecoController.delete);
    }

}

export default new EnderecoRoute().router;