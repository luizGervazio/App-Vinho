import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('wines')
export class Wine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  producer: string;

  // @Column()
  // photoUrl: string;

  @Column()
  type: string;

  @Column()
  year: number;

  @Column()
  country: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number;

  @Column()
  grapeType: string;

  @Column('float')
  alcoholPercentage: number;

  @Column('text')
  description: string;
}
