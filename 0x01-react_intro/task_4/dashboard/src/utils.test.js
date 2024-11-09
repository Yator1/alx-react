// utils.js functions test
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// getFullYear test
test("getFullYear returns the current year", () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// getFooterCopy test
test('getFooterCopy returns "Holberton School" when isIndex is true', () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

test('getFooterCopy returns "Holberton School main dashboard" when isIndex is false', () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

// getLatestNotifications test
test("getLatestNotification returns the correct notification string", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
