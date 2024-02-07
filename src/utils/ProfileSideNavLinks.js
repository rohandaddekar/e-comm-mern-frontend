const links = [
  {
    title: "Profile",
    nested: false,
    to: "profile",
  },
  {
    title: "Address",
    nested: false,
    to: "address",
  },
  {
    title: "Settings",
    nested: true,
    nestedLinks: [
      {
        title: "Password",
        to: "password",
      },
    ],
  },
];

export default links;
