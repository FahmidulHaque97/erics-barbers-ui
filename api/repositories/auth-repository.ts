import { AuthService } from "../generated/services/AuthService";

export class AuthRepository {
    public async registerUser(email: string, password: string) {
        return await AuthService.authControllerRegister({
            email,
            password
        });
    }

    public async verifyEmail() {
        return await AuthService.authControllerVerifyEmail();
    }

    public async loginUser(email: string, password: string) {
        return await AuthService.authControllerLogin({
            email,
            password
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
            newPassword
        });
    }
}