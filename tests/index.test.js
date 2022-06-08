const { clone } = require('../bin/scripts');

test('invalid url throws error', () => {
  expect(() => {
    clone('not-a-url');
  }).toThrow();
});

test('valid case does not throw an error', () => {
  expect(() => {
    clone('https://github.com/dylanplayer/quick.git');
  }).not.toThrow("Invalid URL");
});
