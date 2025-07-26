# Kian
My personal GitHub homepage

## Example 1688 Orders Scraper

This repository includes a simple script `simple_1688_spider.py` that demonstrates
how to fetch order data from 1688 after the user manually logs in. It opens an
Edge browser via Selenium and saves the scraped data to `orders.xlsx`.

### Requirements
- Python 3.11
- `selenium`, `pandas`, `openpyxl` packages
- Microsoft Edge and the corresponding Edge WebDriver installed on your system

### Usage
1. Install the required Python packages:
   ```bash
   pip install selenium pandas openpyxl
   ```
2. Make sure Edge WebDriver is available in your `PATH`.
3. Run the script:
   ```bash
   python simple_1688_spider.py
   ```
4. When the browser opens, log in to 1688 manually. After login, press `Enter`
   in the terminal to let the script continue. It will parse the orders page
   (you may need to adjust the CSS selectors in the script) and save the data
   to `orders.xlsx`.

## Tampermonkey Script

If you prefer to scrape orders directly in your browser, this repo also
includes `1688_order_export.user.js`. Install the [Tampermonkey](https://www.tampermonkey.net/)
extension in Edge or Chrome, create a new script, and paste the contents of
`1688_order_export.user.js`.

When you browse the 1688 order list page (e.g. `https://trade.1688.com/order/`),
a button labeled `导出订单CSV` will appear in the top right corner. Click it to
export the current page’s orders to a CSV file that can be opened in Excel.

