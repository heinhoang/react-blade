const faker = require('faker');

module.exports = () => {
    const data = {
        users: [],
        posts: []
    };
    // Create data
    for (let i = 0; i < 50; i++) {
        data.users.push({
            id: i,
            name: `user${i}`
        });
        data.posts.push({
            id: i,
            title: faker.lorem.sentence(),
            subTitle: faker.lorem.sentence(),
            content: faker.lorem.paragraph(2),
            imageUrl: faker.random.image(),
            createdAt: faker.date.past(),
            createdBy: faker.name.findName()
        });
    }
    return data;
};