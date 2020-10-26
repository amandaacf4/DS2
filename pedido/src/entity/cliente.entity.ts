import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EnderecoEntity } from "./endereco.entity";
import { TabelaPrecoEntity } from "./tabelapreco.entity";

@Entity({name: 'cliente'})
export class ClienteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 6})
    codigo: string;

    @Column({nullable: false, length: 50})
    nome: string;

    @Column({nullable: false, length: 50})
    telefone: string;

    @ManyToOne( type => TabelaPrecoEntity, {eager: true, nullable: true})
    tabelapreco: TabelaPrecoEntity;

    @ManyToOne( type => EnderecoEntity, {eager: true, nullable: false})
    endereco: EnderecoEntity;
}