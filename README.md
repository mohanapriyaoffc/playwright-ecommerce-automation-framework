# Playwright E-Commerce Automation Framework

Author: Mohanapriya Vijayakumar
Role: QA Automation Engineer

## Overview
This project demonstrates an end-to-end UI automation framework built using **Playwright with TypeScript**.  
The framework follows the **Page Object Model (POM)** design pattern and automates core e-commerce workflows.

## Features
- Playwright Test Runner
- Page Object Model (POM)
- Data-driven testing using JSON
- UI validations using Playwright assertions
- Automated e-commerce workflow testing

## Automated Test Flow
1. Launch application
2. User login
3. Add product to cart
4. Verify product in cart
5. Navigate to checkout page

## Project Structure
playwright-ecommerce-automation-framework
│
├── tests
│   └── ecommerceFlow.spec.ts
│
├── pages
│   ├── LoginPage.ts
│   └── InventoryPage.ts
│
├── test-data
│   └── loginData.json
│
└── playwright.config.ts

## Technologies Used
- Playwright
- TypeScript
- Node.js

## How to Run Tests

Install dependencies

npm install

Run tests

npx playwright test

View HTML report

npx playwright show-report