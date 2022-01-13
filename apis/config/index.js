let envRelease = 'sandbox'; // sandbox / staging / beta / production
const vesionApi = '/v1'; // v1 / v2

const tssProject = {
    sandbox: 'https://dev-api.tss.org.vn',
    staging: 'https://stagpj.tss.vn',
    beta: 'https://betapj.tss.vn',
    production: 'https://prodpj.tss.vn'
}
export const API_PROJECT = tssProject[envRelease]
export const API_PROJECT_VERSION = vesionApi;