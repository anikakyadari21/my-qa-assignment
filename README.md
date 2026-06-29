# Playwright QA Assignment

## Project Overview

This project contains both UI and API automation tests developed using Playwright and TypeScript.

### Tech Stack

- Playwright
- TypeScript
- Node.js

## Project Structure

```
pages/
tests/
  ├── ui/
  └── api/
utils/
test-data/
playwright.config.ts
```

## Installation

Clone the repository:

```bash
git clone https://github.com/anikakyadari21/my-qa-assignment.git
```

Install dependencies:

```bash
npm install
```

## Run all tests

```bash
npx playwright test
```

## Run UI tests

```bash
npx playwright test tests/ui
```

## Run API tests

```bash
npx playwright test tests/api
```

## Run in headed mode

```bash
npx playwright test --headed
```

## View HTML Report

```bash
npx playwright show-report
```
