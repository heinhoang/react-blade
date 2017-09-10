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
            title: `title${i}`,
            content: 'aaaaaa',
            gender: 'male'
        });
    }
    return data;
};