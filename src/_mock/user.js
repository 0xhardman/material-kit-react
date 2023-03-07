import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(1)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  // name: faker.name.fullName({ lastName: '节点' }),
  name: '中技所-常务共识节点',
  company: '阿里云-北京',
  isVerified: true,
  status: 'active',
  role: '常务共识节点',
}));

export default users;
