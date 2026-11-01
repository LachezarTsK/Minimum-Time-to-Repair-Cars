
using System;

public class Solution
{
    private static readonly int[] RANK_RANGE = { 1, 100 };

    public long RepairCars(int[] ranks, int cars)
    {
        long left = 1;
        long right = (long)RANK_RANGE[1] * cars * cars;
        long minTime = right;

        while (left <= right)
        {
            long middle = left + (right - left) / 2;
            if (AllCarsCanBeRepairedForGivenMinues(ranks, cars, middle))
            {
                minTime = middle;
                right = middle - 1;
            }
            else
            {
                left = middle + 1;
            }
        }

        return minTime;
    }

    private static bool AllCarsCanBeRepairedForGivenMinues(int[] ranks, int cars, long minutes)
    {
        foreach (int rank in ranks)
        {
            cars -= GetRapairedCarsForGivenMinutes(rank, minutes);
            if (cars <= 0)
            {
                return true;
            }
        }
        return false;
    }

    private static int GetRapairedCarsForGivenMinutes(int rank, long minutes)
    {
        return (int)Math.Sqrt(minutes / rank);
    }
}
