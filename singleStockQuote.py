# import yfinance as yf

# stock = yf.Ticker("360ONE.NS")
# stock_info = stock.info


# Price Change Percent 
# Extracting the relevant values
# previous_close = stock_info["previousClose"]
# cmp = stock_info["currentPrice"]


# # Calculating the percent change
# percent_change = ((cmp - previous_close) / previous_close) * 100

# print(f"The percent change in price is: {percent_change:.2f}%")
import yfinance as yf

# Define the stock symbol
stock_symbol = "360ONE.NS"

# Download historical data with a 30-day window
stock_data = yf.download(stock_symbol, period="1mo")

# Extract the "Volume" column
volume_data = stock_data['Volume'].mean()
# print(volume_data)


# Print the result
print(f"The average volume for the past 30 days is: {volume_data:.2f}")


