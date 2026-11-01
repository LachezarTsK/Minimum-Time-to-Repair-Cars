
package main
import "math"

var RANK_RANGE = [2]int{1, 100}

func repairCars(ranks []int, cars int) int64 {
    var left int64 = 1
    var right int64 = int64(RANK_RANGE[1]) * int64(cars) * int64(cars)
    var minTime int64 = right

    for left <= right {
        middle := left + (right - left) / 2
        if allCarsCanBeRepairedForGivenMinues(ranks, cars, middle) {
            minTime = middle
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return minTime
}

func allCarsCanBeRepairedForGivenMinues(ranks []int, cars int, minutes int64) bool {
    for _, rank := range ranks {
        cars -= getRapairedCarsForGivenMinutes(rank, minutes)
        if cars <= 0 {
            return true
        }
    }
    return false
}

func getRapairedCarsForGivenMinutes(rank int, minutes int64) int {
    return int(math.Sqrt(float64(minutes) / float64(rank)))
}
