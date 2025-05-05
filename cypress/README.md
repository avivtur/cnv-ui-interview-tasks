# 🧪 Cypress E2E Task — UI QA Engineer

## 📚 Task Background

You are working on an e-commerce platform.
We have 4 simple pages:

    Home page (/)
    Product list page (/products)
    Product page (/product/:productId)
    Add Product page (/product/new)

## 🎯 Task Overview

Automate the following user flow using Cypress:

1. Visit the home page.
2. Visit the Products page.
3. Wait for the list of products to load (async fetch).
4. Click on the Add Product button.
5. Add Product fields and submit.
6. Verify that the product has been added to the products list.
7. Click on the added product and verify it.


## Linux Prerequisites

If you're using Linux, you'll want to have the required dependencies installed
on your system. Depending on your system defaults, these dependencies may already be installed.
If not, run the command line for your operating system listed below.

```shell
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

For Ubuntu 24.04, and above, use the following command:

```shell
apt-get install libgtk2.0-0t64 libgtk-3-0t64 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 🚀 Run cypress

```bash
npm run cy:open
```
