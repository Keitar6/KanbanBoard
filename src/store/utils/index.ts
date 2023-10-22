import {
  Card,
  List,
  SubCard,
} from "@store/reducers/user_slice/user_slice.types";

export const emptySubCardList: SubCard[] = [];
export const emptyCardList: Card[] = [];

export const emptyLists: List[] = [
  {
    id: "",
    name: "",
    cards: emptyCardList,
  },
];
