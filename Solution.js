
/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
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

/**
 * @param {number[]} ranks
 * @param {number} cars
 * @param {number} minutes
 * @return {boolean}
 */
function allCarsCanBeRepairedForGivenMinues(ranks, cars, minutes) {
    for (let rank of ranks) {
        cars -= getRapairedCarsForGivenMinutes(rank, minutes);
        if (cars <= 0) {
            return true;
        }
    }
    return false;
}

/**
 * @param {number} rank
 * @param {number} minutes
 * @return {number}
 */
function getRapairedCarsForGivenMinutes(rank, minutes) {
    return  Math.floor(Math.sqrt(minutes / rank));
}
