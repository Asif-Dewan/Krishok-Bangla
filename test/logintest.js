let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should();
let app = require('../app')
chai.use(chaiHttp)
 

//    Test the /GET route for Farmer and dealer Login

describe('Success, test for Login Page', () => {
    it('it should return status code 200 with a webpage', (done) => {
 
        chai.request(app)
            .get('/auth/login')
            .end((err, res) => {
                res.should.have.status(200)
                return done()
            })
    })
})


//   This test case is for Login post.It will return 200 status success if user's credentials are valid

 describe('Success, test for valid credentials', () => {
 
    it('it should return status code 200 success code', (done) => {
        let data = { email: 'mahi@gmail.com', password: '123456' }
        chai.request(app)
            .post('/auth/login')
            .send(data)
            .end((err, res) => {
                res.should.have.status(200)
                return done()
            })
    })
})
 

//   This test case is for Login post.It will return 404 status error if user's credentials are invalid

describe('Failed, test for invalid credentials', () => {
 
    it('it should return status code 404 error code', (done) => {
        let data = { email: 'abc@gmail.com', password: '56784642' }
        chai.request(app)
            .post('/auth/login')
            .send(data)
            .end((err, res) => {
                res.should.have.status(404)
                return done()
            })
    })
})
 
