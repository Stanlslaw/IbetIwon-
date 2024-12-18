import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'bigint' })
  id: number;
  @Column({ type: 'text' })
  firstName: string;
  @Column({ type: 'text', nullable: true })
  lastname?: string;
  @Column({ type: 'bool', nullable: true })
  isPremium?: boolean;
  @Column({ type: 'text', nullable: true })
  languageCode?: string;
  @Column({ type: 'text', nullable: true })
  photoUrl?: string;
  @Column({ type: 'text', nullable: true })
  username?: string;
  @Column({ type: 'int', default: 200 })
  coinBalance: number;
}
