import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
@Entity()
@Unique(['id'])
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    address: string;
    @Column()
    phone: number;
}