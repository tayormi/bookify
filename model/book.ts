export interface Book {
  id: number;
  name: string;
  imageUrl: string;
}

export class BookData {
  public static Books(): Book[] {
    let books: Book[] = [
      {
        id: 1,
        name: "Introduction to Deno",
        imageUrl: "http://google.com",
      },
      {
        id: 2,
        name: "Introduction to TypeScript",
        imageUrl: "http://google.com",
      },
    ];
    return books;
  }
}
