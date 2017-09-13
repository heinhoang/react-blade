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
                name: 'Add post',
                path: '/dashboard/posts/add'
            },
            {
                name: 'Posts',
                path: '/dashboard/posts'
            },
            {
                name: 'Translated',
                path: '/dashboard/translated'
            }
        ]
    },
    {
        name: 'Pages',
        icon: 'fa fa-music',
        children: [
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
]