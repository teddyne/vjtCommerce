import http from '../helpers/httpCommon'

const AuthService = {
    async signIn (email, password) {
        const response = await http.post('auth/signin', { email, password })
        if (response.data.accessToken) {
             localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
    },
    signOut () {
        localStorage.removeItem('user')
    },
    signUp (email, password) {
        return http.post('auth/signup', {
            email,
            password
        })
    }
}
export default AuthService