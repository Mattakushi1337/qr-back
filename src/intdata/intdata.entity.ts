import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class IntData {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    intNumber: number;

    @Column()
    place: string;

    @Column()
    model: string;

    @Column()
    serialNumber: number;

    @Column()
    description: string;

    @Column()
    inDate: string;

    @Column()
    check: number;
}