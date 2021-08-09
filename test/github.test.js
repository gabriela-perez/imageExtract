/* eslint-env jest */

const github = require('../src/github');
//const suma = require('../src/suma');

// A simple example test
describe('#getUser() using Promises', () => {
  it('should load user data', () => {
    return github.getUser('gabriela-perez')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.name).toEqual('Ela')
    })
  })
})
