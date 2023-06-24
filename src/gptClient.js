const apiKey = require('./apiKey');

class GptClient {
  constructor() {
    this.apiKey = apiKey;
  }

  async makeRequest(text) {
    const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
    const data = {
      prompt: text,
      max_tokens: 250
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
  
      const responseData = await response.json();
      return responseData.choices[0].text;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
}

module.exports = GptClient;