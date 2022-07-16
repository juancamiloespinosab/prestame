export const environment = {
  production: true,
  bankAmounts: {
      baseAmount: 10000000,
      minLoanAmount: 10000,
      maxLoanAmount: 100000,
  },
  mockLocalApi: {
      baseUrl: 'http://localhost:3000',
      paths: {
          loans: 'loans',
          users: 'users',
      },
  },
};