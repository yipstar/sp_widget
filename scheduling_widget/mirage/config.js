export default function () {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  this.namespace = "client-portal-api";

  this.get("/clinicians/2", () => {
    return {
      data: {
        id: "2",
        type: "clinicians",
        links: {
          self:
            "https://johnny-appleseed.clientsecure.me/client-portal-api/clinicians/2",
        },
        attributes: {
          firstName: "Johnny",
          lastName: "Appleseed",
          middleName: "",
          suffix: "",
          phone: "(626) 298-1956",
        },
      },
    };
  });

  // /cpt-codes?filter[clinicianId]=2
  this.get("/cpt-codes", () => {
    return {
      data: [
        {
          id: "6",
          type: "cptCodes",
          links: {
            self:
              "https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes/6",
          },
          attributes: {
            description: "Group Therapy",
            duration: 50,
            rate: "300.0",
            callToBook: "false",
          },
        },
        {
          id: "3866",
          type: "cptCodes",
          links: {
            self:
              "https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes/3866",
          },
          attributes: {
            description: "Psychiatric Diagnostic Evaluation",
            duration: 50,
            rate: "100.0",
            callToBook: "false",
          },
        },
        {
          id: "3871",
          type: "cptCodes",
          links: {
            self:
              "https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes/3871",
          },
          attributes: {
            description: "Psychotherapy for Crisis, 60 min",
            duration: 50,
            rate: "100.0",
            callToBook: "false",
          },
        },
        {
          id: "52969",
          type: "cptCodes",
          links: {
            self:
              "https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes/52969",
          },
          attributes: {
            description: "Developmental Testing, Extended",
            duration: 50,
            rate: "100.0",
            callToBook: "false",
          },
        },
      ],
      links: {
        first:
          "https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?page%5Bnumber%5D=1&page%5Bsize%5D=10",
        last:
          "https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?page%5Bnumber%5D=1&page%5Bsize%5D=10",
      },
    };
  });

  this.get("/offices", () => {
    return {
      data: [
        {
          id: "1",
          type: "offices",
          links: {
            self:
              "https://johnny-appleseed.clientsecure.me/client-portal-api/offices/1",
          },
          attributes: {
            city: "Port Alyssonbury",
            name: "Main Office",
            state: "NV",
            street: "Elise Drive",
            zip: "51859",
            phone: "(626) 298-1956",
            isVideo: false,
          },
        },
        {
          id: "63968",
          type: "offices",
          links: {
            self:
              "https://johnny-appleseed.clientsecure.me/client-portal-api/offices/63968",
          },
          attributes: {
            city: "Los Angeles",
            name: "Therapy Center",
            state: "CA",
            street: "801 S Hope Street",
            zip: "90017",
            phone: "(626) 298-1956",
            isVideo: false,
          },
        },
        {
          id: "3781352",
          type: "offices",
          links: {
            self:
              "https://johnny-appleseed.clientsecure.me/client-portal-api/offices/3781352",
          },
          attributes: {
            city: "Santa Monica",
            name: "Downtown Office",
            state: "CA",
            street: "510 Arizona Ave",
            zip: "90401",
            phone: "(626) 298-1956",
            isVideo: false,
          },
        },
      ],
      links: {
        first:
          "https://johnny-appleseed.clientsecure.me/client-portal-api/offices?page%5Bnumber%5D=1&page%5Bsize%5D=10",
        last:
          "https://johnny-appleseed.clientsecure.me/client-portal-api/offices?page%5Bnumber%5D=1&page%5Bsize%5D=10",
      },
    };
  });
}
