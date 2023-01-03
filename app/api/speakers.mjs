export async function get () {
  return {
    json: { speakers }
  }
}

export const speakers = [
  {
    "id": "amber-hoak",
    "name": "Amber Hoak",
    "company": "Microsoft Research",
    "twitter": "amber_hoak",
    "photo": "amber-hoak.jpg",
  },
  {
    "id": "jamund-ferguson",
    "name": "Jamund Ferguson",
    "company": "PayPal",
    "twitter": "xjamundx",
    "photo": "jamund-ferguson.jpg",
  },
  {
    "id": "rachel-lee-nabors",
    "name": "Rachel Lee Nabors",
    "company": "AWS Amplify",
    "twitter": "rachelnabors",
    "photo": "rachel-lee-nabors.jpg",
  },
  {
    "id": "matthew-bauer",
    "name": "Matthew Bauer",
    "company": "WebPinata",
    "twitter": "LotusBladeStorm",
    "photo": "matthew-bauer.jpg",
  },
  {
    "id": "brian-gershon",
    "name": "Brian Gershon",
    "company": "Freelance",
    "twitter": "brianfive",
    "photo": "brian-gershon.jpg",
  },
  {
    "id": "calvin-kipperman",
    "name": "Calvin Kipperman",
    "company": "Lyft",
    "twitter": "emnudge",
    "photo": "calvin-kipperman.jpg",
  }  
]