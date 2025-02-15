import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'Addresses'
})

export class Address extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    field: 'user_id'
  })
  user_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  street: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  complement: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  neighborhood: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  city: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  state: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  zip_code: string;

}