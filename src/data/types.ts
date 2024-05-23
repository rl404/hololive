export type Talent = {
  id: string;
  name: string;
  startDate: Date;
  endDate?: Date;
  birthdayDate?: Date;
  events: Event[];
  subscribers: Subscriber[];
  bgColor?: string;
};

export type Group = {
  id: string;
  type: GroupType;
  name: string;
  startDate: Date;
  endDate?: Date;
  talents: Talent[];
  groups: Group[];
  events: Event[];
  badgeColor?: string;
  bgColor?: string;
  borderColor?: string;
};

export type GroupType =
  | "INDIE"
  | "COMPANY"
  | "AGENCY"
  | "GROUP"
  | "BRANCH"
  | "GEN";

export type Event = {
  id: string;
  type: EventType;
  name: string;
  description: string;
  date: Date;
};

export type EventType = "DEBUT" | "RETIREMENT" | "ACHIEVEMENT" | "OTHER";

export const EventColor: { [type in EventType]: string } = {
  DEBUT: "bg-green-500 hover:bg-green-400",
  RETIREMENT: "bg-red-500 hover:bg-red-400",
  ACHIEVEMENT: "bg-yellow-500 hover:bg-yellow-400",
  OTHER: "bg-gray-400 hover:bg-gray-300",
};

export const EventString: { [type in EventType]: string } = {
  DEBUT: "Debut",
  RETIREMENT: "Retirement",
  ACHIEVEMENT: "Achivement",
  OTHER: "Other",
};

export type Subscriber = {
  subscriber: number;
  date: Date;
};
