import time
from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd


def main():
    options = webdriver.EdgeOptions()
    driver = webdriver.Edge(options=options)

    # 打开 1688 订单页面，会自动跳转登录
    orders_url = "https://trade.1688.com/order/sell_order_list.htm"
    driver.get(orders_url)

    input("请在浏览器中完成登录后按回车继续...")

    data = []
    # 下面的选择器需要根据实际页面结构调整
    order_rows = driver.find_elements(By.CSS_SELECTOR, "div.order-item")
    for row in order_rows:
        name = row.find_element(By.CSS_SELECTOR, ".order-item-title").text
        qty = row.find_element(By.CSS_SELECTOR, ".order-item-quantity").text
        date = row.find_element(By.CSS_SELECTOR, ".order-item-date").text
        refund = row.find_element(By.CSS_SELECTOR, ".order-item-refund").text
        data.append({
            "商品名称": name,
            "购买数量": qty,
            "下单日期": date,
            "是否退货": refund,
        })

    df = pd.DataFrame(data)
    df.to_excel("orders.xlsx", index=False)
    print("已保存到 orders.xlsx")
    driver.quit()


if __name__ == "__main__":
    main()
