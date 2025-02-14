import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  private addresses: Address[] = [
    {
      id: 1,
      user_id: 1,
      street: 'Rua Laranjeiras',
      number: '123',
      complement: 'Apto 101',
      neighborhood: 'Laranjeiras',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zip_code: '22240-004',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  create(createAddressDto: CreateAddressDto) {
    const newAddress = {
      ...createAddressDto,
      id: this.addresses.length + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.addresses.push(newAddress);
    return newAddress;
  }

  findAll() {
    return this.addresses;
  }

  findOne(id: number) {
    return this.addresses.find(address => address.id === id);
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    const index = this.addresses.findIndex(address => address.id === id);
    if (index >= 0) {
      this.addresses[index] = {
        ...this.addresses[index],
        ...updateAddressDto,
        updatedAt: new Date()
      };
      return this.addresses[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.addresses.findIndex(address => address.id === id);
    if (index >= 0) {
      const removed = this.addresses[index];
      this.addresses.splice(index, 1);
      return removed;
    }
    return null;
  }
}