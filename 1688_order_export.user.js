// ==UserScript==
// @name         1688 Order Exporter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Export order list from 1688 to CSV for importing into Excel
// @match        https://trade.1688.com/order/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function exportOrders() {
        const rows = document.querySelectorAll('div.order-item');
        const csvRows = ['商品名称,购买数量,下单日期,是否退货'];
        rows.forEach(row => {
            const name = row.querySelector('.order-item-title')?.innerText.trim() || '';
            const qty = row.querySelector('.order-item-quantity')?.innerText.trim() || '';
            const date = row.querySelector('.order-item-date')?.innerText.trim() || '';
            const refund = row.querySelector('.order-item-refund')?.innerText.trim() || '';
            csvRows.push([name, qty, date, refund].join(','));
        });
        const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'orders.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function addExportButton() {
        const btn = document.createElement('button');
        btn.textContent = '导出订单CSV';
        btn.style.position = 'fixed';
        btn.style.top = '10px';
        btn.style.right = '10px';
        btn.style.zIndex = 9999;
        btn.addEventListener('click', exportOrders);
        document.body.appendChild(btn);
    }

    window.addEventListener('load', addExportButton);
})();

