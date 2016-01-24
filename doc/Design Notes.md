# Class Blog Design Notes

## User Accounts & Authentication

Google configuration at: [Google Developers Console][UAA.1] as the Class Blog project.

Setup based on the [Adding user accounts][UAA.2] section of the Meteor
[Todo App with React][UAA.3] and a simplified (Google only) version of the
[Roll Your Own Authentication][UAA.3] recipe from The Meteor Chef.

Packages:
* [accounts-ui][UAA.6]
* [accounts-google][UAA.7]
* [thereactivestack:blazetoreact][UAA.5]

### Roles

**admin**

**teacher**

**student**

**mentor** (parent or other interested party, able to browse the blog with the same view as their student(s), but with no rights to create new content – not sure if they should be allowed to comment or not)

[UAA.1]: https://console.developers.google.com
[UAA.2]: https://www.meteor.com/tutorials/react/adding-user-accounts
[UAA.3]: https://www.meteor.com/tutorials/react/creating-an-app
[UAA.4]: https://themeteorchef.com/recipes/roll-your-own-authentication
[UAA.5]: https://atmospherejs.com/thereactivestack/blazetoreact
[UAA.6]:
