
public class Solution {

    private static final int[] RANK_RANGE = {1, 100};

    public long repairCars(int[] ranks, int cars) {
        long left = 1;
        long right = (long) RANK_RANGE[1] * cars * cars;
        long minTime = right;

        while (left <= right) {
            long middle = left + (right - left) / 2;
            if (allCarsCanBeRepairedForGivenMinues(ranks, cars, middle)) {
                minTime = middle;
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        return minTime;
    }

    private static boolean allCarsCanBeRepairedForGivenMinues(int[] ranks, int cars, long minutes) {
        for (int rank : ranks) {
            cars -= getRapairedCarsForGivenMinutes(rank, minutes);
            if (cars <= 0) {
                return true;
            }
        }
        return false;
    }

    private static int getRapairedCarsForGivenMinutes(int rank, long minutes) {
        return (int) Math.sqrt(minutes / rank);
    }
}
