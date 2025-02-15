import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address)
    private readonly addressModel: typeof Address,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    return await this.addressModel.create({ ...createAddressDto });
  }

  async findAll() {
    return await this.addressModel.findAll();
  }

  async findOne(id: number) {
    return await this.addressModel.findByPk(id);
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    const address = await this.addressModel.findByPk(id);
    if (!address) {
      return null;
    }
    return await address.update(updateAddressDto);
  }

  async remove(id: number) {
    const address = await this.addressModel.findByPk(id);
    if (!address) {
      return null;
    }
    await address.destroy();
    return address;
  }
}