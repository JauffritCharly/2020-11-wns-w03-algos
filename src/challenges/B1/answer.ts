/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on 
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 * 
 * Dans ce défi, vous devez trier les événements chronologiquement (du plus ancien au plus récent) 
 * en fonction de leur propriété "startDatetime". Si certains événements ont la même "startDatetime", 
 * alors le plus court doit apparaître en premier.
 * 
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ events }: { events: EventDatetime[] }): EventDatetime[] {
    return events.sort((a, b) => {
      const startDatetimeComparaison = a.startDatetime.localeCompare(b.startDatetime);
  
      if (startDatetimeComparaison === 0) {
        const durationA = new Date(a.endDatetime).getTime() - new Date(a.startDatetime).getTime();
        const durationB = new Date(b.endDatetime).getTime() - new Date(b.startDatetime).getTime();
  
        return durationA - durationB;
      }

      return startDatetimeComparaison;
    });
  }


// used interfaces, do not touch
export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}