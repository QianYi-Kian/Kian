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
