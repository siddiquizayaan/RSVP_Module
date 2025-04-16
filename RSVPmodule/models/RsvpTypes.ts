export type RsvpStatus = 'Yes' | 'No' | 'Maybe';

export interface PlayerRsvp {
  playerId: string;
  name: string;
  status: RsvpStatus;
  eventId: string;
}

export interface RsvpCount {
  total: number;
  Yes: number;
  No: number;
  Maybe: number;
}