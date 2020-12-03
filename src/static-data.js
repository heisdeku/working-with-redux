import photographer from './images/user.png';
import Girl from './images/girl.png'
export const contacts = {
  'JUIZn-VyX': {
    name: 'John Doe',
    email: 'fakejohn@gmail.com',
    profile_pic: photographer,
    status: 'blah blah bla',
    user_id: 'JUIZn-VyX'
  },
  'KZIUn-xyV': {
    name: 'Korede Collins',
    email: 'realkc@gmail.com',
    profile_pic: Girl,
    status: 'Money grows like grass',
    user_id: 'KZIUn-xyV'
  },
  'YWY2-1bD': {
    name: 'Emmanuel Alakijo',
    email: 'alakijoemma@gmail.com',
    profile_pic: photographer,
    status: 'Watching Avatar Again',
    user_id: 'YWY2-1bD'
  },
  'HDF2-dBe': {
    name: 'Aang Korra',
    email: 'iamavatar@gmail.com',
    profile_pic: Girl,
    status: 'I am the Last Airbender',
    user_id: 'HDF2-dBe'
  },
  'DBe2-hdf': {
    name: 'Timilehin Sharpe',
    email: 'timm@yahoo.com',
    profile_pic: photographer,
    status: 'Subscribe to my youtube channel',
    user_id: 'DBe2-hdf'
  },
  'HD7B-fDe': {
    name: 'Kitana Waters',
    email: 'iamwaters@gmail.com',
    profile_pic: photographer,
    status: 'I am a water bender for real',
    user_id: 'HD7B-fDe'
  },
  'VyXn-234': {
    name: 'Uncle Jimy',
    email: 'jfakeaccount@gmail.com',
    profile_pic: Girl,
    status: 'blah blah bla',
    user_id: 'VyXn-234'
  },
  'fDeB-hD1': {
    name: 'Doe John',
    email: 'deojon@gmail.com',
    profile_pic: photographer,
    status: 'blah blah bla',
    user_id: 'fDeB-hD1'
  },
  'yXn2-Bed': {
    name: 'Sokka Ozzai',
    email: 'sokkathewarrior@gmail.com',
    profile_pic: photographer,
    status: 'If firelord OZzai name his son Sokka',
    user_id: 'yXn2-Bed'
  },
  'iBdU-HD2': {
    name: 'Fire Mcaulay',
    email: 'fireguy@gmail.com',
    profile_pic: Girl,
    status: 'shey you fit bend fire',
    user_id: 'iBdU-HD2'
  },
}

export function generateUser() {
  return {
    name: 'Oluwaferanmi Deku',
    email: "dacodesdev@work.com",
    profile_pic: photographer,
    status: 'All day Hustling with the codes, trying to make daily commits for the street. Father of Pack Inc.',
    user_id: 'H23i-3bNK7'
  }
}

export function getMessages() {
  let messages = {}  
  for (let contact in contacts) {  
    console.log(contact)  
    messages[contact] = {
      0: {
        number: 0,
        text: "Hello man!",
        is_user_msg: false,   
      },
      1: {
        number: 1,
        text: "Doing great, You?",
        is_user_msg: true,   
      },
      2: {
        number: 0,
        text: "Hello man!",
        is_user_msg: false,   
      },
      3: {
        number: 1,
        text: "Doing great, You?",
        is_user_msg: true,   
      },
      4: {
        number: 0,
        text: "Hello man!",
        is_user_msg: false,   
      },
      5: {
        number: 1,
        text: "Doing great, You?",
        is_user_msg: true,   
      },
      6: {
        number: 0,
        text: "Hello man!",
        is_user_msg: false,   
      },
      7: {
        number: 1,
        text: "Doing great, You?",
        is_user_msg: true,   
      },
      8: {
        number: 0,
        text: "Hello man!",
        is_user_msg: false,   
      },
      9: {
        number: 1,
        text: "Doing great, You?",
        is_user_msg: true,   
      }
    }           
  }
  console.log(messages);  
  return messages;  
}