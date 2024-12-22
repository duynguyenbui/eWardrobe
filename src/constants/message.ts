// General messages
const INTERNAL_ERROR_MESSAGE = 'Something went wrong. Please try again later.'
const DATA_FETCHED_SUCCESSFULLY = 'Data fetched successfully.'
const DATA_FETCH_FAILED = 'Failed to fetch data. Please try again.'
const PAYLOAD_SECRET_MISSING_MESSAGE = 'Required payload is missing. Please check your input.'

// User messages
const SIGNUP_SUCCESS_MESSAGE = 'You have successfully signed up!'
const SIGNUP_FAILURE_MESSAGE = 'Sign up was unsuccessful. Please try again.'
const LOGIN_SUCCESS_MESSAGE = 'Welcome back! You have logged in successfully.'
const LOGIN_FAILURE_MESSAGE = 'Login failed. Please check your credentials and try again.'
const LOGOUT_SUCCESS_MESSAGE = 'You have logged out successfully.'
const LOGOUT_FAILURE_MESSAGE = 'Logout failed. Please try again.'
const USER_ALREADY_EXISTS_MESSAGE = 'This user already exists. Please use a different email.'
const USER_NOT_FOUND_MESSAGE = 'User not found. Please try again.'
const GET_PROFILE_SUCCESS_MESSAGE = 'Profile fetched successfully.'
const GET_PROFILE_FAILURE_MESSAGE = 'Failed to fetch profile. Please try again.'
const UPDATE_PROFILE_SUCCESS_MESSAGE = 'Profile updated successfully.'
const UPDATE_PROFILE_FAILURE_MESSAGE = 'Failed to update profile. Please try again.'

// Address messages
const CREATE_ADDRESS_SUCCESS_MESSAGE = 'Address created successfully.'
const CREATE_ADDRESS_FAILURE_MESSAGE = 'Failed to create address. Please try again.'
const DELETE_ADDRESS_SUCCESS_MESSAGE = 'Address deleted successfully.'
const DELETE_ADDRESS_FAILURE_MESSAGE = 'Failed to delete address. Please try again.'
const ADDRESS_REACHED_LIMIT_MESSAGE_MIN = 'You should have at least one address.'
const ADDRESS_REACHED_LIMIT_MESSAGE_MAX = 'Your address limit has been reached.'

// Coupon messages
const COLLECT_COUPON_SUCCESS_MESSAGE = 'Coupon collected successfully.'
const COLLECT_COUPON_FAILURE_MESSAGE = 'Failed to collect coupon. Please try again.'
const COUPON_NOT_FOUND_MESSAGE = 'Coupon not found. Please try again.'
const COUPON_LIMIT_REACHED_MESSAGE = 'Coupon limit reached.'

export {
  SIGNUP_SUCCESS_MESSAGE,
  SIGNUP_FAILURE_MESSAGE,
  LOGIN_SUCCESS_MESSAGE,
  LOGIN_FAILURE_MESSAGE,
  LOGOUT_SUCCESS_MESSAGE,
  LOGOUT_FAILURE_MESSAGE,
  INTERNAL_ERROR_MESSAGE,
  USER_ALREADY_EXISTS_MESSAGE,
  PAYLOAD_SECRET_MISSING_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  GET_PROFILE_SUCCESS_MESSAGE,
  GET_PROFILE_FAILURE_MESSAGE,
  UPDATE_PROFILE_SUCCESS_MESSAGE,
  UPDATE_PROFILE_FAILURE_MESSAGE,
  DATA_FETCHED_SUCCESSFULLY,
  DATA_FETCH_FAILED,
  CREATE_ADDRESS_SUCCESS_MESSAGE,
  CREATE_ADDRESS_FAILURE_MESSAGE,
  DELETE_ADDRESS_SUCCESS_MESSAGE,
  DELETE_ADDRESS_FAILURE_MESSAGE,
  ADDRESS_REACHED_LIMIT_MESSAGE_MIN,
  ADDRESS_REACHED_LIMIT_MESSAGE_MAX,
  COLLECT_COUPON_SUCCESS_MESSAGE,
  COLLECT_COUPON_FAILURE_MESSAGE,
  COUPON_NOT_FOUND_MESSAGE,
  COUPON_LIMIT_REACHED_MESSAGE,
}
