const GptClient = require('./gptClient');

class GptApp {
  constructor() {
    this.response = '';
  }

  sendRequest(text) {
    const gpt = new GptClient();
    return gpt.makeRequest(text)
      .then((gptresponse) => {
        this.response = gptresponse;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  chat(text) {
    return new Promise((resolve, reject) => {
      this.sendRequest(text)
        .then(() => {
          console.log(this.response);
          resolve(this.response);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  }
}

module.exports = GptApp;
