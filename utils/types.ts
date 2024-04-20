import { StaticImageData } from "next/image";

export type EventType = {
  id: number;
  imgUrl: StaticImageData;
  date: string;
  name: string;
  ticketUrl: string;
};

export type GalleryLinkProps = {
  heading: string;
  imgSrc: StaticImageData;
  subtext: string;
  href: string;
};

export type ReelType = {
  id: number;
  img: StaticImageData;
  views: string;
};

export type FeedType = {
  feedId: number;
  img: StaticImageData;
};

export type FeedProps = {
  position: number;
  feed: FeedType;
  handleMove: Function;
  cardSize: number;
  index: number;
};
