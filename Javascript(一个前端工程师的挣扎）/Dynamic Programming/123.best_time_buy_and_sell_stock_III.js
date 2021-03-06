/**
 * @param {number[]} prices
 * @return {number}
 */

// Relative straightforward的答案
var maxProfit = function(prices) {
    let dp = new Array(3).fill(0).map(() => new Array(prices.length));

    for (let k = 1; k <= 2; k++) {
        for (let i = 1; i < prices.length; i++) {
            let min = prices[0];

            for (let j = 1; j < i; j++) {
                    min = Math.min(min, prices[j] - dp[k - 1][j - 1])
            }
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min);

        }
    }

    return dp[2][prices.length - 1];
};


// Improved version I:
// (seems not working)
var maxProfit = function(prices) {
    if (prices === null || prices.length === 0) return 0;

    let dp = new Array(3).fill(0).map(() => new Array(prices.length));
    
    let min = new Array(3).fill(prices[0]);

    for (let i = 1; i < prices.length; i++) {
        for (let k = 1; k <= 2; k++) {
            min[k] = Math.min(min[k], prices[i] - dp[k - 1, j -1]);
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min[k]);
        }
    }

    return dp[2][prices.length - 1];
}

// From your daddy:
// You will call me daddy one day
var maxProfit = function(prices) {
    if (prices === null || prices.length === 0) return 0;
    let dp = new Array(3).fill(0).map(x => new Array(prices.length).fill(0))

    for(let i=1; i <= 2; i++){
        let min = Infinity;
        for(let j=1; j < prices.length; j++){
            min= Math.min(min, prices[j-1] -dp[i-1][j-1]);
            dp[i][j] = Math.max(dp[i][j - 1], prices[j] - min);
        }
    }
    return dp[2][prices.length - 1];
}


