import { Access } from 'payload'

export const isAdmin: Access = ({ req }) => {
  return req.user?.role === 'admin' || req.user?.role === 'super_admin'
}

export const isSuperAdmin: Access = ({ req }) => {
  return req.user?.role === 'super_admin'
}
