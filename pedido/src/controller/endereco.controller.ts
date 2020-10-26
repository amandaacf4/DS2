import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { EnderecoEntity } from "../entity/endereco.entity";

class EnderecoController {
    
    public async findAll(req: Request, res: Response) {

        try {

            const enderecos: EnderecoEntity[] = await getRepository(EnderecoEntity).find();
            res.send(enderecos);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {

        const endereco = req.body;

        try {

            await getRepository(EnderecoEntity).save( endereco );
            res.status(201).send(endereco);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async findByID(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar o registro pela ID
            const endereco = await getRepository(EnderecoEntity).findOne(id);

            //Se não encontrar o endereco, devolve erro 404
            if (endereco) {
                res.send(endereco);    
            } else {
                res.status(404).send({message: 'Record not found'})
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Buscar o registro pela ID
            const endereco = await getRepository(EnderecoEntity).findOne(id);

            //Se não encontrar o endereco, devolve erro 404
            if (endereco) {
                //Atualizar o registro
                await getRepository(EnderecoEntity).update(endereco.id, novo);

                //Atualiza o ID do objeto novo
                novo.id = endereco.id;
                
                res.send(novo);

            } else {
                res.status(404).send({message: 'Record not found'})
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar o registro pela ID
            const endereco = await getRepository(EnderecoEntity).findOne(id);

            //Se não exnotrar o endereco, devolve erro 404
            if (endereco) {
                //Excluir o registro
                await getRepository(EnderecoEntity).delete(endereco);

                res.status(204).send();

            } else {
                res.status(404).send({message: 'Record not found'})
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new EnderecoController();