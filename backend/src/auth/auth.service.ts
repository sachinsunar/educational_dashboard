import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schemas';
import { Model } from 'mongoose';
import { SignUpDto } from './dtos/signup.dto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  //for registering user
  async signup(signUpData: SignUpDto) {
    const { email, name, password } = signUpData;

    //chech email exist or not
    const checkEmail = await this.UserModel.findOne({ email });

    if (checkEmail) {
      throw new BadRequestException('Email already in use');
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create user document and save in mongodb
    const user = await this.UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return { success: true, message: 'User Registered Successfully' };
  }

  //for login
  async login(loginData: LoginDto) {
    const { email, password } = loginData;

    const user = await this.UserModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('No User Found !!! Create New Account');
    }

    //comparing passoword
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Wrong Credentials');
    }

    //generate token
    return this.generateUserToken(user._id);
  }

  async generateUserToken(userId: any) {
    const accessToken = this.jwtService.sign({ userId }, { expiresIn: '1h' });

    return { success: true, message: 'Login Successful', accessToken };
  }
}
