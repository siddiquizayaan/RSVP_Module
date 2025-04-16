import { RsvpService } from './services/RsvpServices';
import { PlayerRsvp } from './models/RsvpTypes';


const initialPlayers: PlayerRsvp[] = [
  { playerId: '1', name: 'Alice', status: 'Yes', eventId: 'eventA' },
  { playerId: '2', name: 'Bob', status: 'No', eventId: 'eventA' },
  { playerId: '3', name: 'Charlie', status: 'Maybe', eventId: 'eventA' },
  { playerId: '4', name: 'Dana', status: 'Yes', eventId: 'eventA' },
  { playerId: '5', name: 'Eve', status: 'Maybe', eventId: 'eventB' },
  { playerId: '6', name: 'Frank', status: 'Yes', eventId: 'eventB' },
];

const rsvpService = new RsvpService(initialPlayers);

const printEventRsvps = (eventId: string) => {
  console.log(`\n📅 Event: ${eventId}`);
  console.log('✅ Confirmed:', rsvpService.getConfirmedAttendees(eventId).map(p => p.name));
  console.log('❌ Declined:', rsvpService.getDeclinedAttendees(eventId).map(p => p.name));
  console.log('🤔 Maybe:', rsvpService.getMaybeAttendees(eventId).map(p => p.name));
  console.log('📊 RSVP Counts:', rsvpService.getRsvpCounts(eventId));
};

printEventRsvps('eventA');
printEventRsvps('eventB');
