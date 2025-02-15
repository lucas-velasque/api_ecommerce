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
    type: DataType.TEXT,
    allowNull: true
  })
  description: string;

  @Column({
    type: DataType.DECIMAL(10,2),
    allowNull: false
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  stock: number;

  @Column({
    type: DataType.INTEGER,
    field: 'category_id',
    allowNull: false
  })
  category_id: number; // Alterado para corresponder ao nome da coluna no banco
}