
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

  getImage(max: any) {
    return Math.floor(Math.random() * max);
  }

  getUniqueValuesFromArray(arr: any) {
    let result: string | any[] = [];

    for(let val of arr) {
      if(!result.includes(val)) {
        result.push(val);
      }
    }
    return result;
  }

  getUniqueAuthors(str: string)  {

  }
  async getData() {
    try {
      const photos = './assets/data.json';
      const response = await fetch(photos);
      // console.log(response);
      const myData = await response.json();
      console.log(myData);
      const allAuthors = [...myData].map((item) => item.author);
      const authors = this.getUniqueValuesFromArray(allAuthors);
      const randomAuthors = this.getImage(authors.length);
      console.log(randomAuthors);
       console.log(authors);
      const correctAuthor = [`${randomAuthors}, ${randomAuthors}, ${randomAuthors}`];
      // console.log(correctAuthor);
      // Images
      const portraitImages = [...myData]
        .slice(0, 10)
        .map((item) => item.imageNum)
        .map((item) => {
          const img = new Image();
          img.src = `./assets/full/${item}full.jpg`;
          return img.currentSrc;
          // img.classList.add("img__for__pictures");
          // document.body.textContent = `img.currentSrc`;
          // return  document.body.append(img);
          }
        );
      console.log(portraitImages);

     //  const img = new Image();
     // // const pic = this.getImage(240);
     //  img.src = `./assets/full/${imageNum}.jpg`;
     //  img.classList.add("img__for__pictures");
     //  document.body.append(img);
     //  console.log(img);
      return myData;
    } catch (error) {
      if (error) {
        console.log('Error');
      }
    }
  }
}
export default DataHolder;
