import {CityType, GovernmentBuildingType} from "../02/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    return city.houses = city.houses.filter(h => h.address.street.title !== street)
    // return city.houses = city.houses.filter(h => !(h.address.street.title !== street))
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingType>, number: number) {
    return buildings.filter(b => b.staffCount > number);
}