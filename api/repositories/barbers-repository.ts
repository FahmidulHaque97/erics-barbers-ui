import { BarbersService } from '../generated/services/BarbersService';

export class BarbersRepository {
  public async barbersControllerGetBarbers() {
    return await BarbersService.barbersControllerGetBarbers();
  }

  public async barbersControllerCreateBarber() {
    return await BarbersService.barbersControllerCreateBarber();
  }

  public async barbersControllerGetBarberDetails() {
    return await BarbersService.barbersControllerGetBarberDetails();
  }

  public async barbersControllerUpdateBarber() {
    return await BarbersService.barbersControllerUpdateBarber();
  }

  public async barbersControllerDeleteBarber() {
    return await BarbersService.barbersControllerDeleteBarber();
  }
}
