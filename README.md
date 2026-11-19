# Playwright Automation Framework

## Overview

An end-to-end UI automation framework developed using **Playwright with JavaScript**, following the **Page Object Model (POM)** design pattern.

This framework automates the major workflows of an e-commerce application, including login, product selection, shopping cart, checkout and order confirmation.

The framework focuses on reusable components, data-driven testing, cross-browser execution, test reporting and CI/CD integration.

## Tech Stack

- **Automation Tool:** Playwright
- **Programming Language:** JavaScript
- **Design Pattern:** Page Object Model (POM)
- **Test Runner:** Playwright Test
- **Test Reporting:** Allure Reports
- **CI/CD:** GitHub Actions
- **Version Control:** Git and GitHub
- **Application Under Test:** SauceDemo

## Project Structure

```text
Playwright_Framework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── PageObjects/
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── CheckoutOverviewPage.js
│   └── FinalPage.js
│
├── tests/
│   ├── LoginTest.spec.js
│   ├── ProductTest.spec.js
│   ├── CartTest.spec.js
│   ├── CheckoutTest.spec.js
│   ├── CheckoutOverviewTest.spec.js
│   └── FinalTest.spec.js
│
├── test-data/
│   └── products.js
│
├── utils/
│   └── envConfig.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Framework Features

### 1. Page Object Model (POM)

The framework follows the Page Object Model design pattern. Each application page has a separate JavaScript class containing its locators and reusable actions.

| Page Object | Responsibility |
|---|---|
| LoginPage.js | Login functionality |
| ProductPage.js | Product selection and sorting |
| CartPage.js | Shopping cart operations |
| CheckoutPage.js | Checkout information |
| CheckoutOverviewPage.js | Order summary validation |
| FinalPage.js | Order confirmation |

**Benefits:**
- Code reusability.
- Easy maintenance.
- Reduced code duplication.
- Separation of test logic and page actions.

### 2. Data-Driven Testing

Test data is maintained separately inside the `test-data/` folder.

For example, `products.js` contains product names used to execute product selection scenarios.

This approach allows multiple test scenarios to reuse the same test data without duplicating automation scripts.

### 3. Environment Configuration

The `utils/envConfig.js` file maintains application environment URLs and login credentials.

The framework supports environment selection through the `ENV` variable.

### 4. Cross-Browser Testing

Playwright is configured to execute tests across three browser projects:

- Chromium
- Firefox
- WebKit

This helps validate application functionality across different browser engines.

### 5. Allure Reporting

Allure Playwright is integrated into the framework for detailed test execution reporting.

The GitHub Actions workflow:
- Collects Allure results from individual shards.
- Downloads and combines the results.
- Generates a single combined Allure HTML report.
- Uploads the report as a GitHub Actions artifact.

### 6. Test Execution Optimization – Sharding

Playwright sharding is implemented in GitHub Actions to divide the test suite into four independent shards.

Each shard executes its assigned tests in a separate CI job.

**Execution time comparison:**

| Execution approach | Execution time |
|---|---:|
| Without sharding | 2 minutes 34 seconds |
| With sharding | 1 minute 57 seconds |
| Time saved | 37 seconds |

**Performance improvement: Approximately 24%.**

Sharding helps reduce the overall test execution time by running multiple test groups concurrently.

### 7. CI/CD Integration – GitHub Actions

The framework is integrated with GitHub Actions for automated test execution.

Workflow location:

`.github/workflows/playwright.yml`

Pipeline activities:

1. Checkout the source code.
2. Set up Node.js.
3. Install project dependencies.
4. Install Playwright browsers.
5. Execute tests using four shards.
6. Upload individual Allure result folders.
7. Merge Allure results from all shards.
8. Generate and upload the combined Allure HTML report.

## Test Scenarios

The framework covers the following e-commerce workflows:

- Login functionality.
- Product page validation.
- Product details verification.
- Product sorting by name (A to Z and Z to A).
- Product sorting by price (low to high and high to low).
- Adding products to the cart.
- Removing products from the cart.
- Shopping cart validation.
- Checkout information validation.
- Checkout overview verification.
- Final order confirmation.

## Installation and Setup

### Prerequisites

- Node.js
- npm
- Visual Studio Code
- Git

### Clone the repository

```bash
git clone https://github.com/nookalamounika/Playwright_Framework.git
```

### Navigate to the project

```bash
cd Playwright_Framework
```

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

## Execution Commands

**Run all test cases**

```bash
npx playwright test
```

**Run tests in headed mode**

```bash
npx playwright test --headed
```

**Run a specific test file**

```bash
npx playwright test tests/LoginTest.spec.js
```

**Run tests using Playwright UI mode**

```bash
npx playwright test --ui
```

**Run tests using a specific shard**

```bash
npx playwright test --shard=1/4
```

**Generate Allure report locally**

```bash
npx allure generate allure-results --clean -o allure-report
```

**Open Allure report**

```bash
npx allure open allure-report
```

## Git and GitHub

Git and GitHub are used for source code management and version control.

Common Git commands:

```bash
git status
git add .
git commit -m "Updated automation scripts"
git push
git pull
git checkout -b feature-branch
git merge main
```

## Repository

GitHub: https://github.com/nookalamounika/Playwright_Framework


####    Author

Nookala Mounika




