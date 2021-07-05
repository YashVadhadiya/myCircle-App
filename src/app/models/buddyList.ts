import { Buddy } from './buddy';

export class BuddyList {
  buddyList: Array<Buddy>;
  total: number;
  page: number;
  limit: number;
  offset: number;

  constructor(
    buddyInfo: {
      id: string;
      title: string;
      firstName: string;
      lastName: string;
      email: string;
      picture: string;
    }[],
    total,
    page,
    limit,
    offset
  ) {
    this.buddyList = buddyInfo;
    this.total = total;
    this.page = page;
    this.limit = limit;
    this.offset = offset;
  }
}
