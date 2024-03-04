import { create } from 'zustand'

type UpdateAmenityFunc = (property: string, value: boolean) => void
type UpdateCapacityFunc = (capacity: number) => void
type UpdateDateFunc = (property: string, date: Date) => void
type ClearAllFiltersFunc = () => void

interface AccomodationFiltersStore {
  accomodationFilters: AccomodationFilters
  updateAmenity: UpdateAmenityFunc
  updateCapacity: UpdateCapacityFunc
  updateDate: UpdateDateFunc
  clearAllFilters: ClearAllFiltersFunc
}

export const useAccomodationFiltersStore = create<AccomodationFiltersStore>(
  (set) => ({
    accomodationFilters: {
      arrivalDate: null,
      departureDate: null,
      capacity: 0,
      amenities: {
        airConditioning: false,
        parkingSpace: false,
        pets: false,
        pool: false,
        wifi: false,
        tv: false,
      },
    },
    clearAllFilters: () =>
      set((state) => ({
        accomodationFilters: {
          arrivalDate: null,
          departureDate: null,
          capacity: 0,
          amenities: {
            airConditioning: false,
            parkingSpace: false,
            pets: false,
            pool: false,
            wifi: false,
            tv: false,
          },
        },
      })),
    updateAmenity: (property, value) =>
      set(({ accomodationFilters }) => ({
        accomodationFilters: {
          ...accomodationFilters,
          amenities: {
            ...accomodationFilters.amenities,
            [property]: value,
          },
        },
      })),
    updateCapacity: (capacity) =>
      set(({ accomodationFilters }) => ({
        accomodationFilters: {
          ...accomodationFilters,
          capacity,
        },
      })),
    updateDate: (property, date) =>
      set(({ accomodationFilters }) => ({
        accomodationFilters: {
          ...accomodationFilters,
          [property]: !isNaN(Number(date)) ? date : null,
        },
      })),
  })
)
