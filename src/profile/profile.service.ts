import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>
  ) {}

  async create(createProfileDto: CreateProfileDto) {
    const profile = new Profile();
    profile.name = createProfileDto.name;
    profile.age = createProfileDto.age;
    profile.bio = createProfileDto.bio;
    profile.gender = createProfileDto.gender;
    profile.country = createProfileDto.country;
    profile.location = createProfileDto.location;
    profile.profilePicture = createProfileDto.profilePicture;
    profile.pronounces = createProfileDto.pronounces;
    await this.profileRepository.insert(profile);
  }

  async findAll() {
    return await this.profileRepository.find();
  }

  async findOne(id: number) {
    return await this.profileRepository.findOneBy({
      id: id,
    });
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    await this.profileRepository.update({
      id: id,
    }, {
      name: updateProfileDto.name,
      age: updateProfileDto.age,
      bio: updateProfileDto.bio,
      gender: updateProfileDto.gender,
      country: updateProfileDto.country,
      location: updateProfileDto.location,
      profilePicture: updateProfileDto.profilePicture,
      pronounces: updateProfileDto.pronounces,
    });
  }

  async remove(id: number) {
    return await this.profileRepository.delete({
      id: id,
    });
  }
}
