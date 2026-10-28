// Shared demo account on a public practice site. A .env file overrides it.
export const credentials = {
  username: process.env.USER_NAME ?? 'JaneUser',
  password: process.env.PASSWORD ?? 'Password123',
};
