
import kotlin.math.sqrt

class Solution {

    private companion object {
         val RANK_RANGE = intArrayOf(1, 100)
    }

    fun repairCars(ranks: IntArray, cars: Int): Long {
        var left :Long= 1;
        var right :Long= RANK_RANGE[1].toLong() * cars * cars;
        var minTime = right;

        while (left <= right) {
            val middle = left + (right - left) / 2;
            if (allCarsCanBeRepairedForGivenMinues(ranks, cars, middle)) {
                minTime = middle;
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        return minTime;
    }

    private fun allCarsCanBeRepairedForGivenMinues(ranks: IntArray, cars: Int,  minutes:Long):Boolean {
        var cars = cars
        for (rank in ranks) {
            cars -= getRapairedCarsForGivenMinutes(rank, minutes);
            if (cars <= 0) {
                return true;
            }
        }
        return false;
    }

    private fun getRapairedCarsForGivenMinutes(rank :Int, minutes:Long):Int {
        return sqrt(minutes.toDouble() / rank).toInt()
    }
}
