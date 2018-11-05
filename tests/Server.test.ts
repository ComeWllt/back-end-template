import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
import Server from '../src/Server';

const app = Server.bootstrap().app;

describe('Server', () => {
  describe('Get / endpoint', () => {
    it('should return "Hello, World!"', async () => {
      const result = await chai.request(app).get('/');
      expect(result.text).to.be.equal('Hello, World!');
    });
  });
});
