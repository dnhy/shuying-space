import { faker } from "@faker-js/faker";

export default function handler(req:any, res:any) {
  const users = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    company: faker.company.name(),
    avatar: faker.image.avatar(),
  }));
  res.status(200).json(users);
}
