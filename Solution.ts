
function repairCars(ranks: number[], cars: number): number {
    const RANK_RANGE = [1, 100];
    let left = 1;
    let right = RANK_RANGE[1] * cars * cars;
    let minTime = right;

    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        if (allCarsCanBeRepairedForGivenMinues(ranks, cars, middle)) {
            minTime = middle;
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return minTime;
};

function allCarsCanBeRepairedForGivenMinues(ranks: number[], cars: number, minutes: number): boolean {
    for (let rank of ranks) {
        cars -= getRapairedCarsForGivenMinutes(rank, minutes);
        if (cars <= 0) {
            return true;
        }
    }
    return false;
}

function getRapairedCarsForGivenMinutes(rank: number, minutes: number): number {
    return Math.floor(Math.sqrt(minutes / rank));
}
