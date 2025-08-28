# Project Structure

```
fluffy-dollop/
├── pages/
│   ├── AboutPage.ts         # About Us page object and content validation
│   ├── ContactPage.ts       # Contact form page object and reCAPTCHA validation
│   ├── HeaderPage.ts        # Header navigation page object
│   └── base/
│       └── BasePage.ts      # Base page object (shared logic)
├── tests/
│   ├── about.spec.ts        # About Us dropdown and content tests
│   ├── contact.spec.ts      # Contact page field presence tests
│   ├── contact-recaptcha.spec.ts # Contact form reCAPTCHA error tests
│   └── navigation.spec.ts   # Header navigation tests
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── ...                      # Other files and folders
```

## Where Each Exercise Is Handled

- **Navigation and Content Validation**
  - `tests/navigation.spec.ts` and `pages/HeaderPage.ts`
  - `tests/about.spec.ts` and `pages/AboutPage.ts`
- **Contact Form and reCAPTCHA**
  - `tests/contact.spec.ts` and `pages/ContactPage.ts`
  - `tests/contact-recaptcha.spec.ts` and `pages/ContactPage.ts`
# Lead Consult UI Automation with Playwright

This project contains automated UI tests for https://www.leadconsult.eu using Playwright.

## Project Structure

- **Navigation and Content Validation**
  - `tests/navigation.spec.ts`: Validates header navigation (Home, About Us, Services, Contact Us) and checks expected content.
  - `pages/HeaderPage.ts`: Page Object for header navigation and actions.
  - `pages/AboutPage.ts`: Page Object for About Us content validation (checks for "team" and "consulting").

- **Contact Form and reCAPTCHA**
  - `tests/contact.spec.ts`: Validates presence of message field, email field, and send button on Contact page.
  - `tests/contact-recaptcha.spec.ts`: Fills the contact form and tests reCAPTCHA error handling (submits without checking "I'm not a robot").
  - `pages/ContactPage.ts`: Page Object for contact form interactions and error validation.

## How to Run Tests

- Run all tests:
  ```sh
  npm test
  ```
- Run a specific test file:
  ```sh
  npx playwright test tests/navigation.spec.ts
  ```
- Run in a specific browser (e.g., Firefox):
  ```sh
  npx playwright test --project=firefox
  ```
- Run in headed mode for debugging:
  ```sh
  npx playwright test tests/contact-recaptcha.spec.ts --headed --debug
  ```

## Notes
- Tests are written in TypeScript and use Playwright's Page Object Model for maintainability.
- All selectors and validations are tailored for the public Lead Consult website.

---
For any questions or improvements, see the relevant spec and page object files listed above.
