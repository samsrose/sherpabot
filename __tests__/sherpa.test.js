const askCommand = require('../src/askCommand');

class Message {
  constructor() {
    this.lastReply = '';
  }

  // Retrieve the last reply
  getLastReply() {
    return this.lastReply;
  }

  // Mock the Discord message object reply function
  reply(messageText) {
    console.log(messageText);
    this.lastReply = messageText;
  }
}

describe('100.00/Ask command', () => {

  const commandPrefix = 'test!';
  let msg;

  beforeAll(() => {
    msg = new Message();
  });

  test('100.01/valid: output files with filename suffix', async () => {
    askCommand.process(msg, commandPrefix, 'ask', [])
    expect(msg.getLastReply())
      .toMatch('https://chingu.docs.chingu.io/about/askhelp');
    expect(typeof askCommand.help()).toMatch('string');
  });

});