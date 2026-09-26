import Dexie, { type Table } from 'dexie';

export interface CareerPath {
  id?: number;
  title: string;
  description: string;
  coreInterests: string[];
  minGrade: string;
  salary: string;
}

export class BeYouDatabase extends Dexie {
  careerPaths!: Table<CareerPath>;

  constructor() {
    super('BeYouOfflineDB');
    this.version(1).stores({
      careerPaths: '++id, title' // Primary key and indexed props
    });
  }
}

export const db = new BeYouDatabase();
