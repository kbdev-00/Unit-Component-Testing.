# 🧪 Testing Suite – Week 11 Internship Project

This project is part of the **Prodesk IT Internship (Week 11)**, focused on **Unit Testing, Component Testing, and System Reliability** using modern frontend testing tools.

The goal of this project is to ensure that UI components work correctly, user interactions behave as expected, and data-fetching components are tested in a controlled environment.

---

## 🚀 Project Objective

* Learn and implement **Unit Testing** in React
* Test UI components independently
* Validate **user interactions** (clicks, inputs)
* Implement **API mocking** for reliable testing
* Achieve **minimum 70% test coverage**

---

## 🛠️ Tech Stack

* React.js / Next.js
* Jest (Test Runner)
* React Testing Library (RTL)
* JavaScript (ES6+)

---

## 📂 Project Structure

```
/src
 ├── components
 │    ├── Button.js
 │    ├── Card.js
 │    ├── Input.js
 │    ├── Counter.js
 │    └── Users.js
 │
 ├── __tests__
 │    ├── Button.test.js
 │    ├── Card.test.js
 │    ├── Input.test.js
 │    ├── Counter.test.js
 │    └── Users.test.js
 │
 └── App.js
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone <your-repo-link>
cd project-folder
```

2. Install dependencies

```
npm install
```

3. Install testing libraries

```
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

---

## 🧪 Testing Levels Implemented

### ✅ Level 1 – Basic Component Testing

* Verified component renders without crashing
* Checked correct text rendering using props

**Example:**

* Button component renders with correct label

---

### ✅ Level 2 – Interaction Testing

* Simulated user events like clicks and typing
* Verified UI updates dynamically

**Example:**

* Counter increments when button is clicked
* Input field updates on typing

---

### ✅ Level 3 – Advanced Testing (API Mocking)

* Mocked API calls using Jest
* Avoided real network requests
* Tested asynchronous data rendering

**Example:**

* Users list displays mocked API data

---

## 📊 Test Coverage

To generate coverage report:

```
npm test -- --coverage
```

✔ Target Achieved: **70%+ Coverage**

---

## 🔍 Key Features

* Unit Testing for reusable components
* Interaction Testing using `userEvent`
* API Mocking using `jest.fn()`
* Async testing using `waitFor`
* Clean and maintainable test structure

---

## 🧠 Learning Outcomes

* Understanding of **test-driven mindset**
* Writing reliable and scalable test cases
* Handling async operations in testing
* Improving code quality and stability

---

## ⚠️ Challenges Faced

* Understanding async testing (`waitFor`)
* Mocking API responses correctly
* Debugging failing test cases

---

## 💡 Conclusion

This project helped bridge the gap between frontend UI development and real-world production standards.
By implementing testing, the application becomes more reliable, maintainable, and production-ready.

---

## 👨‍💻 Author

**Ketan Bhaskar**
Frontend Developer Intern – Prodesk IT

---
