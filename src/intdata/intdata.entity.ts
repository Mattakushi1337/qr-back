import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class IntData {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    category: string;

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

    @Column()
    qr: number;

    @Column()
    cmdb: number;

    @Column()
    qr2: number;

    @Column()
    itsm: number;
}