interface StringifiedIndex {
  [index: string]: any
}

interface Accomodation {
  id: number
  title: string
  image: string
  capacity: number
  beachDistanceInMeters: number | null
  amenities: Amenities
  pricelistInEuros: PriceInEuros[]
  availableDates: AvailableDate[]
}

interface Amenities extends StringifiedIndex {
  airConditioning: boolean
  parkingSpace: boolean
  pets: boolean
  pool: boolean
  wifi: boolean
  tv: boolean
}

interface PriceInEuros {
  intervalStart: string
  intervalEnd: string
  pricePerNight: number
}

interface AvailableDate {
  intervalStart: string
  intervalEnd: string
}

interface ArrivalAndDeparture {
  arrivalDate: Date | null
  departureDate: Date | null
}

interface AccomodationFilters extends ArrivalAndDeparture {
  capacity: number
  amenities: Amenities
}

interface AccomodationReservationDetails {
  arrivalDate: Date | null
  departureDate: Date | null
  numberOfPeople: number
  totalPriceInEuros: number | null
}

type AccommodationFilterPredicate = (accommodation: Accomodation) => boolean
type UpdateAccommodationFilterPredicate = (
  accommodationFilterPredicate: AccommodationFilterPredicate
) => void
