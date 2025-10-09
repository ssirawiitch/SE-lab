// tests/todo.spec.js
const { test, expect } = require('@playwright/test');

// Create a new test case with a descriptive name.
test('should add a new todo item', async ({ page }) => {
    // 1. Action: Navigate to the To-Do MVC website.
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    // 2. Locator + Action: Find the input field and type a new to-do item.
    const newTodoInput = page.getByPlaceholder('What needs to be done?');
    await newTodoInput.fill('Learn Playwright');
    await newTodoInput.press('Enter');

    // 3. Assertion: Verify that the new item appears in the list.
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toHaveText('Learn Playwright');
});


