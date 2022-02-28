let envRelease = 'sandbox'; // sandbox / staging / beta / production
const vesionApi = '/v1'; // v1 / v2

const tssProject = {
    sandbox: 'https://dev-api.tss.org.vn',
    staging: 'https://dev-api.tss.org.vn',
    beta: 'https://dev-api.tss.org.vn',
    production: 'https://api.tss.org.vn'
}
export const API_PROJECT = tssProject[process.env.NEXT_PUBLIC_ENV_RELEASE]
export const API_PROJECT_VERSION = vesionApi;