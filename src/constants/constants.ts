import { Message } from '@/types'

const VIETNAM_PROVINCES: any[] = [
  { label: 'An Giang', value: 'AG' },
  { label: 'Bà Rịa - Vũng Tàu', value: 'BR-VT' },
  { label: 'Bắc Giang', value: 'BG' },
  { label: 'Bắc Kạn', value: 'BK' },
  { label: 'Bạc Liêu', value: 'BL' },
  { label: 'Bắc Ninh', value: 'BN' },
  { label: 'Bến Tre', value: 'BTR' },
  { label: 'Bình Dương', value: 'BDUOG' },
  { label: 'Bình Định', value: 'BDINH' },
  { label: 'Bình Phước', value: 'BP' },
  { label: 'Bình Thuận', value: 'BTN' },
  { label: 'Cà Mau', value: 'CM' },
  { label: 'Cần Thơ', value: 'CT' },
  { label: 'Cao Bằng', value: 'CB' },
  { label: 'Đà Nẵng', value: 'DN' },
  { label: 'Đắk Lắk', value: 'DALAT' },
  { label: 'Đắk Nông', value: 'DNONG' },
  { label: 'Điện Biên', value: 'DBIEN' },
  { label: 'Đồng Nai', value: 'DNAI' },
  { label: 'Đồng Tháp', value: 'DTHAP' },
  { label: 'Gia Lai', value: 'GL' },
  { label: 'Hà Giang', value: 'HAG' },
  { label: 'Hà Nam', value: 'HAN' },
  { label: 'Hà Nội', value: 'HN' },
  { label: 'Hà Tĩnh', value: 'HT' },
  { label: 'Hải Dương', value: 'HD' },
  { label: 'Hải Phòng', value: 'HP' },
  { label: 'Hậu Giang', value: 'HGI' },
  { label: 'Hòa Bình', value: 'HB' },
  { label: 'Hồ Chí Minh', value: 'HCM' },
  { label: 'Hưng Yên', value: 'HY' },
  { label: 'Khánh Hòa', value: 'KH' },
  { label: 'Kiên Giang', value: 'KG' },
  { label: 'Kon Tum', value: 'KT' },
  { label: 'Lai Châu', value: 'LCH' },
  { label: 'Lâm Đồng', value: 'LD' },
  { label: 'Lạng Sơn', value: 'LS' },
  { label: 'Lào Cai', value: 'LCA' },
  { label: 'Long An', value: 'LA' },
  { label: 'Nam Định', value: 'NAMD' },
  { label: 'Nghệ An', value: 'NA' },
  { label: 'Ninh Bình', value: 'NB' },
  { label: 'Ninh Thuận', value: 'NT' },
  { label: 'Phú Thọ', value: 'PT' },
  { label: 'Phú Yên', value: 'PY' },
  { label: 'Quảng Bình', value: 'QB' },
  { label: 'Quảng Nam', value: 'QNA' },
  { label: 'Quảng Ngãi', value: 'QNg' },
  { label: 'Quảng Ninh', value: 'QNI' },
  { label: 'Quảng Trị', value: 'QT' },
  { label: 'Sóc Trăng', value: 'ST' },
  { label: 'Sơn La', value: 'SL' },
  { label: 'Tây Ninh', value: 'TNINH' },
  { label: 'Thái Bình', value: 'TB' },
  { label: 'Thái Nguyên', value: 'TNG' },
  { label: 'Thanh Hóa', value: 'TH' },
  { label: 'Thừa Thiên-Huế', value: 'TTH' },
  { label: 'Tiền Giang', value: 'TG' },
  { label: 'Trà Vinh', value: 'TV' },
  { label: 'Tuyên Quang', value: 'TQ' },
  { label: 'Vĩnh Long', value: 'VL' },
  { label: 'Vĩnh Phúc', value: 'VP' },
  { label: 'Yên Bái', value: 'YB' },
]

export type PROVINCE_ABREVIATIONS =
  | 'AG'
  | 'BR-VT'
  | 'BG'
  | 'BK'
  | 'BL'
  | 'BN'
  | 'BTR'
  | 'BDUOG'
  | 'BDINH'
  | 'BP'
  | 'BTN'
  | 'CM'
  | 'CT'
  | 'CB'
  | 'DN'
  | 'DALAT'
  | 'DNONG'
  | 'DBIEN'
  | 'DNAI'
  | 'DTHAP'
  | 'GL'
  | 'HAG'
  | 'HAN'
  | 'HN'
  | 'HT'
  | 'HD'
  | 'HP'
  | 'HGI'
  | 'HB'
  | 'HCM'
  | 'HY'
  | 'KH'
  | 'KG'
  | 'KT'
  | 'LCH'
  | 'LD'
  | 'LS'
  | 'LCA'
  | 'LA'
  | 'NAMD'
  | 'NA'
  | 'NB'
  | 'NT'
  | 'PT'
  | 'PY'
  | 'QB'
  | 'QNA'
  | 'QNg'
  | 'QNI'
  | 'QT'
  | 'ST'
  | 'SL'
  | 'TNINH'
  | 'TB'
  | 'TNG'
  | 'TH'
  | 'TTH'
  | 'TG'
  | 'TV'
  | 'TQ'
  | 'VL'
  | 'VP'
  | 'YB'

const AI_INSTRUCTIONS: Message[] = [
  {
    role: 'system',
    content:
      'Welcome to eWardrobe. You are an AI assistant designed to enhance the customer’s shopping experience by offering personalized recommendations and guidance.',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
  {
    role: 'system',
    content:
      'Always greet customers warmly and professionally. Begin with a friendly opening such as, "Hi! Welcome to eWardrobe. How can I assist you today?"',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
  {
    role: 'system',
    content:
      'Ask clarifying questions to understand customer needs, such as their size, preferred style, occasion, or budget. Use this information to suggest tailored clothing options.',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
  {
    role: 'system',
    content:
      'Provide detailed information about each product, including size availability, fabric type, pricing, and any special features that make the item stand out.',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
  {
    role: 'system',
    content:
      'If a requested item is out of stock, suggest similar alternatives that match the customer’s preferences and explain why the alternative might work for them.',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
  {
    role: 'system',
    content:
      'Offer outfit-building advice. Recommend complementary items, such as accessories or matching pieces, to create a complete and stylish look.',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
  {
    role: 'system',
    content:
      'Highlight seasonal promotions and discounts where applicable. For example, inform customers of buy-one-get-one offers, clearance sales, or special bundle deals.',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
  {
    role: 'system',
    content:
      'Assist customers with placing orders, updating carts, and tracking their purchases. Provide clear and step-by-step instructions if needed.',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
  {
    role: 'system',
    content:
      'Be knowledgeable about store policies, including return and exchange procedures, shipping timelines, and accepted payment methods. Explain these clearly when asked.',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
  {
    role: 'system',
    content:
      'Encourage feedback by asking customers how their experience has been and offering to help resolve any issues. Maintain a friendly and helpful tone throughout.',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
  {
    role: 'system',
    content:
      'Maintain professionalism and empathy in all interactions. Your tone should be approachable, polite, and supportive, ensuring customers feel valued.',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
  {
    role: 'system',
    content:
      'Your primary goal is to make shopping seamless and enjoyable for every customer, guiding them to find clothing that suits their needs and preferences.',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
  {
    role: 'system',
    content:
      'Always stay customer-focused. If there is anything you are unsure about, ask clarifying questions or suggest checking for further details.',
    senderId: 'stablelm-zephyr-3b-GGUF',
  },
]

export { VIETNAM_PROVINCES, AI_INSTRUCTIONS }
