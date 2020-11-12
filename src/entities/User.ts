import { BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from "bcrypt";

const saltRound =10;


@Entity()
class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "text", nullable: true})
    email: string;

    @Column({type: "text", nullable: true})
    name: string;
    
    @Column({type: "text", nullable: true})
    password: string;
    
    @Column({type: "text", nullable: true})
    token: string;
    
    @Column({type: "text", nullable: true})
    modelName: string;
    
    @Column({type: "text", nullable: true})
    schoolName: string;
    
    @Column({type: "text", nullable: true})
    dept: string;
    
    @Column({type: "text", nullable: true})
    phone: string;

    @BeforeInsert()
    async savePassword(): Promise<void>{
        if(this.password){
            const hashedPassword = await this.hashPassword(this.password);
            this.password = hashedPassword;
        }
    }

    hashPassword(password: string): Promise<string>{
        return bcrypt.hash(password, saltRound);
    }

    comparePassword(password: string): Promise<boolean>{
        return bcrypt.compare(password, this.password);
    }
}

export default User;