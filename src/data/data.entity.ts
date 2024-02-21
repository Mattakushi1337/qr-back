import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Data {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;

    @Column()
    object: string;

    @Column()
    theme: string;

    @Column()
    executorGroup: string;

    @Column()
    description: string;

    @Column()
    fromWho: string;

    @Column()
    place: string;
}