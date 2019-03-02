// Set the required environment variables for the NodeJS based Express server doing server-side rendering
// For example:
// "SITECORE_JSS_APP_NAME": "react-jss-typescript-starter",
// "SITECORE_API_HOST": "http://react-jss-typescript-starter.dev.local",
// "SITECORE_LAYOUT_SERVICE_ROUTE": "http://react-jss-typescript-starter.dev.local/sitecore/api/layout/render/jss",
// "SITECORE_API_KEY": "{57231674-4CC9-48AA-AFF0-190DB9D68FE1}",
// "SITECORE_PATH_REWRITE_EXCLUDE_ROUTES": "",
// "SITECORE_ENABLE_DEBUG": "true",
// "SITECORE_PRODUCTION_DISCONNECTED": "false"

import * as fs from 'fs';
import * as path from'path';

export function setDevelopmentEnvironmentVariables(): void  {
    // we assume the application using this function is executed from a level
    // one deeper than the configuration files (only used in development)
    const packageJsonPath = path.join(process.env.PWD, '../package.json');
    const scjssJsonconfigPath = path.join(process.env.PWD, '../scjssconfig.json');

    if (!fs.existsSync(packageJsonPath)) {
        console.error(`File ${packageJsonPath} is missing`);
    }
    if (!fs.existsSync(scjssJsonconfigPath)) {
        console.error(`File ${scjssJsonconfigPath} is missing`);
    }

    const packageJsonConfig = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const scjssconfigJsonConfig = JSON.parse(fs.readFileSync(scjssJsonconfigPath, 'utf8'));

    console.log("Setting development environment variables");
    process.env.SITECORE_JSS_APP_NAME = packageJsonConfig.config.appName;
    process.env.SITECORE_API_HOST = scjssconfigJsonConfig.sitecore.layoutServiceHost;
    process.env.SITECORE_LAYOUT_SERVICE_ROUTE = `${scjssconfigJsonConfig.sitecore.layoutServiceHost}/sitecore/api/layout/render/jss`;
    process.env.SITECORE_API_KEY = scjssconfigJsonConfig.sitecore.apiKey;
    process.env.SITECORE_PATH_REWRITE_EXCLUDE_ROUTES = "";
    process.env.SITECORE_ENABLE_DEBUG = "true";
    process.env.SITECORE_PRODUCTION_DISCONNECTED = "true";
}

export function logEnvironmentVariables(): void {
    console.log("Running with following environment settings:");
    console.log("============================================");
    console.log(`SITECORE_JSS_APP_NAME=${process.env.SITECORE_JSS_APP_NAME}`);
    console.log(`SITECORE_API_HOST=${process.env.SITECORE_API_HOST}`);
    console.log(`SITECORE_LAYOUT_SERVICE_ROUTE=${process.env.SITECORE_LAYOUT_SERVICE_ROUTE}`);
    console.log(`SITECORE_API_KEY=${process.env.SITECORE_API_KEY}`);
    console.log(`SITECORE_PATH_REWRITE_EXCLUDE_ROUTES=${process.env.SITECORE_PATH_REWRITE_EXCLUDE_ROUTES}`);
    console.log(`SITECORE_ENABLE_DEBUG=${process.env.SITECORE_ENABLE_DEBUG}`);
    console.log(`SITECORE_PRODUCTION_DISCONNECTED=${process.env.SITECORE_PRODUCTION_DISCONNECTED}`);
}
