import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    fio: string;

    @Column()
    it: string;

    @Column()
    asutp: string;

    @Column()
    aho: string;

    @Column()
    imei: string;
}