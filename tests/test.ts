import { expect, test } from '@playwright/test';

test('Home page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Shadowkeep');
});

test('Roadmap page has expected h1', async ({ page }) => {
	await page.goto('/roadmap');
	expect(await page.textContent('h1')).toBe('Roadmap');
});

test('Rarity page has expected h1', async ({ page }) => {
	await page.goto('/rarity');
	expect(await page.textContent('h1')).toBe('Search Rarities');
});

test('Team page has expected h1', async ({ page }) => {
	await page.goto('/team');
	expect(await page.textContent('h1')).toBe('Active Team Members');
});