export interface Experience {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  pricePerPerson: number;
  slots?: Slot[];
}

export interface Slot {
  id: number;
  experienceId: number;
  date: string;
  time: string;
  capacity: number;
  bookedCount: number;
}
