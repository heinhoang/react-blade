const faker = require('faker');
const jwt = require('jsonwebtoken');

const generateData = () => {
    const data = {
        users: [],
        posts: []
    };
    // Create data
    for (let i = 0; i < 50; i++) {
        data.users.push({
            id: i,
            userName: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            name: faker.name.findName(),
            token: jwt.sign(i, 'secret_token')
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

// console.log(JSON.stringify(generateData()));
module.exports = generateData();