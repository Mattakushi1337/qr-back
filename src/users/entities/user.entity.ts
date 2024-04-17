import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fio: string;

    @Column()
    it: boolean;

    @Column()
    asutp: boolean;

    @Column()
    aho: boolean;

    @Column()
    imei: string;
}