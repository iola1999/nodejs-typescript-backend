import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("toolUser") // 表名
export class ToolUser {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    password_hash: string;
}
