export class Article {
  id: number;
  image: {
    path: string;
    width: number;
    height: number;
  };
  title: string;
  author: string;
  date: string;
  likes: number;
  category: string;
  preview: string;
}