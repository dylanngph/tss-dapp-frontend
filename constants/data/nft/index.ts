type tplotOptions = {
  [key: string]: string
}

export const LEGAL_PROP: tplotOptions = {
  '1': 'Rủi ro thấp',
  '2': 'Rủi ro cao',
  '3': 'Chưa thấy rủi ro',
  '4': 'Không có thông tin',
};

export const LEGAL_PROP_COLOR: tplotOptions = {
  '1': 'green',
  '2': 'red',
  '3': 'green',
  '4': 'yellow',
};

export const TECH_LEVEL_PROP: tplotOptions = {
  '1': 'Có khả năng ứng dụng cao',
  '2': 'Có khả năng ứng dụng',
  '3': 'Chưa nhận thấy khả năng ứng dụng',
  '4': 'Không có thông tin',
};

export const TECH_LEVEL_PROP_COLOR: tplotOptions = {
  '1': 'green',
  '2': 'yellow',
  '3': 'yellow',
  '4': 'red',
};

export const SOCIAL_VALUE_PROP: tplotOptions = {
  '1': 'Có tiềm năng đóng góp cao cho xã hội',
  '2': 'Có tiềm năng đóng góp cho xã hội',
  '3': 'Chưa nhận thấy tiềm năng đóng góp cao cho xã hội',
  '4': 'Không có thông tin',
};

export const SOCIAL_VALUE_PROP_COLOR: tplotOptions = {
  '1': 'green',
  '2': 'green',
  '3': 'yellow',
  '4': 'red',
};

export const COMMUN_REPU_PROP: tplotOptions = {
  '1': 'Có nhiều thông tin tích cực',
  '2': 'Có một số thông tin tiêu cực',
  '3': 'Chưa tìm thấy thông tin tiêu cực',
  '4': 'Không có thông tin',
};

export const COMMUN_REPU_PROP_COLOR: tplotOptions = {
  '1': 'green',
  '2': 'red',
  '3': 'yellow',
  '4': 'yellow',
};

export const listBoxIOTA = [
  {
    id: 1,
    img: '/assets/images/IOTA1.png',
    subtitle: 'CON DẤU NFT',
    title: 'Passport of Blockchain',
    description: 'Hồ sơ dự án Blockchain',
  },
  // {
  //   id: 2,
  //   img: '/assets/images/IOTA2.png',
  //   subtitle: 'CON DẤU NFT',
  //   title: 'Tài sản số',
  //   description: '',
  // },
  // {
  //   id: 3,
  //   img: '/assets/images/IOTA3.png',
  //   subtitle: 'CON DẤU NFT',
  //   title: 'Tài sản nền',
  //   description: '',
  // }
]

export const listAuthSection = [
  {
    id: 1,
    img_path: '/assets/images/logo-tss-black.png',
    name: 'LOGO TSS',
  },
  {
    id: 2,
    img_path: '/assets/images/logoBAS.png',
    name: 'LOGO BAS',
  },
  {
    id: 3,
    img_path: '/assets/images/logoVBC.png',
    name: 'LOGO VBC',
  }
];

export const PASSPORT_BLOCKCHAIN = {
  logo: '/assets/images/IOTA.png',
  supplyDate: '24/12/2020',
  listImg: [
    {
      id: 1,
      imgPath: '/assets/images/logo-tss-black.png',
      name: 'logo-tss',
    },
    {
      id: 2,
      imgPath: '/assets/images/logo-bas.png',
      name: 'logo-bas',
    },
    {
      id: 3,
      imgPath: '/assets/images/logo-vcb.png',
      name: 'logo-vcb',
    }
  ],
  NFT_ID: '153979',
  Contract_ID: '0xc1346f105791ff91578737377b65f98de1025fa4',
  TX_Hash: '0xE1D7CB5791FF9157873DW3F377B65647278',
}