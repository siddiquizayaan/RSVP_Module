import { PlayerRsvp, RsvpStatus, RsvpCount } from '../models/RsvpTypes';

export const isConfirmed = (status: RsvpStatus): boolean => status === 'Yes';

export const filterByStatus = (players: PlayerRsvp[], status: RsvpStatus): PlayerRsvp[] => {
  return players.filter(player => player.status === status);
};

export const countStatuses = (players: PlayerRsvp[]): RsvpCount => {
    return players.reduce(
      (acc, player) => {
        acc.total += 1;
        acc[player.status]++;
        return acc;
      },
      { total: 0, Yes: 0, No: 0, Maybe: 0 }
    );
  };
