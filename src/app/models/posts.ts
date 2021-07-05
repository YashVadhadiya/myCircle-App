export class Post {
  owner: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    picture: string;
  };
  id: string;
  image: string;
  publishDate: string;
  text: string;
  tags: string[];
  link: string;
  likes: number;
}
