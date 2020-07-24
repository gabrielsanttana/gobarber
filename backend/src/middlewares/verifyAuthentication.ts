import {Request, Response, NextFunction} from 'express';
import {verify} from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function verifyAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    throw new Error('JWT was not provided');
  }

  const [, token] = authorizationHeader.split(' ');

  try {
    const {secret} = authConfig.jwt;

    const decodedToken = verify(token, secret);

    const {sub} = decodedToken as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new Error('Invalid JWT');
  }
}
