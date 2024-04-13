// Best time to Buy and sell stocks
// you are given an aray prices where proces[i] is the prices of a given stock on th ith day
// you want to maximise your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock
// return the maximum profit if you cannot achieve any profit return 0

// Input: prices = [7,1,5,3,6,4]; ------>>> Output: 5;
// Input: prices = [7,6,4,3,1]; -------->> Output:0;

function maxProfit(prices) {
  let globalProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > globalProfit) globalProfit = currentProfit;
    }
  }

  return globalProfit;
}

maxProfit([7, 1, 5, 3, 6, 4]);
