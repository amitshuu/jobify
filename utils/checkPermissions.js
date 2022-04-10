import UnAutonticatedError from '../errors/unauthenticated.js';

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new UnAutonticatedError('Not authorized to access this route!');
};

export default checkPermissions;
