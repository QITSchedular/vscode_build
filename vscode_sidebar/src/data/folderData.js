const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    //public
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: "5",
              name: "hello.html",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          items: [],
        },
      ],
    },

    // src
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          items: [],
        },
        {
          id: "3",
          name: "Index.js",
          isFolder: false,
          items: [],
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false,
          items: [],
        },
        {
          id: "12",
          name: "Components",
          isFolder: true,
          items: [
            {
              id: "13",
              name: "Navigation_Components",
              isFolder: true,
              items: [
                {
                  id: "14",
                  name: "Navbar",
                  isFolder: true,
                  items: [
                    {
                      id: "15",
                      name: "Navbar.js",
                      isFolder: false,
                      items: [],
                    },
                    {
                      id: "16",
                      name: "Navbar.css",
                      isFolder: false,
                      items: [],
                    },
                  ],
                },
              ],
            },
            {
              id: "17",
              name: "Header_Components",
              isFolder: true,
              items: [
                {
                  id: "18",
                  name: "Header.css",
                  isFolder: false,
                  items: [],
                },
              ],
            },
          ],
        },
      ],
    },

    //package.json
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};

export default explorer;
