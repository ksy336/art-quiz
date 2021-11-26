class DataHolder {
  constructor() {
    this.getData();
  }

  build() {}

  private async getData() {
    try {
      const photos = './assets/data.json';
      const response = await fetch(photos);
      console.log(response);
      const myData = await response.json();
      console.log(myData[0].author);
      // const myAuthor = myData[0].author;
      return myData;
    } catch (error) {
      if (error) {
        console.log('Error');
      }
    }
  }
}
export default DataHolder;
