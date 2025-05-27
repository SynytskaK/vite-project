
import type { Payment } from "./types";

const formatted = (phone: string) => phone.replace(/^\+(\d{3})(\d{3})(\d{2})(\d{2})$/, '($1) $2-$3-$4');


export const payments: Payment[] = [
  {
    id: "728ed52f",
    user: 'Jack Smith',
    phone: formatted('+0935667876'),
    email: "m@example.com",
    spending: 1000,
  },
  {
    id: "489e1d46",
    user: 'Jjohn Doe',
    phone: formatted('+3809345578'),
    email: "exam@gmail.com",
    spending: 12000,
  },
  {
    id: "489e1d42",
    user: 'Ashley Johnson',
    phone: formatted('+4934557896'),
    email: "example@gmail.com",
    spending: 500,
  },
  {
    id: "489e1d45",
    user: 'Michael Brown',
    phone: formatted('+3539345578'),
    email: "test@tes.ud",
    spending: 4000,
  },

  {
    id: "489rtd42",
    user: 'Adda Brown',
    phone: formatted('+3539349078'),
    email: "testify@tes.ud",
    spending: 54000,
  }, {
    id: "489e1tg2",
    user: 'Judith White',
    phone: formatted('+3539343378'),
    email: "judit@tes.com",
    spending: 3400,
  }, {
    id: "489eas42",
    user: 'Xavier Green',
    phone: formatted('+3538955578'),
    email: "xavier@tes.com",
    spending: 20,
  }, {
    id: "489e1djk",
    user: 'Olivia Blue',
    phone: formatted('+3539567578'),
    email: "olivia@tes.com",
    spending: 0,
  }, {
    id: "489e1dkk",
    user: 'Emma Black',
    phone: formatted('+3539345333'),
    email: "emma@tes.com",
    spending: 8900,
  }, {
    id: "4wee1d42",
    user: 'Liam Gray',
    phone: formatted('+3539900578'),
    email: "liam@tes.com",
    spending: 12300,
  },
]