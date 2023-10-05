import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Kalini',
        email: 'kalininha@teste.com',
        password: 'cafezinho12345',
        passwordConfirmation: 'cafezinho12345'
      })
      .expect(200)
  })
})
