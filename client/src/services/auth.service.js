import http from '../helpers/httpCommon'

const AuthService = {
    async signIn (phone, password) {
        try {
            const response = await http.post('auth/signin', { phone, password })
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data
        } catch (error) {
            console.log(error)
        }
    },
    signOut () {
        localStorage.removeItem('user')
    },
    signUp (name, phone, password) {
        return http.post('auth/signup', {
            name,
            phone,
            password
        })
    }
}
export default AuthService