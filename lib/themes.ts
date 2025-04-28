// @ts-ignore
const req = require.context('./themes', true, /\.json$/);
const themes = req.keys().flatMap((key: string) => req(key));
export { themes };
