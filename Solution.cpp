
#include <span>
#include <cmath>
#include <array>
#include <vector>
using namespace std;

class Solution {

    inline static const array<int, 2> RANK_RANGE{ 1, 100 };

public:
    long long repairCars(vector<int>& ranks, int cars) {
        long long left = 1;
        long long right = static_cast<long long>(RANK_RANGE[1]) * cars * cars;
        long long minTime = right;

        while (left <= right) {
            long long middle = left + (right - left) / 2;
            if (allCarsCanBeRepairedForGivenMinues(ranks, cars, middle)) {
                minTime = middle;
                right = middle - 1;
            }
            else {
                left = middle + 1;
            }
        }

        return minTime;
    }

private:
    bool allCarsCanBeRepairedForGivenMinues(span<const int> ranks, int cars, long long minutes) {
        for (const auto& rank : ranks) {
            cars -= getRapairedCarsForGivenMinutes(rank, minutes);
            if (cars <= 0) {
                return true;
            }
        }
        return false;
    }

    static int getRapairedCarsForGivenMinutes(int rank, long long minutes) {
        return sqrt(minutes / rank);
    }
};
