export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  //NEWSAPI
  getNews(themeInput) {
    return (fetch(` https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?` +
                  `q=${themeInput.value}&` +
                  `from=${this.options.from}&` +
                  `to=${this.options.to}&` +
                  `sortBy=publishedAt&` +
                  `apiKey=${this.options.apiKey}&` +
                  `pageSize=${this.options.pageSize}`)
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    })
    );
  }
}
