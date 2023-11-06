/**
 * In this challenge, you have to get all the categories from the events. The categories 
 * must be unique and sorted from A to Z.
 * 
 * @param events List of events with their categories
 * @returns All existing categories sorted alphabatically without duplicates (A to Z)
 */
// Dans ce défi, vous devez obtenir toutes les catégories à partir des événements. 
// Les catégories doivent être uniques et triées de A à Z.

// @param events Liste d'événements avec leurs catégories
// @retourne Toutes les catégories existantes triées par ordre alphabétique sans doublons (de A à Z)

// ↓ uncomment bellow lines and add your response!

export default function ({ events }: { events: EventWithCategory[] }): string[] {
    const uniqueCategory = new Set<string>();
    events.forEach((event) => {
        event.categories.forEach((category) => {
            uniqueCategory.add(category)
        });
    });

const sortedCategories = Array.from(uniqueCategory).sort();

return sortedCategories;

}


// used interfaces, do not touch
export interface EventWithCategory {
startDatetime: string;
endDatetime: string;
event: string;
categories: string[];
}
