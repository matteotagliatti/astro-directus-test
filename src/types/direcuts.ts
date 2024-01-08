interface HomeCollection {
  title: string;
  description: string;
}

interface PostsCollection {
  id: number;
  title: string;
  body: string;
}

interface MySchema {
  home: HomeCollection;
  posts: PostsCollection[];
}
