
  export interface BalanceNode {
  id: number;
  title: string;
  amount?: number;
  total?: boolean;
  children?: BalanceNode[];
}

export const balanceData: BalanceNode[] = [
  {
    id: 1,
    title: "Assets",
    children: [
      {
        id: 2,
        title: "Current Assets",
        children: [
          {
            id: 3,
            title: "Cash and Cash Equivalent",
            children: [
              {
                id: 4,
                title: "Business",
                amount: 567
              },
              {
                id: 5,
                title: "Credit Card",
                amount: 567
              },
              {
                id: 6,
                title: "Total Cash and Cash Equivalent",
                amount: 1134,
                total: true
              }
            ]
          },

          {
            id: 7,
            title: "Uncategorised Assets",
            amount: 567
          },

          {
            id: 8,
            title: "Total Current Assets",
            amount: 1701,
            total: true
          }
        ]
      }
    ]
  },

  {
    id: 9,
    title: "Liabilities and Equity",
    children: [
      {
        id: 10,
        title: "Liabilities",
        children: [
          {
            id: 11,
            title: "Accounts Payable",
            amount: 300
          },
          {
            id: 12,
            title: "Total Liabilities",
            amount: 300,
            total: true
          }
        ]
      },

      {
        id: 13,
        title: "Equity",
        children: [
          {
            id: 14,
            title: "Opening Balance Equity",
            amount: 250
          },
          {
            id: 15,
            title: "Retained Earnings",
            amount: 120
          },
          {
            id: 16,
            title: "Profit for the year",
            amount: 90
          },
          {
            id: 17,
            title: "Total Equity",
            amount: 460,
            total: true
          }
        ]
      }
    ]
  }
];