export type Category = 'Law' | 'Sub-Decree' | 'Prakas' | 'Royal Decree';

export interface LegalDocument {
  id: string;
  titleEn: string;
  titleKh: string;
  category: Category;
  year: number;
  date: string;
  referenceNumber: string;
  abstract: string;
  languages: ('EN' | 'KH')[];
}
