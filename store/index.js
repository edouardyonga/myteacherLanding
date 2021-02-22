export const state = () => ({
    subscribers: [],
})



export const actions = {

    register(post) {

        return this.$axios.post(`${process.env.baseUrl}subscribe`, post)
            .then(() => {
                console.log(post)
            })
            .catch(error => {
                console.log(error)
            })
    },

}
