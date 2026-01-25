import { AuthService } from '../generated/services/AuthService';

export default class AuthRepository {
  public async registerUser(email: string, password: string) {
    try {
      const result = await AuthService.authControllerRegister({
        email,
        password,
      });
      return result;
    } catch (error) {
      console.log('Registration error:', error);
      throw error;
    }
  }

  public async verifyEmail() {
    return await AuthService.authControllerVerifyEmail();
  }

  public async loginUser(email: string, password: string) {
    return await AuthService.authControllerLogin({
      email,
      password,
    });
  }

  public async getProfile() {
    return await AuthService.authControllerGetProfile();
  }

  public async updateProfile() {
    return await AuthService.authControllerUpdateProfile();
  }

  public async logoutUser() {
    return await AuthService.authControllerLogout({});
  }

  public async resetPasswordEmail() {
    return await AuthService.authControllerResetPasswordEmail();
  }

  public async resetPassword(token: string, newPassword: string) {
    return await AuthService.authControllerResetPassword({
      token,
      newPassword,
    });
  }
}
