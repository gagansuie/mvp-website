import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    reporter: [['json', { outputFile: 'results.json' }]],
    webServer: {
        command: 'npm run build && npm run preview',
        port: 4173
    }
};

export default config;
