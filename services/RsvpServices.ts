import { PlayerRsvp, RsvpStatus, RsvpCount} from '../models/RsvpTypes';
import { countStatuses, filterByStatus } from '../utils/RsvpUtils';

export class RsvpService {
  private eventMap: Map<string, Map<string, PlayerRsvp>>;

  constructor(initialPlayers: PlayerRsvp[] = []) {
    this.eventMap = new Map();

    initialPlayers.forEach((player) => {
      this.addOrUpdateRsvp(player);
    });
  }

  addOrUpdateRsvp(player: PlayerRsvp): void {
    if (!this.eventMap.has(player.eventId)) {
      this.eventMap.set(player.eventId, new Map());
    }
    this.eventMap.get(player.eventId)!.set(player.playerId, player);
  }

  getAllRsvps(eventId: string): PlayerRsvp[] {
    return Array.from(this.eventMap.get(eventId)?.values() || []);
  }

  getRsvpCounts(eventId: string) {
    return countStatuses(this.getAllRsvps(eventId));
  }

  getAttendeesByStatus(eventId: string, status: RsvpStatus): PlayerRsvp[] {
    return filterByStatus(this.getAllRsvps(eventId), status);
  }

  getConfirmedAttendees(eventId: string): PlayerRsvp[] {
    return this.getAttendeesByStatus(eventId, 'Yes');
  }

  getDeclinedAttendees(eventId: string): PlayerRsvp[] {
    return this.getAttendeesByStatus(eventId, 'No');
  }

  getMaybeAttendees(eventId: string): PlayerRsvp[] {
    return this.getAttendeesByStatus(eventId, 'Maybe');
  }
}
