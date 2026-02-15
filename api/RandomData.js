const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

class RandomData {
  constructor() {
      this.messages = [];
  }

  getDate() {
    const formatter = new Intl.DateTimeFormat("ru", {
      timeZone: "Europe/Moscow",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    return formatter.format(new Date());
  }

  getMessage() {
    return {
      id: uuidv4(),
      from: faker.internet.email(),
      subject: `Hello from ${faker.name.findName()}`,
      body: `${faker.random.words(Math.floor(Math.random() * 30))}`,
      received: Date.now(),
    }
  }

  generate() {
    this.messages = [];
    const random = Math.floor(Math.random() * 5)
  
    while (this.messages.length < random) {
      this.messages.push(this.getMessage());
    }

    return {
      status: 'ok',
      timestamp: Date.now(),
      messages: this.messages,
    }
  }
}

module.exports = RandomData;
