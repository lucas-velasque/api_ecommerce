import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'Products'
})
export class Product extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @Column({
    type: DataType.TEXT
  })
  description: string;

  @Column({
    type: DataType.DECIMAL(10,2)
  })
  price: number;

  @Column({
    type: DataType.INTEGER
  })
  stock: number;

  @Column({
    type: DataType.INTEGER,
    field: 'category_id'
  })
  categoryId: number;
}