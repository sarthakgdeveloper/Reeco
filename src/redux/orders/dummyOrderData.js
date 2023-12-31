import { ORDERSTATUS } from "../../utils/orderStatus";

const ordersList = [
  {
    id: 1,
    productName:
      "Chicken Breast Fillets, Boneless MatuumaMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: {
      // actualPrice: 60.67,
      number: "6 * 1LB",
      actualPrice: 60.67,
      number: "6 * 1LB",
    },
    quantity: { pieces: 0, amount: "6 * 1LB" },
    total: {
      finalAmount: "0",
    },
    status: ORDERSTATUS.PENDING,
    updateStatus: undefined,
  },
  {
    id: 2,
    productName:
      "Chicken Breast Fillets, Boneless MatuumaMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: {
      actualPrice: 60.67,
      number: "6 * 1LB",
    },
    quantity: { pieces: 15, amount: "6 * 1LB" },
    total: {
      finalAmount: "$9000.88",
    },
    status: ORDERSTATUS.PENDING,
    updateStatus: undefined,
  },
  {
    id: 3,
    productName:
      "Chicken Breast Fillets, Boneless MatuumaMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: {
      actualPrice: 60.67,
      number: "6 * 1LB",
    },
    quantity: { pieces: 15, amount: "6 * 1LB" },
    total: {
      finalAmount: "$9000.88",
    },
    status: ORDERSTATUS.PENDING,
    updateStatus: undefined,
  },
  {
    id: 4,
    productName:
      "Chicken Breast Fillets, Boneless MatuumaMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: {
      actualPrice: 60.67,
      number: "6 * 1LB",
    },
    quantity: { pieces: 0, amount: "6 * 1LB" },
    total: {
      finalAmount: "0",
    },
    status: ORDERSTATUS.PENDING,
    updateStatus: undefined,
  },
  {
    id: 5,
    productName:
      "Chicken Breast Fillets, Boneless MatuumaMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: {
      actualPrice: 60.67,
      number: "6 * 1LB",
      retailPrice: 10.43,
    },
    quantity: { pieces: 13, amount: "6 * 1LB" },
    total: {
      finalAmount: "$12,654.32",
      retailAmount: "$3,345.12",
    },
    status: ORDERSTATUS.PENDING,
    updateStatus: undefined,
  },
  {
    id: 6,
    productName:
      "Chicken Breast Fillets, Boneless MatuumaMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: {
      actualPrice: 60.67,
      number: "6 * 1LB",
    },
    quantity: { pieces: 0, amount: "6 * 1LB" },
    total: {
      finalAmount: "0",
    },
    status: ORDERSTATUS.PENDING,
    updateStatus: undefined,
  },
  {
    id: 7,
    productName:
      "Chicken Breast Fillets, Boneless MatuumaMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: {
      actualPrice: 60.67,
      number: "6 * 1LB",
    },
    quantity: { pieces: 0, amount: "6 * 1LB" },
    total: {
      finalAmount: "0",
    },
    status: ORDERSTATUS.PENDING,
    updateStatus: undefined,
  },
  {
    id: 8,
    productName:
      "Chicken Breast Fillets, Boneless MatuumaMarinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: {
      actualPrice: 60.67,
      number: "6 * 1LB",
    },
    quantity: { pieces: 0, amount: "6 * 1LB" },
    total: {
      finalAmount: "0",
    },
    updateStatus: undefined,
  },
];

export default ordersList;
