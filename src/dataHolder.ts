
interface IApplicationData {
  categories: Array<ICategoryData>;
}

interface ICategoryData {
  name: string;
  pictures: Array<IImageData>;
}

interface IImageData {
  author: string;
  name: string;
  year: number;
  imageNum?: string;
  category?: string;
}

export class ImagePictures implements IImageData {
  public author: string;
  public name: string;
  public year: number;
  public imageNum: string;
  public category: string;

  constructor(author: string, name: string, year: number, imageNum?: string, category?: string) {
    this.author = author;
    this.year = year;
    if(imageNum) {
      this.imageNum = imageNum;
    } else {
      this.imageNum = `${0}`;
    }
  }
}
class DataHolder {

  constructor() {
    this.getData();
  }

  build() {}

  getImage(max: number) {
    return Math.floor(Math.random() * max);
  }

  async getData() {
    try {
      const photos = './assets/data.json';
      const response = await fetch(photos);
      console.log(response);
      const myData = await response.json();
      console.log(myData);
      //document.body.append(myAuthor);
      const img = new Image();
      const pic = this.getImage(240);
      img.src = `./assets/full/${pic}full.jpg`;
      img.classList.add("img__for__pictures");
      document.body.append(img);
      const myAuthor = myData[0].author;
      console.log(img);
      // const categories:Array<string> = myData[0];
      // const categoryRecords: Array<{
      //   author: string;
      //   name: string;
      //   year: number;
      //   imageNum?: number;
      //   category?: string;
      // }> = myData.slice(1);
      return myData;
    } catch (error) {
      if (error) {
        console.log('Error');
      }
    }
  }
}
export default DataHolder;
