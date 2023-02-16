import { User } from 'core/models/user';
import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'token.01010101';

export const generateToken = async (user: User) => {
  const jwt = await sign({ payload: { id: user.id, username: user.username } }, JWT_SECRET, { expiresIn: '2h' });
  return jwt;
};

export const verifyToken = async () => {};
