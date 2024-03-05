import { create } from 'zustand'

interface ReservationDetailsStore {
  reservationDetails: ReservationDetails | null
  updateReservationDetails: (reservationDetails: ReservationDetails) => void
}

export const useReservationDetailsStore = create<ReservationDetailsStore>(
  (set) => ({
    reservationDetails: null,
    updateReservationDetails: (newReservationDetails) => {
      set(() => ({
        reservationDetails: {
          ...newReservationDetails,
        },
      }))
    },
  })
)
