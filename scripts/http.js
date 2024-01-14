export default class HttpClient {
  #url = '';

  constructor(url) {
    this.#url = url;
  }

  async get() {
    try {
      const response = await fetch(this.#url);

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Ett fel uppstod i get metoden: ${error}`);
    }
  }

  async add(data) {
    console.log(data);
    try {
      const response = await fetch(this.#url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(response);
        return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Ett fel uppstod i add metoden: ${error}`);
    }
  }

  async delete(data) {}
  async update(data) {}
}
