export default [
    {
        name: 'Dashboard',
        icon: 'fa fa-laptop',
        children: [
            {
                name: 'Dashboard',
                path: '/dashboard'
            },
            {
                name: 'Login',
                path: '/login'
            },
            {
                name: 'Signup',
                path: '/signup'
            }
        ]
    },
    {
        name: 'Layout',
        icon: 'fa fa-music',
        children: [
            {
                name: 'Add post',
                path: '/dashboard/posts/add'
            },
            {
                name: 'Posts',
                path: '/dashboard/posts'
            }
        ]
    },
]