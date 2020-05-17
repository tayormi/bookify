import { BookData } from "../model/book.ts";

export const getBooks = ({response} : {response: any}) => {
    response.body = BookData.Books();
}